var sideMenuIcon=document.getElementById("sideMenuIcon")
var closeSideNav=document.getElementById("closeSideNav")
var sideNavbar=document.getElementById("sideNavbar")
sideMenuIcon.addEventListener("click",()=>{
    sideNavbar.style.right="0%"
})
closeSideNav.addEventListener("click",()=>{
    sideNavbar.style.right="-50%"
})