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
    [CONSTANTS.PERSONAL_DATA_LABEL]: {},
    [CONSTANTS.WORK_EXPERIENCE_LABEL]: [],
    [CONSTANTS.SKILLS_LABEL]: [],
    [CONSTANTS.EDUCATION_LABEL]: {},
    [CONSTANTS.CONTACTS_LABEL]: {},
  });


  const handleCvDataChanged = (data, dataType) => {
    if (dataType === CONSTANTS.ALL_DATA) 
      setCvData(data)
    else {
      const updatedCvData = {...cvData, [dataType]: data};
      setCvData(updatedCvData)
    }
  }

  return (
    <div className='content'>
      <Sidebar>
        <SidebarHeader onDataChanged={(allData) => handleCvDataChanged(allData, CONSTANTS.ALL_DATA)}/>
        <PersonalData data={cvData[CONSTANTS.PERSONAL_DATA_LABEL]} onDataChanged={(personalData) => handleCvDataChanged(personalData, CONSTANTS.PERSONAL_DATA_LABEL)}/>
        <WorkExperience data={cvData[CONSTANTS.WORK_EXPERIENCE_LABEL]} onDataChanged={(workExperiences) => handleCvDataChanged(workExperiences, CONSTANTS.WORK_EXPERIENCE_LABEL)}/>
        <Skills data={cvData[CONSTANTS.SKILLS_LABEL]} onDataChanged={(skills) => handleCvDataChanged(skills, CONSTANTS.SKILLS_LABEL)}/>
        <Education data={cvData[CONSTANTS.EDUCATION_LABEL]} onDataChanged={(education) => handleCvDataChanged(education, CONSTANTS.EDUCATION_LABEL)}/>
        <Contacts data={cvData[CONSTANTS.CONTACTS_LABEL]} onDataChanged={(contacts) => handleCvDataChanged(contacts, CONSTANTS.CONTACTS_LABEL)}/>
      </Sidebar>
      
      <CvDisplay cvData={cvData}/>
    </div>
  )
}

export default App
