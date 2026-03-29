//your JS code here. If required.
const jobs = [
    {
        title: "Frontend Developer",
        company: "XYZ Pvt Ltd",
        location: "Remote"
    },
    {
        title: "Backend Developer",
        company: "ABC Tech",
        location: "Bangalore"
    },
    {
        title: "Data Analyst",
        company: "DataCorp",
        location: "Hyderabad"
    }
];

const jobContainer = document.getElementById("jobContainer");

jobs.forEach(job => {
    const jobCard = document.createElement("article");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
        <h2>${job.title}</h2>
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
        <a href="#" class="apply-btn">Apply Now</a>
    `;

    jobContainer.appendChild(jobCard);
});