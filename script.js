const numbers = [
    document.querySelector("#op-7"), 
    document.querySelector("#op-8"), 
    document.querySelector("#op-9"),
    document.querySelector("#op-4"),
    document.querySelector("#op-5"),
    document.querySelector("#op-6"),
    document.querySelector("#op-1"),
    document.querySelector("#op-2"),
    document.querySelector("#op-3"),
    document.querySelector("#op-0") 
]
const operators = [
    document.querySelector("#op-sub"),
    document.querySelector("#op-add"),
    document.querySelector("#op-mul"),
    document.querySelector("#op-CE"),
    document.querySelector("#op-equals"),
]
const screen = document.querySelector("#current-cal")
const calculation = document.querySelector("#past-cal")

calculation.textContent = +0
function addText(e){
   screen.textContent += +e
} 

numbers.forEach((e) => {
    e.addEventListener("click", () => {
        if(e === numbers[0]){
            addText(7) 
        }
        if(e === numbers[1]){
            addText(8)
        }
        if(e === numbers[2]){
            addText(9)
        }
        if(e === numbers[3]){
            addText(4)
        } if(e === numbers[4]){
            addText(5)
        } if(e === numbers[5]){
            addText(6)
        }
        if(e === numbers[6]){
            addText(1)
        } if(e === numbers[7]){
            addText(2)
        } if(e === numbers[8]){
            addText(3)
        }
        if(e === numbers[9]){
            addText(0)
        }
    })
})

function operation(e){
    if(e === "CE"){
        screen.textContent = null
        calculation.textContent = 0
    }
    if(e === "mul"){
           calculation.textContent = +calculation.textContent  * +screen.textContent
           screen.textContent = null
    }
    if(e === "sub"){  
        calculation.textContent -= screen.textContent
        screen.textContent = null
    }
    if(e === "add"){
        calculation.textContent = +calculation.textContent + +screen.textContent 
        screen.textContent = null
    }
    if(e === "equals"){
        screen.textContent = calculation.textContent  
    }   
}

operators.forEach((e) => {
    e.addEventListener("click", () => {
       if(e === operators[3]){
           operation("CE")
       }
       if(e === operators[2]){
        operation("mul")
    }
    if(e === operators[0]){
        operation("sub")
    }
    if(e === operators[1]){
        operation("add")
    }
    if(e === operators[4]){
        operation("equals")
    }
    })
})
