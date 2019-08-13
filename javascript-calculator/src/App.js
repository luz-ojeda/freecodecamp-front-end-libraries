const Display = (props) => {
    return (
        <div id="display" style={{ width: "400px", border: "1px solid red", height: "50px" }}>
            {props.numbers}
        </div>
    )

}

const NumPad = (props) => {
    return (
        <div onClick={props.handleClick}><button value="1">1</button></div>
    )
}

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.addNewNumber(e.target.value)

    }
    render() {
        return (
            <div>
                <Display numbers = {this.props.numbers}/>
                <NumPad handleClick = {this.handleClick}/>
            </div>
        )
    }
}

// REDUX

const ADD_NUMBER = 'ADD_NUMBER'

//ACTION CREATOR
const addNumber = (number) => {
    return {
        type: ADD_NUMBER,
        number: number
    }
}

//REDUCER
const numReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return [...state, action.number]
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
