
let markWeight1 = 78; 
let markHeight1 = 1.69; 

let johnWeight1 = 92; 
let johnHeight1 = 1.95; 


let markBMI1 = markWeight1 / (markHeight1 * markHeight1);
let johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);


let markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Data 1: Mark's BMI is ${markBMI1.toFixed(2)}, John's BMI is ${johnBMI1.toFixed(2)}. Mark has a higher BMI: ${markHigherBMI1}`);


let markWeight2 = 95; 
let markHeight2 = 1.88; 

let johnWeight2 = 85; 
let johnHeight2 = 1.76; 


let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);


let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Data 2: Mark's BMI is ${markBMI2.toFixed(2)}, John's BMI is ${johnBMI2.toFixed(2)}. Mark has a higher BMI: ${markHigherBMI2}`);