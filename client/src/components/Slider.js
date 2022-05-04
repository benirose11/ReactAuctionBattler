export default function Slider({
  label,
  minval,
  maxval,
  setGameSettings,
  gameSettings,
  gameSettingsKey,
}) {
  const updateSettingState = (event) => {
    setGameSettings(() => {
      let newstate = { ...gameSettings };
      newstate[gameSettingsKey] = parseInt(event.target.value);

      return newstate;
    });
  };

  return (
    <>
      <label for={label}>{label}</label>
      <div>
        {minval}
        <input
          type="range"
          min={minval}
          max={maxval}
          name={label}
          onChange={updateSettingState}
        ></input>
        {maxval}
      </div>
    </>
  );
}
