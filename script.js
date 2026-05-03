//if doesnt work use deref, or move script block to bottom


document.querySelector("input").addEventListener("keypress",(e)=>{
    console.log(parseInt(e.key))
    console.log(e.key=="x")
    if (e.key!="x"&&isNaN(e.key)){
        e.preventDefault();
    }
});