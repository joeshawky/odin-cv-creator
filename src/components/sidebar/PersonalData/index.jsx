import styles from "./PersonalData.module.css";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CONSTANTS, createDefaultPersonalData } from "../../../utils/constants";




export default function PersonalData({ onDataChanged }) {
    const [personalData, setPersonalData] = useState(createDefaultPersonalData());
    
    
      useEffect(() => {
        onDataChanged(personalData)
      }, [personalData])

    const setFirstName = (name) => {
        if (name.length === CONSTANTS.WORD_LIMIT_SMALL) return;
        setPersonalData({...personalData, firstName: name})
    }

    const setLastName = (name) => {
        if (name.length === CONSTANTS.WORD_LIMIT_SMALL) return;
        setPersonalData({...personalData, lastName: name})
    }

    const setNiche = (niche) => {
        if (niche.length === CONSTANTS.WORD_LIMIT_SMALL) return;
        setPersonalData({...personalData, niche: niche})
    }

    const setDescription = (description) => {
        if (description.length === CONSTANTS.WORD_LIMIT_BIG) return;
        setPersonalData({...personalData, description: description})
    }


    
    return (
        <div className={styles.header}>
            <h1>
                <FontAwesomeIcon icon={faIdCard} /> Personal Data
            </h1>
            <div className={styles.inputsWrapper}>
                <input
                    className={styles.input}
                    style={{ gridColumn: "1 / span 1" }}
                    type="text"
                    placeholder="First Name"
                    value={personalData.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Last Name"
                    value={personalData.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    className={styles.input}
                    style={{ gridColumn: "1 / span 2" }}
                    type="text"
                    placeholder="Niche: Front-End Developer"
                    value={personalData.niche}
                    onChange={(e) => setNiche(e.target.value)}
                />
                <textarea
                    className={styles.input}
                    style={{ gridRow: "3 / span 3", gridColumn: "1 / span 2" }}
                    type="text"
                    placeholder="Tell something about yourself to stand out from other candidates"
                    value={personalData.description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
        </div>
    );
}
