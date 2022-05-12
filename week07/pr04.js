class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  goBack() {
    let nextDate = this.state.date;
    nextDate.setSeconds(nextDate.getSeconds() - 10);
    this.setState({
      date: nextDate
    });
  }
  render() {
    return (
      <div>
        <h3>
          현재 시간은 [{this.state.date.toLocaleTimeString()}] 입니다.
        </h3>
        <button onClick={this.goBack.bind(this)}>10초 뒤로가기</button>
      </div>
    );
  }
}

ReactDOM.render(<Clock/>, document.getElementById('root'));
