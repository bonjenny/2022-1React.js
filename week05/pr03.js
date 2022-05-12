class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <h3>
        현재 시간은 [{this.state.date.toLocaleTimeString()}] 입니다.
      </h3>
    );
  }
}

ReactDOM.render(<Clock/>, document.getElementById('root'));
