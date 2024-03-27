function Adi(){
    //1º passso: saber se a função está vinculada
    /*
    console.log("CHAMA NO ZAP!");
    */ 

    //2º passo: referência de localização da tag 
    let n01 = document.getElementById("n_1");
    console.log(n01.value);
    let n02 = document.getElementById("n_2");
    let soma = parseInt(n01.value) + parseInt(n02.value) ;

    //4ºpasso: colocar o valor no <p>
    let resultado = document.getElementsByTagName("p");

    //array v = [p,p,p,p]  v[0]
    resultado[8] . innerHTML = soma ;
}