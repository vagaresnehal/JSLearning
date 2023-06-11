

console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi =document.getElementsByClassName("liItem");
console.log(elementLi[1].innerHTML);


const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
const elementByQuery= document.querySelector(".liItem");
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
const elementsByQuery = document.querySelectorAll(".liItem");
elementsByQuery[3].innerHTML = "Oracle Database";
console.log(elementsByQuery[3]);


console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
console.log(elementMyProfile);
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

console.log("====== Changing the CSS properties =====");
const elementTechStack = document.querySelector("#techStack");
elementTechStack.style.color = "red";
elementTechStack.style.fontFamily = "Arial";


console.log(`======= Remove child element`);
const elementOfParent = document.querySelector("#parent");
const elementOfChild = document.querySelector(".item")
elementOfParent.removeChild(elementOfChild);

console.log("========== Css Property Apply on Main Heading ==========");
const selectH2Element = document.querySelector("#profile");
selectH2Element.style.color = "Brown";
console.log(selectH2Element);


console.log("====== Adding Child Element to it's Parent=====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

console.log("======== Adding Child Element to Directly it's Body Parent ===========");
const elementH2 = document.createElement("h2");
const elementText1 = document.createTextNode("Tools");
elementH2.appendChild(elementText1);
document.body.appendChild(elementH2);


console.log(`========= First Way to Click Element to Generate Event ==========`);
function show(){
    console.log("Click Event.....");
};

console.log(`========= Second Way to Click Element to Generate Event ==========`);

const elementAddress = document.querySelector("#address");
elementAddress.addEventListener("click",()=> {
    console.log("Listening Click Event ....");
    //alert("You have clicked on Address ");
    prompt("This Is the Title","Default value");
});
//elementAddress.addEventListener("doubleclick",()=> {
 //   console.log("Double Click ...");
//})
elementAddress.addEventListener("mouseover",()=>{
    console.log("Listening MouseOver Event ....... ");
    elementAddress.style.color ="Red";

});
const elementHobbies = document.querySelector("#hobbies");
elementHobbies.addEventListener("click",()=>{
    console.log("1) Reading 2) Writing 3) Dancing ");
});

const isEvenButton = document.querySelector("#isEvenButton");
isEvenButton.addEventListener("click",()=>{
    const inputValue = prompt("please Enter Number to check...",0);
    console.log(inputValue);
    const result = inputValue%2==0? true:false;
    console.log(result);
    if (result) {
        alert("Given Number is Even");
    }else{
        alert("Given Number is ODD")
    }

});











console.log(`*******************************************`);





















