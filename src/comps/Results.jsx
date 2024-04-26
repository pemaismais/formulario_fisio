function Results({ title, desc, yturl }) {
  return (
    <div>
      <span>{title ? title : "Nome do exercicio"} </span>
      <br />
      <iframe
        width="300"
        height="300"
        src={yturl}
        title="Elevação Pélvica"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <br />
      <span>{desc ? desc : "descricao do exercicio "} </span>
    </div>
  );
}
export default Results;
