/* Query select buttons and number */
const lower = document.querySelector("#lower");
const higher = document.querySelector("#higher");
const number = document.querySelector("#number");

/* Counter is set to the number.textConter which is 0 */
let counter = parseInt(number.textContent);

/* Utilizes the sub function when lower count button
is clicked */

lower.addEventListener("click", function(){
        counter = counter - 1;
        console.log(counter)
        number.textContent = counter;
        if(counter < 0){
            number.style.color = "red"
        }
})

/* Utilizes the add function when add count button
is clicked */

higher.addEventListener("click", function(){
        counter = counter + 1;
        console.log(counter);
        number.textContent = counter;
        if(counter > 0){
            number.style.color = "green"
        }
})


    