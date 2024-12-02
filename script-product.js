var sideMenuIcon=document.getElementById("sideMenuIcon")
var closeSideNav=document.getElementById("closeSideNav")
var sideNavbar=document.getElementById("sideNavbar")
sideMenuIcon.addEventListener("click",()=>{
    sideNavbar.style.right="0%"
})
closeSideNav.addEventListener("click",()=>{
    sideNavbar.style.right="-50%"
})
//seach functionaility
var search = document.getElementById("search")
var product_list=document.getElementById("product_list")
var product_container=product_list.querySelectorAll("div")
search.addEventListener("keyup",()=>{
    var input_product=event.target.value.toUpperCase()
    for(i=0;i<product_container.length;i=i+1){
        var product_name=product_container[i].querySelector("h2").textContent
        if(product_name.toUpperCase().indexOf(input_product)<0){
product_container[i].style.display="none"
        }else{
            product_container[i].style.display="block"
        }
    }
})