const increment_Value = document.getElementById('Increment')
const reset_Value = document.getElementById('Reset')
const decrement_Value = document.getElementById('Decrement')

const disply_Value = document.getElementById('Display')

let value = 0;

disply_Value.innerHTML = value;

increment_Value.addEventListener('click', function(){
    disply_Value.innerHTML = value+=1
})


reset_Value.addEventListener('click', function(){
    value = 0;
    disply_Value.innerHTML = value;
})


decrement_Value.addEventListener('click', function(){
    if(value == 0){
        value = 0
        disply_Value.innerHTML = value
    }
    else disply_Value.innerHTML = value-=1
})