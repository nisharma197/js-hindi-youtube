// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB connected`);
})();

( function aurcode(){
    // named IIFE
    console.log(`DB connected Two`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB connected Two ${name}`);
})("nisha");