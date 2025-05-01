import React from "react";
import "./SidebarHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPencil } from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SidebarHeader() {
    return (
        <div className="header">
            <div className="row">
                <h1>CV Maker</h1>
                <div className="btns">
                    <button className="saveBtn">
                        <FontAwesomeIcon icon={faDownload} />
                        <p>Save</p>
                    </button>
                    <button className="autofillBtn">
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
