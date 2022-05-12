function Show(props) {
  return (
    <h3>
      Name is { props.name }
    </h3>
  );
}

const element = <Show name="엄지희"/>;
ReactDOM.render(element, document.getElementById('root'));