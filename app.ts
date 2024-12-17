const generateResume = () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const bio = (document.getElementById("bio") as HTMLTextAreaElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const fileInput = (document.getElementById("profile-pic") as HTMLInputElement);

  // Check if all fields are filled
  if (!name || !email || !phone || !bio || !education || !experience || !skills) {
    alert("Please fill in all the fields.");
    return;
  }

  const resumeContent: any = {
    name: name,
    email: email,
    phone: phone,
    bio: bio,
    education: education,
    experience: experience,
    skills: skills
  };

  let resumeHTML = `
    <div class="resume-content">
      <div class="header">
        <h1>${resumeContent.name}</h1>
        <p>Email: ${resumeContent.email}</p>
        <p>Phone: ${resumeContent.phone}</p>
      </div>
  `;

  if (resumeContent.bio) {
    resumeHTML += `
      <div class="bio">
        <h3>Biography</h3>
        <p>${resumeContent.bio}</p>
      </div>
    `;
  }

  if (resumeContent.education) {
    resumeHTML += `
      <div class="education">
        <h3>Education</h3>
        <p>${resumeContent.education}</p>
      </div>
    `;
  }

  if (resumeContent.experience) {
    resumeHTML += `
      <div class="experience">
        <h3>Work Experience</h3>
        <p>${resumeContent.experience}</p>
      </div>
    `;
  }

  if (resumeContent.skills) {
    resumeHTML += `
      <div class="skills">
        <h3>Skills</h3>
        <p>${resumeContent.skills}</p>
      </div>
    `;
  }

  resumeHTML += `</div>`;

  const resumeSection = document.querySelector(".resume-section") as HTMLElement;
  const formSection = document.querySelector(".form-section") as HTMLElement;

  // Display profile picture if available
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e: any) {
      const profileImage = `<img src="${e.target.result}" alt="Profile Picture">`;
      resumeHTML = resumeHTML.replace('<div class="header">', `<div class="header">${profileImage}`);
      resumeSection.innerHTML = resumeHTML;
      resumeSection.style.display = "block";  
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    resumeSection.innerHTML = resumeHTML;
    resumeSection.style.display = "block";  
  }

  if (formSection) {
    formSection.style.display = "none";  
  }
};

document.getElementById("generateBtn")!.addEventListener("click", generateResume);
