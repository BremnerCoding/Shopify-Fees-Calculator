/*
Shopify Fee Rates

Basic: 2% + 25p
Standard: 1.7% + 25p
Advanced: 1.5% + 25p
*/

//Shopify Fee Rates
const shopifyBasicFees = 0.02;
const shopifyStandardFees = 0.017;
const shopifyAdvancedFees = 0.015;


let salePrice = 100;
let salePriceWithoutVAT = salePrice / 1.2;

let costPrice = 50;
let costPriceWithoutVAT = costPrice / 1.2;

let profitsInTotal;
let profitsAfterFeesWithVAT;
let profitsAfterFeesWithoutVAT;

console.log(salePriceWithoutVAT);
console.log(costPriceWithoutVAT);

//----------------------------------------------------------------------------------------------------

//Shopify Basic Fees Calculations without VAT Deductions
profitsAfterFeesWithVAT = salePrice - (salePrice * shopifyBasicFees) - 0.25;

profitsInTotal = profitsAfterFeesWithVAT - costPrice;

console.log(profitsInTotal);

//SHopify Basic Fees Calculations with VAT Deductions
profitsAfterFeesWithoutVAT = salePriceWithoutVAT - (salePrice * shopifyBasicFees) - 0.25;
profitsInTotal = profitsAfterFeesWithoutVAT - costPriceWithoutVAT;

console.log(profitsInTotal);

//----------------------------------------------------------------------------------------------------

//Shopify Standard Fees Calculations without VAT Deductions
profitsAfterFeesWithVAT = salePrice - (salePrice * shopifyStandardFees) - 0.25;
profitsInTotal = profitsAfterFeesWithVAT - costPrice;

console.log(profitsInTotal);

//Shopify Standard Fee Calculations with VAT Deductions
profitsAfterFeesWithoutVAT = salePriceWithoutVAT - (salePrice * shopifyStandardFees) - 0.25;
profitsInTotal = profitsAfterFeesWithoutVAT - costPriceWithoutVAT;

console.log(profitsInTotal);

//----------------------------------------------------------------------------------------------------

//Shopify Advanced Fees Calculations without VAT Deductions
profitsAfterFeesWithVAT = salePrice - (salePrice * shopifyAdvancedFees) - 0.25;
profitsInTotal = profitsAfterFeesWithVAT - costPrice;

console.log(profitsInTotal);

//Shopify Advanced Fees Calculations with VAT Deductions
profitsAfterFeesWithoutVAT = salePriceWithoutVAT - (salePrice * shopifyAdvancedFees) - 0.25;
profitsInTotal = profitsAfterFeesWithoutVAT - costPriceWithoutVAT;

console.log(profitsInTotal);

//----------------------------------------------------------------------------------------------------