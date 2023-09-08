const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitButton = document.getElementById('submit');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

let action = '+';

plusButton.onclick = function()
{
    action = '+';
}

minusButton.onclick = function()
{
    action = '-';
}

function printResult(result)
{
    if(result < 0)
    {
        resultElement.style.color = 'red';
    }
    else
    {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(input1, input2, actionSymbol)
{
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);

    return actionSymbol == '+' ? number1 + number2 : number1 - number2;
}

submitButton.onclick = function() 
{
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);
}
