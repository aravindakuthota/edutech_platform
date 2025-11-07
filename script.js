
  const words = ["Dream Job","Internship",];
  const colors = ["#4caf50", "#9c27b0"]; 
  // 👆 Each word’s matching background color

  let index = 0;
  const changingText = document.getElementById("changing");

  setInterval(() => {
    // fade out first
    changingText.style.opacity = 0;

    setTimeout(() => {
      // change text and background after fade out
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
      changingText.style.backgroundColor = colors[index];

      // fade back in
      changingText.style.opacity = 1;
    }, 500);
  }, 3000); 



  if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }






    

// Sample job data
const jobs = [
  {
    company: "Infosys",
    role: "Java Fullstack Developer",
    eligibility: {
      degree: "B.Tech / M.Tech",
      branch: "CS / IT",
      graduation: "2023",
      gender: "Any"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Java",],
    linkedin: "https://www.linkedin.com/company/infosys",
    apply: "https://www.infosys.com/careers"
  },
  {
    company: "TCS",
    role: "Frontend Developer",
    eligibility: {
      degree: "B.Tech",
      branch: "CS / IT / ECE",
      graduation: "2024",
      gender: "Any"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Angular"],
    linkedin: "https://www.linkedin.com/company/tcs",
    apply: "https://www.tcs.com/careers"
  }
,
     {
    company: "Wipro",
    role: "Frontend Developer",
    eligibility: {
      degree: "B.Tech",
      branch: "CS / IT / ECE",
      graduation: "2024",
      gender: "Any"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Angular"],
    linkedin: "https://www.linkedin.com/company/tcs",
    apply: "https://www.tcs.com/careers"
  }
  ,

   {
    company: "accenture",
    role: "Frontend Developer",
    eligibility: {
      degree: "B.Tech",
      branch: "CS / IT / ECE",
      graduation: "2024",
      gender: "Any"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Angular"],
    linkedin: "https://www.linkedin.com/company/tcs",
    apply: "https://www.tcs.com/careers"
  }

,


   {
    company: "demo",
    role: "Frontend Developer",
    eligibility: {
      degree: "B.Tech",
      branch: "CS / IT / ECE",
      graduation: "2024",
      gender: "Any"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Angular"],
    linkedin: "https://www.linkedin.com/company/tcs",
    apply: "https://www.tcs.com/careers"
  }

,

   {
    company: "demo1",
    role: "Frontend Developer",
    eligibility: {
      degree: "B.Tech",
      branch: "CS / IT / ECE",
      graduation: "2024",
      gender: "Any"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Angular"],
    linkedin: "https://www.linkedin.com/company/tcs",
    apply: "https://www.tcs.com/careers"
  }


];

// Function to create job card
function createJobCard(job) {
  const container = document.createElement("section");
  container.classList.add("job_card");

  container.innerHTML = `
    <h2>${job.company}</h2>
    <h3>${job.role}</h3>
    
    <h4>Eligibility</h4>
    <ul>
      <li>Degree: ${job.eligibility.degree}</li>
      <li>Branch: ${job.eligibility.branch}</li>
      <li>Year Of Graduation: ${job.eligibility.graduation}</li>
      <li>Genders: ${job.eligibility.gender}</li>
    </ul>
    
    <h4>Skills</h4>
    <ul class="skills">
      ${job.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    
    <div class="buttons_job">
      <button class="linkedin_btn">LinkedIn</button>
      <button class="apply_btn">Apply Now</button>
      <button class="ats_btn">ATS Resume</button>
    </div>
  `;

  // Button actions
  container.querySelector(".linkedin_btn").onclick = () => window.open(job.linkedin, "_blank");
  container.querySelector(".apply_btn").onclick = () => window.open(job.apply, "_blank");

  return container;
}

// Add all jobs to container
const jobsContainer = document.getElementById("jobs_container");
jobs.forEach(job => {
  jobsContainer.appendChild(createJobCard(job));
});

