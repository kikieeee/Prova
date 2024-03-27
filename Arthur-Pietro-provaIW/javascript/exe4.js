function msobre(obj) {
    obj.innerHTML = "Mouse Fora"
  }
  
  function mfora(obj) {
    obj.innerHTML = "Mouse em cima"
  }
  
  function nofoco(x) {
    x.style.background = "yellow";
  }

  function nãofoco(x) {
    x.style.background = "white";
  }

  function muda() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("ent").innerHTML = "Sua notá será: " + x;
  }

function cliq(obj) {
    if (obj.innerHTML == "Clica em mim") {
      obj.innerHTML = "Clica em mim<br>Clica Denovo";
      return;
    }
    if (obj.innerHTML == "Clica em mim<br>Clica Denovo") {
      obj.innerHTML = "Tamo Junto";  
      return; 
    }
    if (obj.innerHTML == "Tamo Junto") {
    obj.innerHTML = "Fui Vazei";  
      return; 
    }
    if (obj.innerHTML == "Fui Vazei") {
      obj.style.display = "none";
      return;
    }
  }

  function caps() {
    const x = document.getElementById("ng");
    x.value = x.value.toUpperCase();
  }
  