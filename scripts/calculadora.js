let resultado;

//suma
document.getElementById("suma").addEventListener("click",() =>{
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML = resultado;
});

//resta
document.getElementById("resta").addEventListener("click",() =>{
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    resultado = numero1 - numero2;
    document.getElementById("resultado").innerHTML = resultado;
});

//div
document.getElementById("división").addEventListener("click",() =>{
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    resultado = numero1 / numero2;
    document.getElementById("resultado").innerHTML = resultado;
});

//mult
document.getElementById("multiplicación").addEventListener("click",() =>{
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    resultado = numero1 * numero2;
    document.getElementById("resultado").innerHTML = resultado;
});
