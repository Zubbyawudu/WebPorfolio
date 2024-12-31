const sidebar = document.querySelector(".sidebar");
const sideBarClose = document.querySelector("#sidebarclose");
const dropdownLogo = document.querySelector(".dropdown_logo");
const home = document.querySelector(".introcontainer");
const aboutMe = document.querySelector(".aboutmecontainer");
const projectsContainer = document.querySelector(".projects");
const contact = document.querySelector(".contactform");
const github = document.querySelector("#githublogo");
const linkedin = document.querySelector("#linkedinlogo");
const myForm = document.querySelector("#myform");
const submit = document.querySelector(".contactbtn");



// to show side bar
const dropdown = () => {
  dropdownLogo.classList.toggle("active");
  sidebar.style.display = "block";
  
}
dropdownLogo.addEventListener("click", dropdown);

// to close side bar
const closeSideBar = () => {
  sideBarClose.classList.toggle("active");
  sidebar.style.display = "none";
}
sideBarClose.addEventListener("click", closeSideBar);

// Scroll View


const scrollAboutMe = () => {
  
  window.scrollTo({
    top:1000,
    behavior:"smooth"
  });
}
const scrollProjects = () => {
  projectsContainer.scrollIntoView({behavior: "smooth"});
  
  
}
const scrollContact = () => {
  contact.scrollIntoView({behavior: "smooth"});
  
}
const scrollHome = () => {
  
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


// OPEN linkedIn & Github in new Tab
const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/zubairu-awudu-888a90337/");
}
linkedin.addEventListener("click", openLinkedin);

const openGithub = () => {
  window.open("https://github.com/Zubbyawudu", "_blank");
}
github.addEventListener("click", openGithub);

// Email JS config

document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("q-HfW9kuDmAC_gNx8");

  document
    .getElementById("myform")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const form = this; // Reference the form element
      console.log(form);
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const message = form.elements["messageInput"].value;

      emailjs.sendForm("service_dir2dwv", "template_7xrou4m", form).then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          form.reset();
          alert("Message sent successfully!");
        },
        function (error) {
          // console.log("FAILED...", error);
        }
      );
    });
});



