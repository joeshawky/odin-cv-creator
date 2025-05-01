import './App.css'
import Sidebar from './components/sidebar/'
import CvDisplay from './components/cv-display/'

import SidebarHeader from './components/sidebar/SidebarHeader/SidebarHeader'
import PersonalData from './components/sidebar/PersonalData'
import WorkExperience from './components/sidebar/WorkExperience'
import Skills from './components/sidebar/Skills'
import Education from './components/sidebar/Education/'
import Contacts from './components/sidebar/Contacts/'
import { useState } from 'react'
import { CONSTANTS, createDefaultWorkExperience, DEFAULT_PERSONAL_DATA } from './utils/constants'


function App() {
  const [cvData, setCvData] = useState({
    [CONSTANTS.PERSONAL_DATA_LABEL]: DEFAULT_PERSONAL_DATA,
    [CONSTANTS.WORK_EXPERIENCE_LABEL]: [],
    [CONSTANTS.SKILLS_LABEL]: [],
    [CONSTANTS.EDUCATION_LABEL]: {},
    [CONSTANTS.CONTACTS_LABEL]: {},
  });
  
  console.log(`cvData:`);
  console.log(cvData);


  const handleCvDataChanged = (data, dataType) => {
    const updatedCvData = {...cvData, [dataType]: data};
    setCvData(updatedCvData)
  }

  return (
    <div className='content'>
      <Sidebar>
        <SidebarHeader/>
        <PersonalData onDataChanged={(personalData) => handleCvDataChanged(personalData, CONSTANTS.PERSONAL_DATA_LABEL)}/>
        <WorkExperience onDataChanged={(workExperiences) => handleCvDataChanged(workExperiences, CONSTANTS.WORK_EXPERIENCE_LABEL)}/>
        <Skills onDataChanged={(skills) => handleCvDataChanged(skills, CONSTANTS.SKILLS_LABEL)}/>
        <Education onDataChanged={(education) => handleCvDataChanged(education, CONSTANTS.EDUCATION_LABEL)}/>
        <Contacts onDataChanged={(contacts) => handleCvDataChanged(contacts, CONSTANTS.CONTACTS_LABEL)}/>
      </Sidebar>
      
      <CvDisplay cvData={cvData}/>
    </div>
  )
}

export default App
