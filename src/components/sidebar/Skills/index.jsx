import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import NewButton from "../NewButton";
import DeleteButton from "../DeleteButton";
import { CONSTANTS, createDefaultSkill } from "../../../utils/constants";

export default function Skills({ onDataChanged, data }) {
    const [skills, setSkills] = useState([createDefaultSkill()]);

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setSkills(data);
        }
    }, [data]);

    useEffect(() => {
        onDataChanged(skills);
    }, [skills]);

    const setSkill = (value, id) => {
        if (value.length === CONSTANTS.WORD_LIMIT_MEDIUM) return;
        value = value.trimStart();
        const skill = skills.find((s) => s.id === id);
        skill.value = value;
        setSkills([...skills]);
    };

    const removeSkill = (id) => {
        const filteredSkills = skills.filter((s) => s.id !== id);
        setSkills(filteredSkills);
    };

    const addSkill = () => {
        const newSkill = createDefaultSkill();
        setSkills([...skills, newSkill]);
    };

    return (
        <div className={styles.header}>
            <h1>
                <FontAwesomeIcon icon={faGears} /> Skills
            </h1>
            <div className={styles.inputsWrapper}>
                {/* {skills[0]} */}
                {skills.map(({ id, value }) => {
                    return (
                        <div key={id} className={styles.row}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Language or technology"
                                value={value}
                                onChange={(e) => setSkill(e.target.value, id)}
                            />
                            {skills.length > 1 && (
                                <DeleteButton
                                    id={id}
                                    onClick={removeSkill}
                                    size={"xl"}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <NewButton onClick={addSkill} />
        </div>
    );
}
