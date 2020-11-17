export function List(props) {
    const {items = []} = props;
  return (
    <ul>
      <li>{items}</li>
    </ul>
  );
}
