import PropTypes from "prop-types";
import styles from "./section.module.css";

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
