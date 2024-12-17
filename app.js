var generateResume = function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var bio = document.getElementById("bio").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var fileInput = document.getElementById("profile-pic");
    // Check if all fields are filled
    if (!name || !email || !phone || !bio || !education || !experience || !skills) {
        alert("Please fill in all the fields.");
        return;
    }
    var resumeContent = {
        name: name,
        email: email,
        phone: phone,
        bio: bio,
        education: education,
        experience: experience,
        skills: skills
    };
    var resumeHTML = "\n    <div class=\"resume-content\">\n      <div class=\"header\">\n        <h1>".concat(resumeContent.name, "</h1>\n        <p>Email: ").concat(resumeContent.email, "</p>\n        <p>Phone: ").concat(resumeContent.phone, "</p>\n      </div>\n  ");
    if (resumeContent.bio) {
        resumeHTML += "\n      <div class=\"bio\">\n        <h3>Biography</h3>\n        <p>".concat(resumeContent.bio, "</p>\n      </div>\n    ");
    }
    if (resumeContent.education) {
        resumeHTML += "\n      <div class=\"education\">\n        <h3>Education</h3>\n        <p>".concat(resumeContent.education, "</p>\n      </div>\n    ");
    }
    if (resumeContent.experience) {
        resumeHTML += "\n      <div class=\"experience\">\n        <h3>Work Experience</h3>\n        <p>".concat(resumeContent.experience, "</p>\n      </div>\n    ");
    }
    if (resumeContent.skills) {
        resumeHTML += "\n      <div class=\"skills\">\n        <h3>Skills</h3>\n        <p>".concat(resumeContent.skills, "</p>\n      </div>\n    ");
    }
    resumeHTML += "</div>";
    var resumeSection = document.querySelector(".resume-section");
    var formSection = document.querySelector(".form-section");
    // Display profile picture if available
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var profileImage = "<img src=\"".concat(e.target.result, "\" alt=\"Profile Picture\">");
            resumeHTML = resumeHTML.replace('<div class="header">', "<div class=\"header\">".concat(profileImage));
            resumeSection.innerHTML = resumeHTML;
            resumeSection.style.display = "block";
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    else {
        resumeSection.innerHTML = resumeHTML;
        resumeSection.style.display = "block";
    }
    if (formSection) {
        formSection.style.display = "none";
    }
};
document.getElementById("generateBtn").addEventListener("click", generateResume);
