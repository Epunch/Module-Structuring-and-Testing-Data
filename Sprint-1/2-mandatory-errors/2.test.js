// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// Error: ReferenceError. Cannot access 'cityOfBirth' before initialization.
// This is due to the Temporal Dead Zone (TDZ).

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
