// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Rama Tanikella" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb+=1
    document.getElementById("qty-gb").innerText = gb
    document.getElementById("qty-total").innerText = gb+cc+sugar

})

document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb>0){
        gb-=1
        document.getElementById("qty-gb").innerText = gb
        document.getElementById("qty-total").innerText = gb+cc+sugar
    }
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc+=1
    document.getElementById("qty-cc").innerText = cc
    document.getElementById("qty-total").innerText = gb+cc+sugar
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc>0){
        cc-=1
        document.getElementById("qty-cc").innerText = cc
        document.getElementById("qty-total").innerText = gb+cc+sugar
    }
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar+=1
    document.getElementById("qty-sugar").innerText = sugar
    document.getElementById("qty-total").innerText = gb+cc+sugar
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar>0){
        sugar-=1
        document.getElementById("qty-sugar").innerText = sugar
        document.getElementById("qty-total").innerText = gb+cc+sugar
    }
})

