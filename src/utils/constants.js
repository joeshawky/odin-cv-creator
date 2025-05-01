
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
  CONTACTS_LABEL: 'contacts',
  ALL_DATA: 'allData'
}

export const DEFAULT_PERSONAL_DATA = {
  'firstName': '',
  'lastName': '',
  'niche': '',
  'description': ''
}

export const createDefaultWorkExperience = (position = '',
  company = '',
  startDate = '',
  endDate = '',
  details = '') => ({
    id: crypto.randomUUID(),
    position: position,
    company: company,
    startDate: startDate,
    endDate: endDate,
    details: details
  });

export const createDefaultSkill = (value = '') => ({
  id: crypto.randomUUID(),
  value: value
});

export const createDefaultPersonalData = (firstName = '',
  lastName = '',
  niche = '',
  description = '') => ({
    firstName: firstName,
    lastName: lastName,
    niche: niche,
    description: description
  });

export const createDefaultEducation = (school = '', degree = '') => ({
  school: school,
  degree: degree,
});

export const createDefaultContacts = (address = '', email = '', phoneNumber = '', portfolioLink = '') => ({
  address: address,
  email: email,
  phoneNumber: phoneNumber,
  portfolioLink: portfolioLink
});

export const createDefaultData = () => {
  const personalData = createDefaultPersonalData('Joe', 'Shawky', 'Software Developer', 'I enjoy coding!');
  const workExperienceData = [createDefaultWorkExperience('Software Developer', 'Letna Marine', '05/02/2023', 'ongoing', 'Developed control programs for underwater ROVs')]
  const skills = [createDefaultSkill('Programming'), createDefaultSkill('React'), createDefaultSkill('Qt Framework')]
  const education = createDefaultEducation('Yildiz Technical University', 'Mechatronics Engineering')
  const contacts = createDefaultContacts('Istanbul, Turkey', 'Youssefmetawe0@gmail.com', '0 555 555 55 55')

  return {
    [CONSTANTS.PERSONAL_DATA_LABEL]: personalData,
    [CONSTANTS.WORK_EXPERIENCE_LABEL]: workExperienceData,
    [CONSTANTS.SKILLS_LABEL]: skills,
    [CONSTANTS.EDUCATION_LABEL]: education,
    [CONSTANTS.CONTACTS_LABEL]: contacts,
  }
}
  