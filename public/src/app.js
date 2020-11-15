const allActiveButtons = [...document.querySelectorAll(".direction")].filter((button)=>{  
    // Hittar alla aktiva knappar, 
    
    if(button.dataset.type){
        return button
    }
})

for(let button of allActiveButtons){
    button.addEventListener("click", (event)=>{
        // Kollar vilken knapp som trycktes

        const buttonAction = button.dataset.type
        console.log(buttonAction)
    })
}

