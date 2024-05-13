const Results = ({ title, desc, yturl }) => {
  return (
    <div className="bg-white text-lg p-4  w-auto space-y-5 rounded-md flex flex-col justify-center items-center mt-5">
      <span className="text-2xl font-semibold">{title ? title : "Nome do exercicio"} </span>
        <iframe
        className="max-w-md h-96"
          src={yturl}
          title="Elevação Pélvica"
          frameborder="0"
          allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <span className="text-base opacity-70" >{desc ? desc : "descricao do exercicio "} </span>
    </div>
  );
}
export default Results;
