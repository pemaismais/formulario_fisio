function Options({ title }) {
  return (
    <div>
      <span> {title ? title : "Problema"}: </span>
      <label>
        <input type="radio" name={title} value={`${title}1`} />
        Nenhuma
      </label>
      <label>
        <input type="radio" name={title} value={`${title}1`} />
        Leve
      </label>
      <label>
        <input type="radio" name={title} value={`${title}2`} />
        Moderada
      </label>
      <label>
        <input type="radio" name={title} value={`${title}3`} />
        Intensa
      </label>
    </div>
  );
}
export default Options;
