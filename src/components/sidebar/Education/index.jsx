import React, { useEffect, useState } from "react";
import styles from "./Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { CONSTANTS, createDefaultEducation } from "../../../utils/constants";

export default function Education({ onDataChanged, data }) {
    const [education, setEducation] = useState(createDefaultEducation());

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setEducation(data);
        }
      }, [data]);

    useEffect(() => {
        onDataChanged(education);
    }, [education]);

    const setSchool = (school) => {
        if (school.length === CONSTANTS.WORD_LIMIT_MEDIUM) return;
        setEducation({ ...education, school: school });
    };

    const setDegree = (degree) => {
        if (degree.length === CONSTANTS.WORD_LIMIT_MEDIUM_LARGE) return;
        setEducation({ ...education, degree: degree });
    };

    return (
        <div className={styles.header}>
            <h1>
                <FontAwesomeIcon icon={faSchool} /> Education
            </h1>
            <div className={styles.inputsWrapper}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="School"
                    value={education.school}
                    onChange={(e) => setSchool(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Degree"
                    value={education.degree}
                    onChange={(e) => setDegree(e.target.value)}
                />
            </div>
        </div>
    );
}
