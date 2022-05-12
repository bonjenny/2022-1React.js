// 바인딩처리 방법(1)
class EventHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
    // 바인딩처리 방법(2)
    // this.handleClick = this.handleClick.bind(this);
  }
  // 바인딩처리 방법(1)
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<EventHandling/>, document.getElementById('root'))
