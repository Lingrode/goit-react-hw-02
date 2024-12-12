import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button className={totalFeedback ? "" : css.hide} onClick={resetFeedback}>
        Reset
      </button>
    </div>
  );
};

export default Options;
