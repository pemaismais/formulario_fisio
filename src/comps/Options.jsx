const Options = ({ title }) => {
  return (
    <div className="bg-white space-y-1 text-lg pl-6 pb-7 pt-6 w-full rounded-lg flex flex-col items-start
    md:flex-row md:space-x-4 md:p-7" > 
      <span className="text-xl ml-1 mb-2"> {title ? title : "Problema"}: </span>
      <label>
         <input className="h-5 w-5 mr-2 cursor-pointer" defaultChecked='true' type="radio" name={title} value={`${title}1`} />
        Nenhuma
      </label>
      <label >
        <input className="h-5 w-5 mr-2 cursor-pointer" type="radio" name={title} value={`${title}1`} />
        Leve
      </label>
      <label >
        <input className="h-5 w-5 mr-2 cursor-pointer" type="radio" name={title} value={`${title}2`} />
        Moderada
      </label>
      <label>
        <input className="h-5 w-5 mr-2 cursor-pointer" type="radio" name={title} value={`${title}3`} />
        Intensa
      </label>
    </div>
  );
}
export default Options;
