const skillCheckboxes = document.querySelectorAll(".skill-checkbox");
const submitButton = document.getElementById("submitButton");

// Update labels based on selection
skillCheckboxes.forEach((checkbox) => {
  const label = checkbox.parentElement;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      label.classList.add("selected"); // Highlight selected skills
    } else {
      label.classList.remove("selected"); // Remove highlight
    }
  });
});

// Submit button event
submitButton.addEventListener("click", () => {
  // Collect selected skills
  const selectedSkills = Array.from(skillCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedSkills.length === 0) {
    alert("Please select at least one skill before submitting!");
    return;
  }

  // Store selected skills as combinations in localStorage
  const skillCombinations = generateSkillCombinations(selectedSkills);
  localStorage.setItem("jobRoles", JSON.stringify(skillCombinations));

  // Redirect to the results page
  window.location.href = "result.html";
});

// Generate combinations of selected skills
function generateSkillCombinations(arr) {
  const combinations = [];

  const createCombination = (prefix, remaining) => {
    for (let i = 0; i < remaining.length; i++) {
      const newPrefix = [...prefix, remaining[i]];
      combinations.push(newPrefix);
      createCombination(newPrefix, remaining.slice(i + 1));
    }
  };

  createCombination([], arr);
  return combinations;
}

// Smooth scroll to footer when "Contact" is clicked
document.querySelector("a[href='#contact']").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  document.getElementById("footer").scrollIntoView({
    behavior: "smooth", // Smooth scrolling
    block: "start" // Align to the top of the footer
  });
});
