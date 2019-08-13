const Display = (props) => {
    return (
        <div id="display" style={{ width: "400px", border: "1px solid red", height: "50px" }}>
            {props.numbers}
        </div>
    )

}

const NumPad = (props) => {
    function handleClick(e) {
        if(e.target.value == ".") {
            props.addNewDecimal(e.target.value)
        } else {
            props.addNewNumber(e.target.value)
        }
    }
    return (
        <div onClick={handleClick}>
            <button value="1">1</button>
            <button value="0">0</button>
            <button value=".">.</button>
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
                <NumPad addNewNumber = {this.props.addNewNumber} addNewDecimal = {this.props.addNewDecimal}/>
            </div>
        )
    }
}

// REDUX

const ADD_NUMBER = 'ADD_NUMBER'
const ADD_DECIMAL = 'ADD_DECIMAL'

//ACTION CREATOR
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

//REDUCER
const numReducer = (state = '0', action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return state + action.number
        case ADD_DECIMAL:
            if((/\./).test(state)) {
                return state
            }
            return state + '.'
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
        addNewNumber: function (number) {
            dispatch(addNumber(number))
        },
        addNewDecimal: () => {
            dispatch(addDecimal())
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
