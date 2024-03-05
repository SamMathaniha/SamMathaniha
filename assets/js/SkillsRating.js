// Define the progress level for each skill (out of 100)
const skillProgress = {
    "HTML5 & CSS3": 95,
            "JavaScript": 75,
            "React": 75,
            "PHP & MySQL": 95,
            "C#": 80,
            "Java": 50,
            "Node.js": 80,
            "Express.js & MongoDB": 80,
            "Postman": 95,
            "Python": 65,
            "Adobe XD (Wirefram & Prototype)": 100, 
            "Selenium": 100
};

// Function to update the progress level for each skill
function updateSkillProgress() {
    const skills = document.querySelectorAll('.outer-meter');
    skills.forEach(skill => {
        const skillName = skill.previousElementSibling.textContent.trim();
        const progress = skillProgress[skillName];
        if (progress !== undefined) {
            skill.querySelector('.inner-meter').style.width = progress + '%';
        }
    });
}

// Call the function to update skill progress when the page loads
window.addEventListener('load', updateSkillProgress);
