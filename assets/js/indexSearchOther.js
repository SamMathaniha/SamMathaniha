
// Data for search suggestions
const suggestions = {
	"Homepage": "../index.html",
	"My Education": "../Pages/MyEducation.html",
	"My Skills": "../Pages/MySkills.html",
	"My Work Experience": "../Pages/MyWorkExperience.html",
	"All Projects": "../Pages/AllProject.html",
	"Web Development": "../MyEachProjects/WebDevelopment.html",
	"Designing": "../MyEachProjects/Designing.html",
	"Testing": "../MyEachProjects/Testing.html",
	"Java": "../MyEachProjects/Java.html",
	"C# Windows Form": "../MyEachProjects/WindowsForm.html",
	"ASP.NET": "../MyEachProjects/ASP.html",
	"Python": "../MyEachProjects/Python.html",
	"Research Projects": "../MyEachProjects/ResearchProjects.html",
	"My Details": "../Pages/MyContact.html",
	"Main certificate": "../MyEachProjects/MainCertificates.html",
	"E-certificate": "../MyEachProjects/E_Certificates.html",
	"School certificates": "../MyEachProjects/SchoolCertificates.html",
	"My Galary": "../Pages/MyGalary.html"
};

const searchInput = document.getElementById("query");
const searchSuggestions = document.getElementById("searchSuggestions");

// Function to handle search input
searchInput.addEventListener("input", function(event) {
	const query = event.target.value.toLowerCase();
	searchSuggestions.innerHTML = ""; // Clear previous suggestions

	let foundSuggestions = false;

	// Display suggestions matching the input
	Object.keys(suggestions).forEach(suggestion => {
		if (suggestion.toLowerCase().includes(query)) {
			const suggestionElement = document.createElement("div");
			suggestionElement.textContent = suggestion;
			suggestionElement.classList.add("searchSuggestion");

			// Handle suggestion click
			suggestionElement.addEventListener("click", function() {
				searchInput.value = suggestion; // Fill input with suggestion
				window.location.href = suggestions[suggestion]; // Navigate to the corresponding page
			});

			searchSuggestions.appendChild(suggestionElement);
			foundSuggestions = true;
		}
	});

	// Show/hide suggestions dropdown and "not found" message
	if (foundSuggestions || query.length === 0) {
		searchSuggestions.style.display = "block";
	} else {
		searchSuggestions.style.display = "none";

		// Display "Not Found" message
		const notFoundElement = document.createElement("div");
		notFoundElement.textContent = "Not Found";
		notFoundElement.classList.add("searchSuggestion");
		searchSuggestions.appendChild(notFoundElement);
	}
});
