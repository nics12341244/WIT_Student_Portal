// Function to save data
function saveData() {
    // Get form elements
    let formElements = document.querySelectorAll("#personalDataForm input, #personalDataForm select");
    
    // Store data in local storage (or any other method)
    let formData = {};
    formElements.forEach(element => {
        formData[element.name] = element.value;
        element.disabled = true;  // Lock fields after saving
    });

    localStorage.setItem("personalData", JSON.stringify(formData));

    // Hide Save button, Show Edit button
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("editButton").style.display = "inline-block";
}

// Function to edit data
function editData() {
    let formElements = document.querySelectorAll("#personalDataForm input, #personalDataForm select");

    // Enable fields for editing
    formElements.forEach(element => {
        element.disabled = false;
    });

    // Show Save button again
    document.getElementById("saveButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "none";
}

// Function to load saved data (if exists)
function loadSavedData() {
    let savedData = localStorage.getItem("personalData");
    if (savedData) {
        let formData = JSON.parse(savedData);
        let formElements = document.querySelectorAll("#personalDataForm input, #personalDataForm select");

        formElements.forEach(element => {
            if (formData[element.name]) {
                element.value = formData[element.name];
                element.disabled = true;  // Initially disable fields
            }
        });

        // Show Edit button if data exists
        document.getElementById("saveButton").style.display = "none";
        document.getElementById("editButton").style.display = "inline-block";
    }
}

// Load saved data on page load
window.onload = loadSavedData;
