import "../index.css";
import { Link } from "react-router-dom";
import Options from "../comps/Options.jsx";
import data from "../data/data.js";
import Footer from "../comps/Footer.jsx";
let checkedButtons = [];
let namesNValues = [];
let token = null

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
  token = generateToken()
};

const generateToken = () => {
  return Math.random();
}

function Home() {
  return (
    <div className="space-y-14">
      <div className=" space-y-3 flex  items-center  m-auto w-96 flex-col mt-5
      md:w-screen" >
        <div className="bg-white text-2xl p-5 w-80 rounded-md
        md:space-x-4 md:p-7 md:w-auto " >
          <span className="font-semibold"> Protocolo de Prevenção LER e DORT </span>
          <br />
          <span className="text-base opacity-70">Métodos fisioterapêuticos para alívio e prevenção de dores em professoras do ens. Fundamental</span>
        </div>
        <div className=" flex space-y-2 w-80 flex-col align-middle justify-center
        md:w-auto"  >

          {data.map((item) => {
            return <Options title={item.title} key={item.title} />;
          })}
          <Link
            className="place-self-end w-fit h-fit p-2 pl-4 pr-4  bg-blue-700 font-semibold text-slate-50 rounded-md hover:bg-blue-600 transion"
            to="/result"
            onClick={() => {
              result();
            }}
          >
            Enviar
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
export { checkedButtons, namesNValues, token };
