import "../index.css";
import { namesNValues, token } from "./Home.jsx";
import Results from "../comps/Results.jsx";
import data from "../data/data.js";
import { Link } from "react-router-dom";
import Footer from "../comps/Footer.jsx";

function ResultPage() {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center w-96 flex-col m-auto  min-h-screen
      md:w-2/6">

        <div className=" flex space-y-2 w-80 flex-col align-middle justify-center mb-10
        md:w-auto"  >
          {namesNValues.map((obj) => {
            // pegando o PROBLEMA
            const currentData = data.filter((item) => {
              return item.title == obj.title;
            });

            // pegando os EXERCICIOS
            const currentExercises = currentData[0].exercicios.filter((item) => {
              return item.nivel == obj.value || item.nivel == "all";
            });

            return currentExercises.map((el) => {
              return (
                <Results title={el.title} desc={el.description} yturl={el.url} key={el.title} />
              );
            });
          })}
        
        <Link
          className="place-self-end w-fit h-fit p-2 pl-4 pr-4 mt-2 mb-14 z bg-blue-700 font-semibold text-slate-50 rounded-md hover:bg-blue-600 transion"
          to="/"
        >
          Voltar
        </Link>
        </div>
        <Footer />

      </div>
    </div>
  );
}

export default ResultPage;
