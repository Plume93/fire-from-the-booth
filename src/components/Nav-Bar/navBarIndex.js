import "./navBar.css"
import PrimaryButton from "../Buttons/primaryButtonIndex"

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


function NavBar (props) {

    return (
        <div className="nav-bar-container">
     <img className="nav-logo" src={process.env.PUBLIC_URL + '/logo-flat.png'} alt="logo" />
     <div className="nav-btn-container">
     <PrimaryButton text="Home"  onClick={() => {document.getElementById('home').scrollIntoView()}}/>
    <PrimaryButton text="Projects" onClick={() => {document.getElementById('projects').scrollIntoView()}}/>
    <PrimaryButton text="Experience"/>
    <PrimaryButton text="About"/>
    <PrimaryButton text="Contact"/>
    </div>
        </div>
    )
}

export default NavBar