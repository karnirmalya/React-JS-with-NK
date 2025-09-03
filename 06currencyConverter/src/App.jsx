//CODE FOR CURRENCY CONVERTING

import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"; //curly braces

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("inr");

  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); //check is there
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/bgimageforcurrency.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}

                //currencyDisable={true}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                 //amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert <strong>{from.toUpperCase()}</strong> to{" "}
              <strong>{to.toUpperCase()}</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

//CODE FOR INR BEING FIXED AND SWAP WORKING PROPERLY

// import { useState } from "react";
// import { InputBox } from "./components";
// import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

// function App() {
//   const [amount, setAmount] = useState("");
//   const [convertedAmount, setConvertedAmount] = useState("");
//   const [toCurrency, setToCurrency] = useState("usd");
//   const [isInrFrom, setIsInrFrom] = useState(true); // 🔁 controls swap direction

//   const baseCurrency = isInrFrom ? "inr" : toCurrency;
//   const targetCurrency = isInrFrom ? toCurrency : "inr";

//   const currencyInfo = useCurrencyInfo(baseCurrency);
//   const options = Object.keys(currencyInfo ).filter(
//     (cur) => cur !== "inr"
//   );

//   const swap = () => {
//     setAmount(convertedAmount);
//     setConvertedAmount(amount);
//     setIsInrFrom(!isInrFrom);
//   };

//   const convert = () => {
//     const amt = parseFloat(amount);
//     if (!isNaN(amt) && currencyInfo[targetCurrency]) {
//       const result = amt * currencyInfo[targetCurrency];
//       setConvertedAmount(result.toFixed(2));
//     } else {
//       setConvertedAmount("");
//     }
//   };

//   return (
//     <div
//       className="w-full h-screen relative flex justify-center items-center bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url('/bgimageforcurrency.jpeg')`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-none z-0" />
//       <div className="relative z-10 w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-lg bg-white/30">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             convert();
//           }}
//         >
//           {/* FROM box */}
//           <InputBox
//             label="From"
//             amount={amount}
//             onAmountChange={(val) => setAmount(val)}
//             currencyOptions={isInrFrom ? ["inr"] : options}
//             onCurrencyChange={(val) => setToCurrency(val)}
//             selectCurrency={isInrFrom ? "inr" : toCurrency}
//             currencyDisable={isInrFrom}
//           />

//           {/* SWAP BUTTON */}
//           <div className="relative w-full h-0.5 my-2">
//             <button
//               type="button"
//               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//               onClick={swap}
//             >
//               Swap
//             </button>
//           </div>

//           {/* TO box */}
//           <InputBox
//             label="To"
//             amount={convertedAmount}
//             amountDisable={true}
//             currencyOptions={isInrFrom ? options : ["inr"]}
//             onCurrencyChange={(val) => setToCurrency(val)}
//             selectCurrency={isInrFrom ? toCurrency : "inr"}
//             currencyDisable={!isInrFrom}
//           />

//           {/* Convert button */}
//           <button
//             type="submit"
//             className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg"
//           >
//             Convert <strong>{baseCurrency.toUpperCase()}</strong> to{" "}
//             <strong>{targetCurrency.toUpperCase()}</strong>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;
