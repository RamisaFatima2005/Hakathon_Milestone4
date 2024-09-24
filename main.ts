const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('resume') as HTMLElement;
const nameDisplay = document.getElementById('name-display') as HTMLElement;
const emailDisplay = document.getElementById('email-display') as HTMLElement;
const educationDisplay = document.getElementById('education-display') as HTMLElement;
const educationContent = document.getElementById('education-content') as HTMLElement;
const workExperienceDisplay = document.getElementById('work-experience-display') as HTMLElement;
const workExperienceContent = document.getElementById('work-experience-content') as HTMLElement;
const skillsDisplay = document.getElementById('skills-display') as HTMLElement;
const skillsContent = document.getElementById('skills-content') as HTMLElement;
const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
const editFields = document.getElementById('edit-fields') as HTMLElement;
const saveEditsButton = document.getElementById('save-edits') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  
  nameDisplay.textContent = name;
  emailDisplay.textContent = email;
  educationContent.textContent = education;
  workExperienceContent.textContent = workExperience;
  skillsContent.textContent = skills;
  
  editButton.style.display = 'block';
});

editButton.addEventListener('click', () => {
  editFields.style.display = 'block';
  editButton.style.display = 'none';
  
  const editName = document.getElementById('edit-name') as HTMLInputElement;
  const editEmail = document.getElementById('edit-email') as HTMLInputElement;
  const editEducation = document.getElementById('edit-education') as HTMLInputElement;
  const editWorkExperience = document.getElementById('edit-work-experience') as HTMLInputElement;
  const editSkills = document.getElementById('edit-skills') as HTMLInputElement;
  
  editName.value = nameDisplay.textContent || '';
  editEmail.value = emailDisplay.textContent || '';
  editEducation.value = educationContent.textContent || '';
  editWorkExperience.value = workExperienceContent.textContent || '';
  editSkills.value = skillsContent.textContent || '';
});

saveEditsButton.addEventListener('click', () => {
  const editName = (document.getElementById('edit-name') as HTMLInputElement).value;
  const editEmail = (document.getElementById('edit-email') as HTMLInputElement).value;
  const editEducation = (document.getElementById('edit-education') as HTMLInputElement).value;
  const editWorkExperience = (document.getElementById('edit-work-experience') as HTMLInputElement).value;
  const editSkills = (document.getElementById('edit-skills') as HTMLInputElement).value;
  
  nameDisplay.textContent = editName;
  emailDisplay.textContent = editEmail;
  educationContent.textContent = editEducation;
  workExperienceContent.textContent = editWorkExperience;
  skillsContent.textContent = editSkills;
  
  editFields.style.display = 'none';
  editButton.style.display = 'block';
});
