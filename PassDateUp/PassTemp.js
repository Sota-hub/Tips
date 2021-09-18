const PassUp = (props) => {
  const getTemp = () => {
    const temperature = 30;
    props.onCalcTemp(temperature);
  };

  return (
    <div>
      <button onClick={getTemp}></button>
    </div>
  );
};

export default PassUp;
