class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            stage: 'session',
            minutes: '25',
            seconds: '00',
            sessionLength: '25',
            breakLength: '5'
        };
        this.handleStartStop = this.handleStartStop.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleSessionLength = this.handleSessionLength.bind(this)
        this.handleBreakLength = this.handleBreakLength.bind(this)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.seconds == "00" && this.state.minutes > 10) {
            this.setState((state) => ({
                minutes: state.minutes - 1,
                seconds: 59 //minute change
            }))
        } else if (this.state.seconds == "00" && this.state.minutes < 10) {
            if (this.state.minutes == "00" && this.state.stage == 'session') {
                this.setState((state) => ({
                    minutes: "0" + state.breakLength,
                    seconds: '00',
                    stage: 'break'
                }))
            } else if (this.state.minutes == "00" && this.state.stage == 'break') {
                this.setState((state) => ({
                    minutes: "0" + state.sessionLength,
                    stage: 'session'
                }))
            } else {
                this.setState((state) => ({
                    minutes: "0" + (state.minutes - 1),
                    seconds: 59
                }))
            }
        } else if (this.state.seconds <= 10) {
            this.setState((state) => ({
                seconds: "0" + (state.seconds - 1)
            })) // ticking when seconds < 10
        } else {
            this.setState((state) => ({
                seconds: state.seconds - 1
            })) //normal ticking between minutes, seconds > 10
        }
    }

    handleStartStop() {
        if (this.state.running) {
            clearInterval(this.timerID)
            this.setState({
                running: false
            })
        } else {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            )
            this.setState({
                running: true
            })
        }
    }

    handleReset() {
        this.setState(() => ({
            running: false,
            minutes: '25',
            seconds: '00',
            sessionLength: '25'
        }))
        clearInterval(this.timerID)
    }

    handleSessionLength(e) {
        if (e.target.value == "increment" && this.state.sessionLength < "60") {
            this.setState((state) => ({
                minutes: parseInt(state.minutes) + 1,
                sessionLength: parseInt(state.sessionLength) + 1
            }))
        } else if(e.target.value == "decrement" && this.state.sessionLength > "01"){
            if (this.state.minutes > 10) {
                this.setState((state) => ({
                    minutes: parseInt(state.minutes) - 1,
                    sessionLength: parseInt(state.sessionLength) - 1
                }))
            } else {
                this.setState((state) => ({
                    minutes: "0" + (parseInt(state.minutes) - 1),
                    sessionLength: "0" + (parseInt(state.sessionLength) - 1)
                }))
            }
        }
    }

    handleBreakLength(e) {
        if (e.target.value == "increment" && this.state.breakLength < "60") {
            this.setState((state) => ({
                breakLength: parseInt(state.breakLength) + 1
            }))
        } else if (e.target.value == "decrement" && this.state.breakLength > "01") {
            this.setState((state) => ({
                breakLength: parseInt(state.breakLength) - 1
            }))
        }
    }

    render() {
        return (
            <div>
                <h2 id="timer-label">{this.state.stage}</h2>
                <div id="time-left">{this.state.minutes}:{this.state.seconds}</div>
                <button id="start_stop" onClick={this.handleStartStop}>Start/Stop</button>
                <button id="reset" onClick={this.handleReset}>Reset</button>

                <br />

                <h3 id="session-label">Session Length</h3>
                <button id="session-increment" value="increment" onClick={this.handleSessionLength}>+</button>

                <div id="session-length">{this.state.sessionLength}</div>

                <button id="session-decrement" value="decrement" onClick={this.handleSessionLength}>-</button>

                <h3 id="break-label">Break Length</h3>
                <button id="break-increment" value="increment" onClick={this.handleBreakLength}>+</button>

                <div id="break-length">{this.state.breakLength}</div>

                <button id="break-decrement" value="decrement" onClick={this.handleBreakLength}>-</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);