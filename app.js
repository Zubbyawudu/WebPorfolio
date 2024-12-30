const sidebar = document.querySelector(".sidebar");
const sideBarClose = document.querySelector("#sidebarclose");
const dropdownLogo = document.querySelector(".dropdown_logo");
const home = document.querySelector(".introcontainer");
const aboutMe = document.querySelector(".aboutmecontainer");
const projectsContainer = document.querySelector(".projects");
const contact = document.querySelector(".contactform");

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
  // aboutMe.scrollIntoView({behavior: "smooth"});
  window.scrollTo({
    top:1000,
    behavior:"smooth"
  });
}
const scrollProjects = () => {
  projectsContainer.scrollIntoView({behavior: "smooth"});
  // window.scrollTo({
  //   top:2600,
  //   behavior:"smooth"
  // });
  
}
const scrollContact = () => {
  contact.scrollIntoView({behavior: "smooth"});
  // window.scrollTo({
  //   top:5100,
  //   behavior:"smooth"
  // });
}
const scrollHome = () => {
  
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

