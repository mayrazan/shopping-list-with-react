export function Label(props) {
    const {onChange, value} = props;
  return (
    <label htmlFor="">
      Item: <input type="text" onChange={onChange} value={value}/>{" "}
    </label>
  );
}
