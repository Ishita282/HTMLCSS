const greetButton= document.getElementById("button");
const nameInput= document.getElementById("text");
const greetingName= document.getElementById("greet");
const boxes= document.querySelectorAll(".Box");

greetButton.addEventListener("click", () =>{
    const name= nameInput.value;
    if(name.length === 0){
        return alert("Please enter your name");
    }else{
        greetingName.textContent= `Hello, ${name}`
    }
})

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        const color= box.textContent;
        box.style.backgroundColor = color;
        box.style.color = "white";
    })
})