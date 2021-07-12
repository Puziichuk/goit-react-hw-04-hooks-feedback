import PropTypes from 'prop-types';
import section from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={section.section}>
      <h2 className={section.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
