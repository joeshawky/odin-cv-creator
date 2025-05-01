import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./DeleteButton.module.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton({ size, onClick, id }) {
    return (
        <FontAwesomeIcon
            icon={faTrashCan}
            size={size}
            className={styles.icon}
            onClick={() => onClick(id)}
        />
    );
}
