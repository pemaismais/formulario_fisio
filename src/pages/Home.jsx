import "../App.css";
import { Link } from "react-router-dom";
import Options from "../comps/Options.jsx";
import data from "../data/data.js";
let checkedButtons = [];
let namesNValues = [];

const getNamesNValues = (buttons) => {
  let array = [];
  buttons.forEach((el) => {
    array.push({
      title: el.slice(0, el.length - 1),
      value: el.slice(el.length - 1),
    });
  });
  return array;
};

const getCheckedRadioButtons = () => {
  let cButtons = [];
  const radioButtons = document.querySelectorAll("input[type='radio']");
  radioButtons.forEach((el) => {
    if (el.checked == true) {
      cButtons.push(el.value);
    }
  });
  return cButtons;
};

const result = () => {
  checkedButtons = [];
  namesNValues = [];

  checkedButtons = getCheckedRadioButtons();
  namesNValues = getNamesNValues(checkedButtons);
};

function Home() {
  return (
    <>
      <div>
        <span> Qual região você sente dor: </span>
        <span> Qual o nível de dor na região: </span>
      </div>
      {data.map((item) => {
        return <Options title={item.title} key={item.title} />;
      })}

      <Link
        to="/result"
        onClick={() => {
          result();
        }}
      >
        {" "}
        clica{" "}
      </Link>
    </>
  );
}

export default Home;
export { checkedButtons, namesNValues };
