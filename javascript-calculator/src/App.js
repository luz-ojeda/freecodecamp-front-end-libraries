const Display = (props) => {
    return (
        <div id="display" style={{ width: "400px", border: "1px solid red", height: "50px" }}>
            {props.numbers}
        </div>
    )

}

const NumPad = (props) => {
    function handleNumPadClick(e) {
        if (e.target.value == ".") {
            props.addNewDecimal(e.target.value)
        } else if (e.target.value == "0") {
            props.addNewZero(e.target.value)
        } else if (props.numbers.length == 1){
            props.addFirstNumber_dispatched(e.target.value)
        } else {
            props.addNewNumber(e.target.value)
        }
    }
    return (
        <div onClick={handleNumPadClick}>
            <button id="one" value="1">1</button>
            <button id="two" value="2">2</button>
            <button id="zero" value="0">0</button>
            <button id="decimal" value=".">.</button>
        </div>
    )
}

const Operators = (props) => {
    function handleOperatorsClick(){

    }
    return(
        <div>
            <button id="add" value="+">+</button>
        </div>
    )
}

class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Display numbers={this.props.numbers} />
                <NumPad numbers = {this.props.numbers} addFirstNumber_dispatched = {this.props.addFirstNumber_dispatched} addNewNumber={this.props.addNewNumber} addNewDecimal={this.props.addNewDecimal} addNewZero={this.props.addNewZero} />
                <Operators/>
            </div>
        )
    }
}

// REDUX

const FIRST_NUMBER = 'FIRST_NUMBER'
const ADD_NUMBER = 'ADD_NUMBER'
const ADD_DECIMAL = 'ADD_DECIMAL'
const ADD_ZERO = 'ADD_ZERO'

//ACTION CREATOR
const addFirstNumber = (number) => {
    return {
        type: FIRST_NUMBER,
        number: number
    }
}

const addNumber = (number) => {
    return {
        type: ADD_NUMBER,
        number: number
    }
}

const addDecimal = () => {
    return {
        type: ADD_DECIMAL
    }
}

const addZero = (number) => {
    return {
        type: ADD_ZERO,
        number: number
    }
}

//REDUCER
var contains_decimal = (/\./)
const numReducer = (state = '0', action) => {
    switch (action.type) {
        case FIRST_NUMBER:
            return eval(parseInt(state + action.number))
        case ADD_NUMBER:
            return state + action.number
        case ADD_DECIMAL:
            if (contains_decimal.test(state)) {
                return state
            }
            return state + '.'
        case ADD_ZERO:
            if (contains_decimal.test(state) || state != "0") {
                return state + "0"
            }
            return state
        default:
            return state
    }
}

//STORE
const store = Redux.createStore(numReducer);

//CONECTO REACT-REDUX
const Provider = ReactRedux.Provider;

//MAP STATE AND PROPS
function mapStateToProps(state) {
    return ({
        numbers: state
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        addFirstNumber_dispatched: (number) => {
            dispatch(addFirstNumber(number))
        },
        addNewNumber: (number) => {
            dispatch(addNumber(number))
        },
        addNewDecimal: () => {
            dispatch(addDecimal())
        },
        addNewZero: (number) => {
            dispatch(addZero(number))
        }
    })
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"))
