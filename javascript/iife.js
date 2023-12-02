// immedieately invoked function expression IIFE

(function newFun(){
    console.log("Connected")
})(); // ; is used to end line

( () => {
    console.log("Connect two...")
})()

/*( () => {
    console.log("Connect 333...")
})()*/ //it runs only after ; put before 
;
( (name) => {
    console.log(`Connect therr... ${name}`)
})("Ajay Nagar")

