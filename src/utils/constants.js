
export const CONSTANTS = {
    WORD_LIMIT_DATE: 11,
    WORD_LIMIT_SMALL: 15,
    WORD_LIMIT_MEDIUM: 32,
    WORD_LIMIT_MEDIUM_LARGE: 64,
    WORD_LIMIT_BIG: 255,
    PERSONAL_DATA_LABEL: 'personalData',
    WORK_EXPERIENCE_LABEL: 'workExperience',
    SKILLS_LABEL: 'skills',
    EDUCATION_LABEL: 'education',
    CONTACTS_LABEL: 'contacts'
}

export const DEFAULT_PERSONAL_DATA = {
    'firstName': '',
    'lastName': '',
    'niche': '',
    'description': ''
}

export const createDefaultWorkExperience = () => ({
    id: crypto.randomUUID(),
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    details: '',
  });

  export const createDefaultSkill = () => ({
    id: crypto.randomUUID(),
    value: ''
  });

  export const createDefaultPersonalData = () => ({
    firstName: '',
    lastName: '',
    niche: '',
    description: ''
  });

  export const createDefaultEducation = () => ({
    school: '',
    degree: '',
  });

  export const createDefaultContacts = () => ({
    address: '',
    email: '',
    phoneNumber: '',
    portfolioLink: ''
  });