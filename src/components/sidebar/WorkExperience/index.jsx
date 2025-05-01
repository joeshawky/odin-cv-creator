import React, { useEffect, useState } from "react";
import styles from "./WorkExperience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import NewButton from "../NewButton";
import DeleteButton from "../DeleteButton";
import { CONSTANTS, createDefaultWorkExperience } from "../../../utils/constants";

function workExperience({
    id,
    position,
    company,
    startDate,
    endDate,
    details,
}) {
    return (
        <>
            <div className={styles.workTitle}>
                <h3>Experience #{id}</h3>
                {id > 1 && <DeleteButton size={"lg"} />}
            </div>
            <div className={styles.inputsWrapper}>
                <input
                    className={styles.input}
                    style={{ gridRow: "1 / span 1", gridColumn: "1 / span 1" }}
                    type="text"
                    placeholder="Position"
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Company"
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Start date of employment"
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="End date of employment"
                />
                <textarea
                    className={styles.input}
                    style={{ gridRow: `5 / span 3` }}
                    type="text"
                    placeholder="Your main occupation, daily tasks and work field"
                />
            </div>
        </>
    );
}

function Form({ onDataChanged }) {
    const [workExperiences, setWorkExperiences] = useState([
        createDefaultWorkExperience(),
    ]);

    {
        workExperiences.map((work) => {
            return (
                <>
                    <div className={styles.workTitle}>
                        <h3>Experience #{workExperiences.length + 1}</h3>
                        {workExperiences.length > 1 && (
                            <DeleteButton size={"lg"} />
                        )}
                    </div>
                    <div className={styles.inputsWrapper}>
                        <input
                            className={styles.input}
                            style={{
                                gridRow: "1 / span 1",
                                gridColumn: "1 / span 1",
                            }}
                            type="text"
                            placeholder="Position"
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Company"
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Start date of employment"
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="End date of employment"
                        />
                        <textarea
                            className={styles.input}
                            style={{ gridRow: `5 / span 3` }}
                            type="text"
                            placeholder="Your main occupation, daily tasks and work field"
                        />
                    </div>
                </>
            );
        });
    }
}

export default function WorkExperience({ onDataChanged, data }) {
    const [workExperiences, setWorkExperiences] = useState([
        createDefaultWorkExperience(),
    ]);

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setWorkExperiences(data);
        }
      }, [data]);


    useEffect(() => {
        onDataChanged(workExperiences)
    }, [workExperiences])

    const addWorkExperience = () => {
        if (workExperiences === 2) return;

        setWorkExperiences([...workExperiences, createDefaultWorkExperience()])
    };

    const removeWorkExperience = (key) => {
        const filteredWorkExperiences = workExperiences.filter(
            (work) => work.id !== key
        );

        setWorkExperiences(filteredWorkExperiences);
    };

    const setPosition = (value, key) => {
        if (value.length === CONSTANTS.WORD_LIMIT_SMALL) return;
        const work = workExperiences.find((w) => w.id === key);
        work.position = value;
        setWorkExperiences([...workExperiences]);
    };
    
    const setCompany = (value, key) => {
        if (value.length === CONSTANTS.WORD_LIMIT_SMALL) return;
        const work = workExperiences.find((w) => w.id === key);
        work.company = value;
        setWorkExperiences([...workExperiences]);
    };

    const formatDate = (date) => {
        date = date.trim();
        return date;
        // Validate the date format!
        // for(let i = 0; i < date.length; i++) {
        //     let char = date[i]
        // }
    }   

    const setStartDate = (value, key) => {
        value = formatDate(value)
        if (value.length >= CONSTANTS.WORD_LIMIT_DATE) return;

        const work = workExperiences.find((w) => w.id === key);
        work.startDate = value;
        
        setWorkExperiences([...workExperiences]);
    };

    const setEndDate = (value, key) => {
        value = formatDate(value)
        if (value.length >= CONSTANTS.WORD_LIMIT_DATE) return;

        const work = workExperiences.find((w) => w.id === key);
        work.endDate = value;
        setWorkExperiences([...workExperiences]);
    };

    const setDetails = (value, key) => {
        if (value.length >= CONSTANTS.WORD_LIMIT_BIG) return;

        const work = workExperiences.find((w) => w.id === key);
        work.details = value;
        setWorkExperiences([...workExperiences]);
    };

    return (
        <div className={styles.header}>
            <h1>
                <FontAwesomeIcon icon={faScrewdriverWrench} /> Work Experience
            </h1>
            {workExperiences.map(
                ({ id, position, company, startDate, endDate, details }, idx) => {
                    return (
                        <div key={id} className={styles.wrapper}>
                            <div className={styles.workTitle}>
                                <h3>Experience #{idx + 1}</h3>
                                {workExperiences.length > 1 && (
                                    <DeleteButton
                                        size={"lg"}
                                        id={id}
                                        onClick={removeWorkExperience}
                                    />
                                )}
                            </div>
                            <div className={styles.inputsWrapper}>
                                <input
                                    className={styles.input}
                                    style={{
                                        gridRow: "1 / span 1",
                                        gridColumn: "1 / span 1",
                                    }}
                                    type="text"
                                    placeholder="Position"
                                    value={position}
                                    onChange={(e) =>
                                        setPosition(e.target.value, id)
                                    }
                                />
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Company"
                                    value={company}
                                    onChange={(e) =>
                                        setCompany(e.target.value, id)
                                    }
                                    
                                />
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Start date of employment"
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value, id)
                                    }
                                    
                                />
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="End date of employment"
                                    value={endDate}
                                    onChange={(e) =>
                                        setEndDate(e.target.value, id)
                                    }
                                    
                                />
                                <textarea
                                    className={styles.input}
                                    style={{ gridRow: `5 / span 3` }}
                                    type="text"
                                    placeholder="Your main occupation, daily tasks and work field"
                                    value={details}
                                    onChange={(e) =>
                                        setDetails(e.target.value, id)
                                    }
                                    
                                />
                            </div>
                        </div>
                    );
                }
            )}
            {workExperiences.length < 2 && (
                <NewButton
                    onClick={addWorkExperience}
                    disabled={workExperiences.length <= 2}
                />
            )}
        </div>
    );
}
