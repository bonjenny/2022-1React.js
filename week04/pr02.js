function Show(props) {
  return (
    <h3>
      Name is { props.name }
    </h3>
  );
}

function App() {
  return (
    <main>
      <Show name="엄기기"/>
      <Show name="엄니니"/>
      <Show name="엄디디"/>
    </main>
  );
}

Show.defaultProps = {
  name: '홍길동'
}

ReactDOM.render( <App/>, document.getElementById('root') );
