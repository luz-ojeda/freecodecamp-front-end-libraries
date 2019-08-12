class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.setState({
            number: e.target.textContent
        })
    }

    render() {
        return (
            <div className="container">
                <div id="display">{this.state.number}</div>
                <div id="keypad" className="keypad" onClick={this.handleClick}>
                    <div id="numbers">
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
                    <div id="operators">
                        <button id="add">+</button>
                        <button id="subtract">-</button>
                        <button id="multiply">x</button>
                        <button id="divide">/</button>
                        <button id="equals">=</button>
                    </div>
                </div>

            </div>)
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root"))