import PropTypes from "prop-types";
import styles from "./feedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          className={[styles.button, styles[option]].join(" ")}
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
