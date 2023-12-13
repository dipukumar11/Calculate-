function calculatTriangleArea(){

    const baseInput = document.getElementById('width-base')
    const baseInputValue = parseFloat(baseInput.value)
    
    // height calculat start hear 

    const heightInput = document.getElementById('height-value')
    const heightInputValue = parseFloat(heightInput.value)
    // console.log( heightInputValue)

    // formula start hear

    const formula = document.getElementById('formula')
    const formulaValue = parseFloat(formula.innerText);
    // console.log(formulaValue)

    const calculat = formulaValue * baseInputValue *heightInputValue
// Area calculat result start hear 

const calcluteAreaText =document.getElementById('calculat-result')
calcluteAreaText.innerText=calculat

    
   
}