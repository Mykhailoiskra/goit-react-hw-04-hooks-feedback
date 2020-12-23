import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statisctics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div className={s.container}>
        <p className={[s.statsWrapper, s.good].join(" ")}>
          <span className={s.statsTag}>Good</span>{" "}
          <span className={s.statsNumber}>{good}</span>
        </p>
        <p className={[s.statsWrapper, s.neutral].join(" ")}>
          <span className={s.statsTag}>Neutral</span>
          <span className={s.statsNumber}> {neutral}</span>
        </p>
        <p className={[s.statsWrapper, s.bad].join(" ")}>
          <span className={s.statsTag}>Bad</span>{" "}
          <span className={s.statsNumber}>{bad}</span>
        </p>
      </div>
      <p className={s.summaryWrapper}>
        <span className={s.statsTag}>Total</span>{" "}
        <span className={s.statsNumber}> {total}</span>
      </p>
      <p className={s.summaryWrapper}>
        <span className={s.statsTag}>Posivite feedback</span>
        <span className={s.statsNumber}> {positivePercentage}%</span>
      </p>
    </>
  );
}

export default Statisctics;

Statisctics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
