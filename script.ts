import jsPDF from "jspdf"; // Ensure jsPDF is imported at the top of the file

// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", () => {
  const pdfButton = document.querySelector(".pdf_button") as HTMLButtonElement;

  if (pdfButton) {
    // Add click event listener to generate PDF
    pdfButton.addEventListener("click", function (event: Event) {
      event.preventDefault(); // Prevents form submission reload
      generatePDF(); // Call the generatePDF function
    });
  } else {
    console.error("PDF button not found!");
  }
});

// Function to gather form data and download as a PDF
function generatePDF() {
  const doc = new jsPDF();

  // Retrieve values from form inputs with type casting
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const fatherName = (document.getElementById("fatherName") as HTMLInputElement).value;
  const cnic = (document.getElementById("cnic") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const contact = (document.getElementById("contact") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const education1 = (document.getElementById("education1") as HTMLInputElement).value;
  const education2 = (document.getElementById("education2") as HTMLInputElement).value;
  const education3 = (document.getElementById("education3") as HTMLInputElement).value;
  const education4 = (document.getElementById("education4") as HTMLInputElement).value;
  const education5 = (document.getElementById("education5") as HTMLInputElement).value;
  const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
  const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
  const skill3 = (document.getElementById("skill3") as HTMLInputElement).value;
  const skill4 = (document.getElementById("skill4") as HTMLInputElement).value;
  const skill5 = (document.getElementById("skill5") as HTMLInputElement).value;
  const experience1 = (document.getElementById("experience1") as HTMLInputElement).value;
  const experience2 = (document.getElementById("experience2") as HTMLInputElement).value;
  const experience3 = (document.getElementById("experience3") as HTMLInputElement).value;
  const experience4 = (document.getElementById("experience4") as HTMLInputElement).value;
  const experience5 = (document.getElementById("experience5") as HTMLInputElement).value;
  const experience6 = (document.getElementById("experience6") as HTMLInputElement).value;

  // Generate the resume content
  const resumeContent = `
  <h2>Personal Information</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Father Name:</strong> ${fatherName}</p>
  <p><strong>CNIC:</strong> ${cnic}</p>
  <p><strong>Date of Birth:</strong> ${dob}</p>
  <p><strong>Contact:</strong> ${contact}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Address:</strong> ${address}</p>
  <h2>Education</h2>
  <p><strong>Education:</strong> ${education1}</p>
  <p><strong>Education:</strong> ${education2}</p>
  <p><strong>Education:</strong> ${education3}</p>
  <p><strong>Education:</strong> ${education4}</p>
  <p><strong>Education:</strong> ${education5}</p>
  <h2>Skills</h2>
  <p><strong>Skill1:</strong> ${skill1}</p>
  <p><strong>Skill2:</strong> ${skill2}</p>
  <p><strong>Skill3:</strong> ${skill3}</p>
  <p><strong>Skill4:</strong> ${skill4}</p>
  <p><strong>Skill5:</strong> ${skill5}</p>
  <h2>Experience</h2>
  <p><strong>Experience1:</strong> ${experience1}</p>
  <p><strong>Experience2:</strong> ${experience2}</p>
  <p><strong>Experience3:</strong> ${experience3}</p>
  <p><strong>Experience4:</strong> ${experience4}</p>
  <p><strong>Experience5:</strong> ${experience5}</p>
  <p><strong>Experience6:</strong> ${experience6}</p>
  `;

  // Add resume content to PDF and download it
  doc.text(resumeContent, 10, 10);
  doc.save("Resume.pdf");
}
