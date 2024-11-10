"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import jsPDF from the installed package (if using npm)
var jsPDF_1 = require("jspdf");
// Function to generate the PDF
function generatePDF() {
    // Create a new jsPDF instance
    var doc = new jsPDF_1.jsPDF();
    // Get form data
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fatherName").value;
    var cnic = document.getElementById("cnic").value;
    var dob = document.getElementById("dob").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var skills = document.getElementById("skills").value;
    // Set PDF title
    doc.setFontSize(18);
    doc.text("Resume", 10, 10);
    // Add Personal Information
    doc.setFontSize(12);
    doc.text("Name: ".concat(name), 10, 20);
    doc.text("Father's Name: ".concat(fatherName), 10, 30);
    doc.text("CNIC: ".concat(cnic), 10, 40);
    doc.text("Date of Birth: ".concat(dob), 10, 50);
    doc.text("Contact Number: ".concat(contact), 10, 60);
    doc.text("Email Id: ".concat(email), 10, 70);
    doc.text("Residential Address: ".concat(address), 10, 80);
    // Add Skills Section
    doc.text("Skills:", 10, 90);
    doc.text(skills, 10, 100);
    // Save the PDF
    doc.save("resume.pdf");
}
// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    var pdfButton = document.querySelector(".pdf_button");
    pdfButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission
        generatePDF();
    });
    // Retrieve the necessary elements
var usernameInput = document.getElementById("username");
var saveButton = document.getElementById("saveButton");

// Add event listener to the button
saveButton.addEventListener("click", function() {
  // Retrieve the value from the text field
  var username = usernameInput.value;

  // Display the username under the profile picture
  var usernameDisplay = document.createElement("div");
  usernameDisplay.innerHTML = username;
  usernameDisplay.classList.add("username");
  document.querySelector(".profile").appendChild(usernameDisplay);
});
});
