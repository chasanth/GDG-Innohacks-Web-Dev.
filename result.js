// Retrieve selected skills from localStorage
const selectedSkills = JSON.parse(localStorage.getItem("jobRoles")) || [];
const jobRolesContainer = document.getElementById("jobRolesContainer");

// Extended job role data with diverse required skills
const jobData = [
  { title: "Data Analyst", company: "AI Solutions", address: "Bengaluru, India", skills: ["Python", "SQL"] },
  { title: "Software Engineer", company: "InnovateTech", address: "Hyderabad, India", skills: ["DSA", "JavaScript"] },
  { title: "Machine Learning Specialist", company: "CodeMaster", address: "Chennai, India", skills: ["Python", "Django", "Machine Learning"] },
  { title: "Frontend Developer", company: "DevPro", address: "Mumbai, India", skills: ["React", "JavaScript", "CSS"] },
  { title: "Backend Developer", company: "TechSquad", address: "Delhi, India", skills: ["Python", "SQL", "Node.js"] },
  { title: "DevOps Engineer", company: "Cloudify", address: "Pune, India", skills: ["AWS", "Docker", "Kubernetes"] },
  { title: "Cybersecurity Specialist", company: "SecureSoft", address: "Noida, India", skills: ["Networking", "Ethical Hacking", "Python"] },
  { title: "Full Stack Developer", company: "CodeFusion", address: "Kolkata, India", skills: ["JavaScript", "React", "Node.js", "MongoDB"] }
];

// Function to check if a job matches at least one selected skill
function jobMatchesSkills(job, selectedSkills) {
  return selectedSkills.some((combination) =>
    combination.every((skill) => job.skills.includes(skill))
  );
}

// Function to create a job role element with an "Apply Now" button
function createJobRoleElement(job) {
  const jobRoleDiv = document.createElement("div");
  jobRoleDiv.classList.add("job-role");
  jobRoleDiv.innerHTML = `
    <h3>${job.title}</h3>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Address:</strong> ${job.address}</p>
    <button class="apply-btn" onclick="window.open('https://example.com/apply', '_blank')">Apply Now</button>
  `;
  return jobRoleDiv;
}

// Filter and display jobs that match the selected skills
if (selectedSkills.length > 0) {
  const matchingJobs = jobData.filter((job) => jobMatchesSkills(job, selectedSkills));
  
  if (matchingJobs.length > 0) {
    matchingJobs.forEach((job) => {
      const jobRoleElement = createJobRoleElement(job);
      jobRolesContainer.appendChild(jobRoleElement);
    });
  } else {
    const noJobsDiv = document.createElement("div");
    noJobsDiv.classList.add("job-role");
    noJobsDiv.textContent = "No job roles match your selected skills.";
    jobRolesContainer.appendChild(noJobsDiv);
  }
} else {
  const noSkillsDiv = document.createElement("div");
  noSkillsDiv.classList.add("notification");
  noSkillsDiv.textContent = "No skills selected. Please go back and select your skills to see matching job roles.";
  jobRolesContainer.appendChild(noSkillsDiv);
}

// Animate job roles as they come into view
const jobRoleElements = document.querySelectorAll(".job-role, .notification");

function animateOnScroll() {
  jobRoleElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("show");
    }
  });
}

// Attach scroll event listener
window.addEventListener("scroll", animateOnScroll);
animateOnScroll();


