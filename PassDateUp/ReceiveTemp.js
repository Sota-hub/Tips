import reactDom from "react";

const ReceivePass = () => {
  const TempCalc = (temp) => {
    return (temp *= 2);
  };
  console.log(TempCalc);

  return (
    <div>
      <PassTemp onCalcTemp={TempCalc} />
    </div>
  );
};

export default ReceivePass;
