import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CvDisplay.module.css";
import {
    faEnvelope,
    faGlobe,
    faLocationDot,
    faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { CONSTANTS } from "../../utils/constants";

function PersonalData({ firstName, lastName, niche, description }) {
    return (
        <div className={styles.head}>
            <div className={styles.namePosition}>
                <h1>
                    {firstName} {lastName}
                </h1>
                <p>{niche}</p>
            </div>
            <p>{description}</p>
        </div>
    );
}

function WorkExperience({ position, company, startDate, endDate, details }) {
    return (
        <div className={styles.experience}>
            <p className={styles.title}>{position}</p>
            <p className={styles.experiencSection}>
                {company}
                {company && (startDate || endDate) ? <span> | </span> : ""}
                <span className={styles.startDate}>{startDate}</span>{" "}
                {startDate && endDate ? <span> - </span> : ""}
                <span className={styles.startDate}>{endDate}</span>
            </p>
            <p className={styles.details}>{details}</p>
        </div>
    );
}

function WorkExperiences({ workExperiences }) {
    return (
        <div className={styles.experienceSection}>
            {workExperiences.some(
                (exp) =>
                    exp.position ||
                    exp.company ||
                    exp.startDate ||
                    exp.endDate ||
                    exp.details
            ) && <h1>EXPERIENCE</h1>}
            <div className={styles.experienceSection}>
                <div className={styles.experiences}>
                    {workExperiences.map((work) => (
                        <WorkExperience {...work} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Skills({ skills }) {
    return (
        <div className={styles.skillsSection}>
            {skills.some(skill => 
                skill.value
            ) && <h1>SKILLS</h1>}

            <ul className={styles.skills}>
                {skills.map(({ id, value }) => {
                    return value.length > 0 && <li key={id}>{value}</li>;
                })}
            </ul>
        </div>
    );
}

function Education({ school, degree }) {
    return <div className={styles.educationSection}>
        {(school || degree) && <h1>EDUCATION</h1>}
        <p className={styles.universityName}>{school}</p>
        <p>{degree}</p>
    </div>;
}


function Contacts({ address, email, phoneNumber, portfolioLink }) {
    return (
        <div className={styles.contacts}>
            <div className={styles.location}>
                {address && <FontAwesomeIcon icon={faLocationDot} size="xl" />}
                <p>{address}</p>
            </div>
            <div className={styles.email}>
                {email && <FontAwesomeIcon icon={faEnvelope} size="xl" />}
                <p>{email}</p>
            </div>
            <div className={styles.phone}>
                {phoneNumber && (
                    <FontAwesomeIcon icon={faMobileScreen} size="xl" />
                )}
                <p>{phoneNumber}</p>
            </div>
            <div className={styles.portfolio}>
                {portfolioLink && <FontAwesomeIcon icon={faGlobe} size="xl" />}
                <p>{portfolioLink}</p>
            </div>
        </div>
    );
}

export default function CvDisplay({ cvData }) {
    const personalData = cvData[CONSTANTS.PERSONAL_DATA_LABEL];
    const workExperienceData = cvData[CONSTANTS.WORK_EXPERIENCE_LABEL];
    const skillsData = cvData[CONSTANTS.SKILLS_LABEL];
    const educationData = cvData[CONSTANTS.EDUCATION_LABEL];
    const contactsData = cvData[CONSTANTS.CONTACTS_LABEL];
    return (
        <>
            <div className={styles.display}>
                <PersonalData {...personalData} />
                {(personalData.firstName ||
                    personalData.lastName ||
                    personalData.niche ||
                    personalData.description) && <div className={styles.line}></div>}


                <WorkExperiences workExperiences={workExperienceData} />
                <div className={styles.educationAndSkillsSection}>
                    <Education {...educationData}/>
                    <Skills skills={skillsData} />
                </div>
                <Contacts {...contactsData}/>
            </div>
        </>
    );
}
