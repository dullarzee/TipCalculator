let bill = document.querySelector('.space1');
let button1 = document.querySelector('.space2');
let button2 = document.querySelector('.space3');
let button3 = document.querySelector('.space4');
let button4 = document.querySelector('.space5');
let button5 = document.querySelector('.space6');
let button6 = document.querySelector('.space7');
let people = document.querySelector('.space8');
const buttons = document.querySelectorAll('button');
let error1 = document.querySelector('.spanError0');
let error2 = document.querySelector('.spanError');
let message1 = document.querySelector('.span2');
let message2 = document.querySelector('.span4');
let section = document.querySelector('.theSection');
let reset = document.querySelector('.buttonReset');
let value;
let value2;
let billCheck = 0;
let peopleCheck = 0;


function customCalc(event)
{
    const result = event.target.value;
    const res = result/100;
    const res2 = res*(value/value2);
    const res3 = res2 + (value/value2)
    console.log(res3);
    displayValues(res2, res3);
}
function focuson(e)
{
    console.log('focused!');
    e.target.style.border = '2px';

}

//for the reset button functionality
function clear()
{
    bill.value = '';
    people.value = '';
    message1.innerHTML = '$0.00';
    message2.innerHTML = '$0.00';
    custom.value = '';

}

//for the custom button functionality
function replaceButton()
{
    window.custom = document.createElement('input');
    custom.type = 'text';
      custom.style.width = `${button6.offsetWidth}px`; // Match button width
      custom.style.height = `${button6.offsetHeight}px`; // Match button height
      custom.placeholder = `   0`;
    button6.parentNode.replaceChild(custom, button6);
    custom.focus = 'true';
    custom.addEventListener('blur', customCalc);


}

//to display the computed values
function displayValues(Result2,Result3)
{
    Result2 = Result2.toFixed(2);
    Result3 = Result3.toFixed(2);
    if(Result2.length || Result3.length > 9)
    {
        section.style.overflowX = 'auto';
    }
    message1.innerHTML = `$${Result2}`;
    message2.innerHTML = `$${Result3}`;
    console.log(Result2.length);
}

let button1Computing = ()=>{
    let result1 = value/value2;
    let result2 = 0.05*result1;
    let result3 = result2 + result1;
    displayValues(result2,result3);
}

let button2Computing = ()=>{
    let result1 = value/value2;
    let result2 = 0.1*result1;
    let result3 = result2 + result1;
    console.log(result2);
    displayValues(result2,result3);
}

let button3Computing = ()=>{
    let result1 = value/value2;
    let result2 = 0.15*result1;
    let result3 = result2 + result1;
    console.log(result2);
    displayValues(result2,result3);
}

let button4Computing = ()=>{
    let result1 = value/value2;
    let result2 = 0.25*result1;
    let result3 = result2 + result1;
    console.log(result2);
    displayValues(result2,result3);
}

let button5Computing = ()=>{
    let result1 = value/value2;
    let result2 = 0.5*result1;
    let result3 = result2 + result1;
    console.log(result2);
    displayValues(result2,result3);
}




//initially nullifying all buttons
for(let button of buttons)
{
    button.style.pointerEvents = 'none';
    button.style.opacity = '50%';
}

//checking whether input is valid so as to enable buttons
let check = ()=>{if(billCheck && peopleCheck === 100){
    console.log('Ready to go!')
    for(let button of buttons)
        {
            button.style.pointerEvents = 'all';
            button.style.opacity = '100%';
        }}
        if(billCheck && peopleCheck !== 100)
        {
            for(let button of buttons)
                {
                    button.style.pointerEvents = 'none';
                    button.style.opacity = '50%';
                }
                
        }
   
}

//converting input to number from string
function toNumber(value)
{
    value = Number(value);
}

//function to handle input in people section
function peopleHandler(e)
{
    value2 = e.target.value;
    
    
       if(isNaN(value2))
        {
            error2.innerHTML = 'enter a valid price'
            error2.style.color = 'red';
            peopleCheck = 0;

        }
        else if(value2 === "")
        {
            error2.innerHTML = 'can\'t be empty';
            error2.style.color = 'red';
            peopleCheck = 0;
        }
        else if(Number(value2) === 0)
        {
            error2.innerHtml = 'can\'t be Zero';
            error2.style.color = 'red';
            peopleCheck = 0;
        }
        else
        {
            error2.innerHTML = "";
            toNumber(value2);
            peopleCheck = 100;
        }
}

//function to handle input in bill section
let billHandler = (e)=>{
    value = e.target.value;
    if(isNaN(value))
    {
        error1.innerHTML = 'enter a valid price'
        error1.style.color = 'red';
        billCheck = 0;
    }
    else if(value === "")
    {
        error1.innerHTML = 'can\'t be empty';
        error1.style.color = 'red';
        billCheck = 0;
    }
    else if(Number(value) === 0)
    {
        error1.innerHtml = 'can\'t be Zero';
        error1.style.color = 'red';
        billCheck = 0;
    }
    else
    {
        error1.innerHTML = "";
        toNumber(value);
        billCheck = 100;
    }
}

bill.addEventListener('keyup', billHandler);
people.addEventListener('keyup',peopleHandler);
bill.addEventListener('focus', focuson);
//checking for inputs validity to enable buttons
document.addEventListener('keyup', check);

button1.addEventListener('click', button1Computing);
button2.addEventListener('click', button2Computing);
button3.addEventListener('click', button3Computing);
button4.addEventListener('click', button4Computing);
button5.addEventListener('click', button5Computing);

button6.addEventListener('click', replaceButton);
reset.addEventListener('click', clear);