import "../App.css";
import { namesNValues } from "./Home.jsx";
import Results from "../comps/Results.jsx";
import data from "../data/data.js";

function ResultPage() {
  return (
    <>
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
          return <Results title={el.title} desc={el.description} yturl={el.url} />;
        });
      })}
    </>
  );
}

export default ResultPage;
