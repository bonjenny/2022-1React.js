function formatInfo(student) {
  return student.name + " [" + student.id + "]";
}

const student = {
  id: '20202865',
  name: 'EomJihee',
  color: 'red'
};

const element = (
  <h3 class={student.color}>
    {formatInfo(student)}
  </h3>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);