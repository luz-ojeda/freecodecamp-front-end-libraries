//Redux:

const ADD = 'ADD'

const addValue = (value) => {
    return {
        type: ADD,
        value: value
    }
};

const valueReducer = (state = '', action) => {
    switch(action.type) {
        case ADD:
            return state + action.value;
        default:
            return state;
    }
}

const store = Redux.createStore(valueReducer)

//React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        }
    }

    render() {
        return (
            <input id="display" readOnly></input>
        )
    }
}

class NumberPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
       this.props.addNewValue(this.state.display)
    }

    render() {
        return (

            <div id="numbers" onClick={this.handleChange}>
                <button id="one">1</button>
                <button id="two">2</button>
                <button id="three">3</button>
                <button id="four">4</button>
                <button id="five">5</button>
                <button id="six">6</button>
                <button id="seven">7</button>
                <button id="eight">8</button>
                <button id="nine">9</button>
                <button id="decimal">.</button>
                <button id="zero">0</button>
                <button id="clear">Clear</button>
            </div>

        )
    }
}

class Operators extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="operators">
                <button id="add">+</button>
                <button id="subtract">-</button>
                <button id="multiply">x</button>
                <button id="divide">/</button>
                <button id="equals">=</button>
            </div>

        )
    }
}

class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Display />
                <div id="keypad" className="keypad">
                    <NumberPad /><Operators />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {values:state}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewValue: (value) => {
            dispatch(addValue(value)) //addValue is the action creator
        }
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        )
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"))