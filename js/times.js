// Current year Function
const options = {year:'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options);

//Date and time on which the document was last modified
document.getElementById('lastupdated').textContent = document.lastModified;