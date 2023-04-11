function filterJobsByParameters() {
  const jobTitles = document.querySelectorAll('.job-card-list__title');

  jobTitles.forEach((jobTitle) => {
    const jobContainer = jobTitle.closest('.job-card-container');
    const jobDescription = jobContainer.querySelector(
      '.job-card-list__snippet-item'
    );

    if (!jobMatchesParameters(jobTitle, jobDescription)) {
      jobContainer.style.display = 'none';
    }
  });
}

function jobMatchesParameters(jobTitle, jobDescription) {
  const userPreferences =
    JSON.parse(localStorage.getItem('linkedinJobFilter')) || {};

  const titleMatch = userPreferences.title
    ? jobTitle.innerText.includes(userPreferences.title)
    : true;
  const descriptionMatch = userPreferences.keywords
    ? jobDescription.innerText.includes(userPreferences.keywords)
    : true;

  return titleMatch && descriptionMatch;
}

filterJobsByParameters();
