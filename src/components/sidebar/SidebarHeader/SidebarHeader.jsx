import React from "react";
import "./SidebarHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPencil } from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { createDefaultData } from "../../../utils/constants";


export default function SidebarHeader({onDataChanged}) {
    const autofill = () => {
        const defaultValues = createDefaultData();
        onDataChanged(defaultValues)
    }

    const saveCV = () => {
        window.print()
    }

    return (
        <div className="header">
            <div className="row">
                <h1>CV Maker</h1>
                <div className="btns">
                    <button className="saveBtn" onClick={saveCV}>
                        <FontAwesomeIcon icon={faDownload} />
                        <p>Save</p>
                    </button>
                    <button className="autofillBtn" onClick={autofill}>
                        <FontAwesomeIcon icon={faPencil} />
                        <p>Autofill</p>
                    </button>
                </div>
            </div>
            <div className="githubCredit">
                <p>Created by</p>
                <a className="githubBtn" href="https://github.com/joeshawky" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
                    <p>JoeShawky</p>
                </a>
            </div>
        </div>
    );
}
