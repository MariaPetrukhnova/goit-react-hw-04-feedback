import React from "react";
import PropTypes from 'prop-types';
import css from "./Section.module.css";



const Section = ({ title, children }) => {
    return (
        <section className={css.sections}>
            <h2 className={css.section_title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section;