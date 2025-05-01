import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./Contacts.module.css";
import { CONSTANTS, createDefaultContacts } from "../../../utils/constants";

export default function Contacts({ onDataChanged, data }) {
    const [contacts, setContacts] = useState(createDefaultContacts());
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setContacts(data);
        }
    }, [data]);

    useEffect(() => {
        onDataChanged(contacts);
    }, [contacts]);

    const setAddress = (address) => {
        if (address.length >= CONSTANTS.WORD_LIMIT_BIG) return;
        setContacts({ ...contacts, address: address });
    };

    const setPhoneNumber = (phoneNumber) => {
        if (phoneNumber.length >= CONSTANTS.WORD_LIMIT_SMALL) return;
        setContacts({ ...contacts, phoneNumber: phoneNumber });
    };

    const setEmail = (email) => {
        if (email.length >= CONSTANTS.WORD_LIMIT_MEDIUM) return;
        setContacts({ ...contacts, email: email });
    };
    const setPortfolioLink = (portfolioLink) => {
        if (portfolioLink.length >= CONSTANTS.WORD_LIMIT_MEDIUM) return;
        setContacts({ ...contacts, portfolioLink: portfolioLink });
    };

    return (
        <div className={styles.header}>
            <h1>
                <FontAwesomeIcon icon={faContactBook} /> Contacts
            </h1>
            <div className={styles.inputsWrapper}>
                <input
                    className={styles.input}
                    style={{ gridColumn: "1 / span 2" }}
                    type="text"
                    placeholder="Address"
                    value={contacts.address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    className={styles.input}
                    style={{ gridColumn: "1 / span 1" }}
                    type="text"
                    placeholder="E-Mail"
                    value={contacts.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={styles.input}
                    style={{ gridColumn: "2 / span 1" }}
                    type="text"
                    placeholder="Phone number"
                    value={contacts.phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    className={styles.input}
                    style={{ gridColumn: "1 / span 2" }}
                    type="text"
                    placeholder="Link to portfolio"
                    value={contacts.portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                />
            </div>
        </div>
    );
}
