import { useState } from "react";

function Calculator() {
  const [number, setNumber] = useState<string>("");
  const [operator, setOperator] = useState<string | null>(null);
  const [previusValue, setpreviusValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const onHandleClickNumber = (value: String) => {
    setNumber(number + value);
  };

  const Clear = () => {
    setNumber("");
    setOperator(null);
    setpreviusValue("");
    setResult("");
  };

  const onHandleClickOperator = (op: string) => {
    setNumber("");
    setOperator(op);

    setpreviusValue(number);
  };

  const calculateResult = () => {
    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = parseFloat(previusValue) + parseFloat(number);
        break;
      case "-":
        calculatedResult = parseFloat(previusValue) - parseFloat(number);
        break;
      case "/":
        calculatedResult = parseFloat(previusValue) / parseFloat(number);
        break;
      case "%":
        calculatedResult = parseFloat(previusValue) % parseFloat(number);
        break;
      case "*":
        calculatedResult = parseFloat(previusValue) * parseFloat(number);
        break;
      default:
        return;
    }

    setResult(calculatedResult.toString());

    setNumber(calculatedResult.toString());
    setpreviusValue("0");
    setOperator(null);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
  };

  return (
    <div className=" flex justify-center items-center h-svh">
      <select
        name=""
        id=""
        className="absolute top-44 font-mono p-1"
        onChange={onHandleChange}
      >
        <option value="" selected disabled hidden>
          Eliga Color
        </option>
        <option value="bg-emerald-400">Esmeralda</option>
        <option value="bg-purple-400">Purpura</option>
        <option value="bg-red-400">Rojo</option>
        <option value="bg-blue-400">Azul</option>
        <option value="bg-yellow-400">Amarillo</option>
        <option value="bg-orange-500">Naranja</option>
      </select>
      <div className={`m-auto w-[450px] ${color}  h-auto  rounded-xl `}>
        <div className="    h-8 flex justify-end text-4xl font-sans items-center opacity-40   ">
          {previusValue}
          {operator}
        </div>
        <div className="    h-24 flex justify-end text-4xl font-sans items-center    ">
          {number || "0" || result}
        </div>
        <div className="flex  ">
          <div className="flex flex-wrap p-2  justify-center gap-3 ">
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickOperator("%")}
            >
              %
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => setNumber(number.slice(0, -1))}
            >
              CE
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => Clear()}
            >
              C
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("9")}
            >
              7
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("8")}
            >
              8
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("7")}
            >
              9
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("4")}
            >
              4
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("5")}
            >
              5
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("6")}
            >
              6
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("1")}
            >
              1
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("2")}
            >
              2
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("3")}
            >
              3
            </button>
            <button className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl">
              #
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber("0")}
            >
              0
            </button>
            <button
              className="bg-gray-200 rounded-2xl w-24 h-20 text-3xl"
              onClick={() => onHandleClickNumber(".")}
            >
              .
            </button>
          </div>
          <div className=" flex flex-col    justify-center gap-3 p-2   ">
            <button
              className="bg-red-500 rounded-2xl w-24 h-20 text-4xl   "
              onClick={() => onHandleClickOperator("+")}
            >
              +
            </button>
            <button
              className="bg-red-500 rounded-2xl w-24 h-20 text-4xl   "
              onClick={() => onHandleClickOperator("-")}
            >
              -
            </button>
            <button
              className="bg-red-500 rounded-2xl w-24 h-20 text-4xl   "
              onClick={() => onHandleClickOperator("*")}
            >
              *
            </button>
            <button
              className="bg-red-500 rounded-2xl w-24 h-20 text-4xl   "
              onClick={() => onHandleClickOperator("/")}
            >
              /
            </button>
            <button
              className="bg-red-500 rounded-2xl w-24 h-20 text-4xl   "
              onClick={calculateResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
