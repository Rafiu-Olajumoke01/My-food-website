let dinnerBtn = document.getElementById("d")
let lunchBtn = document.getElementById("l")
let breakfastBtn = document.getElementById("b")

let breakfast = document.getElementById("breakfast")
let lunch = document.getElementById("lunch")
let dinner = document.getElementById("dinner")


breakfast.style.display = "block"
lunch.style.display = "none"
dinner.style.display = "none"



dinnerBtn.onclick = function(){
    breakfast.style.display = "none"
    lunch.style.display = "none"
    dinner.style.display = "block"
     
}

lunchBtn.onclick = function(){
    breakfast.style.display = "none"
    lunch.style.display = "block"
    dinner.style.display = "none"
     
}

breakfastBtn.onclick = function(){
    breakfast.style.display = "block"
    lunch.style.display = "none"
    dinner.style.display = "none"
     
}
