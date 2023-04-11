document.getElementById('filterForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const keywords = document.getElementById('keywords').value;

  const userPreferences = {
    title: title,
    keywords: keywords,
  };

  localStorage.setItem('linkedinJobFilter', JSON.stringify(userPreferences));

  window.close();
});
