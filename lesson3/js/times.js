// Return current year in numeric form
const options = {year:'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options);

// Return the date and time on which the document was last modified
document.getElementById('lastupdated').textContent = document.lastModified;