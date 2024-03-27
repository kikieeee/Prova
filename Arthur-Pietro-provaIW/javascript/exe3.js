//Trabalhando ID
const first = document.getElementById("Identifier");

function txt1(){
    first.innerHTML = "\"document.getElementById\" Foi Trabalhado com Sucesso"
};



//Trabalhando Tag Names
const tags = document.getElementsByTagName("p")[9];
function tec(){
    tags.innerHTML = "\" document.getElementsbyTagName foi Concluído com sucesso \" "
    tags.style.color="#f00";
};



//Trabalhando Classes
const third = [...document.getElementsByClassName("classe")];
const thirdc1 = [...document.getElementsByClassName("c1")];
const thirdc2 = [...document.getElementsByClassName("c2")];
const bkg = [...document.getElementsByClassName("body")];
const bkg1 = [...document.getElementsByClassName("background")];

function dt1(){
    thirdc1.map((el)=>{
        el.classList.add("destc1")
    })
}
function dt2(){
    thirdc2.map((el)=>{
    el.classList.add("destc2")
    })
}


//Trabalhando "document.querySelector()" E "document.querySelectorAll()"
    const wow = [...document.querySelectorAll("i, .mgd")]
    console.log(wow);  
    function Megadeth(){
        document.querySelector("i").style.color="indigo";
    }
    function Destruction(){
        wow.map((el)=>{
        el.classList.add("mustaine2")
        })
    }




//Trabalhando nossas criatividades
function drk(){
    bkg.map((el)=>{
    el.classList.add("new")
    })
    bkg1.map((el)=>{
        el.classList.add("new")
        })
};

function rst(){
    location.reload();
};
