//--------------------------------------------------------------- Boton JSON ------------------------------------------------------------------
document.querySelector("#botonMenu").addEventListener('click', traerDatos);
function traerDatos(){
    // console.log('dentro de la función');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'JavaScript/inventario.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
           // console.log(this.responseText)
            let datos = JSON.parse(this.responseText);
            console.log (datos);
            let res = document.querySelector("#res");
            res.innerHTML = '';


            for(let item of datos){
                //console.log (item.Sección)
                res.innerHTML += `
                    <tr>
                        <td>${item.Sección}</td>
                        <td>${item.Platillo}</td>
                        <td>${item.Precio}</td>
                        <td>${item.Disponibilidad}</td>
                    </tr>
                `
            }
        }
    }
}
//--------------------------------------------------------------- Base de Datos ------------------------------------------------------------------
let Platillo = {
    platoFuerte1:'Res Lomo',
    platoFuerte2:'Res Tri-tip Steak',
    platoFuerte3:'Res Rib Eye Steak',
    platoFuerte4:'Cerdo Lomo',
    platoFuerte5:'Cerdo Costilla',
    platoFuerte6:'Cerdo Bisteck',
    platoFuerte7:'Pescado Tilapia',
    platoFuerte8:'Pescado Atún',
    platoFuerte9:'Pescado Salmón',
    Acompañamiento1:'Orden de arroz',
    Acompañamiento2:'Pure de papa',
    Acompañamiento3:'Ensalada',
    Bebida1:'Fresa',
    Bebida2:'Piña',
    Bebida3:'Limonda',
    Bebida4:'Frutas',
    Bebida5:'Guanabana',
    Bebida6:'Orchata',
    Bebida7:'Té frío',
    Bebida8:'Té blanco',
    Bebida9:'Té de manzana',
    Postre1:'Pie de limón',
    Postre2:'Flan',
    Postre3:'Parfait'
  }
let Precio = {
    Res1:50,
    Res2:65,
    Res3:65,
    Cerdo1:47,
    Cerdo2:50,
    Cerdo3:45,
    Pescado1:45,
    Pescado2:45,
    Pescado3:50,
    Acompañamiento:5,
    Bebida:2,
    Postre1:18,
    Postre2:17,
    Postre3:15
  }

//--------------------------------------------------Array Factura ------------------------------------------------------------------

const sumaFactura = []; //cada vez que el usuario seleccione un producto este array almacenara su precio
console.log(sumaFactura) //muestra el array en la consola del buscador 

////-----------------------------------------------Total de la factura ------------------------------------------------------------------
let total=0
function array (){
  for(let i = 0; i < sumaFactura.length; i++) total+=sumaFactura[i];
  document.getElementById("total").innerHTML = "Orden CORFIRMADA <br>" + "El total de su orden es $"+total+"<br> ¡Muchas gracias por visitarnos!";
}  

//------------------------------------------------Limpia la orden al recargar la página ------------------------------------------------------------------

function eliminarPago (){
    window.location.reload()
}

//-----------------------------------------------Agrega los productos seleccionados al resumen de orden ------------------------------------------------------------------

//Res Lomo
let count1 = 0;
let btn1 = document.getElementById("myPlatoFuerte1");
let disp1 = document.getElementById("displayCounter1");
btn1.addEventListener("click", function (){
    count1++;
    disp1.innerHTML = count1;
});
function myFunction1() {
  document.getElementById("platoFuerte1").innerHTML = Platillo.platoFuerte1+' $'+Precio.Res1
  sumaFactura.push(50)
        
}
//Res Tri-Tip
let count2 = 0;
let btn2 = document.getElementById("myPlatoFuerte2");
let disp2 = document.getElementById("displayCounter2");
btn2.addEventListener("click", function (){
    count2++;
    disp2.innerHTML = count2;
});
function myFunction2() {
  document.getElementById("platoFuerte2").innerHTML = Platillo.platoFuerte2+' $'+Precio.Res2
  sumaFactura.push(65)
}

//Res Rib Eye
let count3 = 0;
let btn3 = document.getElementById("myPlatoFuerte3");
let disp3 = document.getElementById("displayCounter3");
btn3.addEventListener("click", function (){
    count3++;
    disp3.innerHTML = count3;
});
function myFunction3() {
  document.getElementById("platoFuerte3").innerHTML = Platillo.platoFuerte3+' $'+Precio.Res3
  sumaFactura.push(65)
}
//Cerdo Lomo
let count4 = 0;
let btn4 = document.getElementById("myPlatoFuerte4");
let disp4 = document.getElementById("displayCounter4");
btn4.addEventListener("click", function (){
    count4++;
    disp4.innerHTML = count4;
});
function myFunction4() {
  document.getElementById("platoFuerte4").innerHTML = Platillo.platoFuerte4+' $'+Precio.Cerdo1
  sumaFactura.push(47)
}
//Cerdo Costilla
let count5 = 0;
let btn5 = document.getElementById("myPlatoFuerte5");
let disp5 = document.getElementById("displayCounter5");
btn5.addEventListener("click", function (){
    count5++;
    disp5.innerHTML = count5;
});
function myFunction5() {
  document.getElementById("platoFuerte5").innerHTML = Platillo.platoFuerte5+' $'+Precio.Cerdo2
  sumaFactura.push(50)
}
//Cerdo Bisteck
let count6 = 0;
let btn6 = document.getElementById("myPlatoFuerte6");
let disp6 = document.getElementById("displayCounter6");
btn6.addEventListener("click", function (){
    count6++;
    disp6.innerHTML = count6;
});
function myFunction6() {
  document.getElementById("platoFuerte6").innerHTML = Platillo.platoFuerte6+' $'+Precio.Cerdo3
  sumaFactura.push(45)
}
//Pescado Tilapia
let count7 = 0;
let btn7 = document.getElementById("myPlatoFuerte7");
let disp7 = document.getElementById("displayCounter7");
btn7.addEventListener("click", function (){
    count7++;
    disp7.innerHTML = count7;
});
function myFunction7() {
  document.getElementById("platoFuerte7").innerHTML = Platillo.platoFuerte7+' $'+Precio.Pescado1
  sumaFactura.push(45)
}
//Pescado Atún
let count8 = 0;
let btn8 = document.getElementById("myPlatoFuerte8");
let disp8 = document.getElementById("displayCounter8");
btn8.addEventListener("click", function (){
    count8++;
    disp8.innerHTML = count8;
});
function myFunction8() {
  document.getElementById("platoFuerte8").innerHTML = Platillo.platoFuerte8+' $'+Precio.Pescado2
  sumaFactura.push(50)
}
//Pescado Salmón
let count9 = 0;
let btn9 = document.getElementById("myPlatoFuerte9");
let disp9 = document.getElementById("displayCounter9");
btn9.addEventListener("click", function (){
    count9++;
    disp9.innerHTML = count9;
});
function myFunction9() {
  document.getElementById("platoFuerte9").innerHTML = Platillo.platoFuerte9+' $'+Precio.Pescado3
  sumaFactura.push(50)
}


//Acompañamientos//
//Arroz
let countA = 0;
let btnA = document.getElementById("Acompañamiento1");
let dispA = document.getElementById ("displayAcompañamiento1");
btnA.addEventListener("click", function (){
  countA++;
  dispA.innerHTML = countA
});
function acompañamiento1() {
  document.getElementById("acompañamiento1").innerHTML = Platillo.Acompañamiento1+' $'+Precio.Acompañamiento
  sumaFactura.push(5)
}

//Pure de papa
let countP = 0;
let btnP = document.getElementById("Acompañamiento2");
let dispP = document.getElementById ("displayAcompañamiento2");
btnP.addEventListener("click", function (){
  countP++;
  dispP.innerHTML = countP
});
function acompañamiento2() {
  document.getElementById("acompañamiento2").innerHTML = Platillo.Acompañamiento2+' $'+Precio.Acompañamiento
  sumaFactura.push(5)
}
//Ensalada
let countE = 0;
let btnE = document.getElementById("Acompañamiento3");
let dispE = document.getElementById ("displayAcompañamiento3");
btnE.addEventListener("click", function (){
  countE++;
  dispE.innerHTML = countE
});
function acompañamiento3() {
  document.getElementById("acompañamiento3").innerHTML = Platillo.Acompañamiento3+' $'+Precio.Acompañamiento
  sumaFactura.push(5)
}


//Bebidas

//Fresa
let countB1 = 0
let btnB1 = document.getElementById("BebidaB1");
let dispB1 = document.getElementById("displayBebidaB1");
btnB1.addEventListener ("click", function(){
  countB1++;
  dispB1.innerHTML = countB1
})
function bebidaB1(){
  document.getElementById("bebida1").innerHTML = Platillo.Bebida1+' $'+Precio.Bebida
  sumaFactura.push(2)
}

//Piña
let countB2 = 0
let btnB2 = document.getElementById("BebidaB2");
let dispB2 = document.getElementById("displayBebidaB2");
btnB2.addEventListener ("click", function(){
  countB2++;
  dispB2.innerHTML = countB2
})
function bebidaB2(){
  document.getElementById("bebida2").innerHTML = Platillo.Bebida2+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Limonda
let countB3 = 0
let btnB3 = document.getElementById("BebidaB3");
let dispB3 = document.getElementById("displayBebidaB3");
btnB3.addEventListener ("click", function(){
  countB3++;
  dispB3.innerHTML = countB3
})
function bebidaB3(){
  document.getElementById("bebida3").innerHTML = Platillo.Bebida3+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Frutas
let countB4 = 0
let btnB4 = document.getElementById("BebidaB4");
let dispB4 = document.getElementById("displayBebidaB4");
btnB4.addEventListener ("click", function(){
  countB4++;
  dispB4.innerHTML = countB4
})
function bebidaB4(){
  document.getElementById("bebida4").innerHTML = Platillo.Bebida4+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Guanabana
let countB5 = 0
let btnB5 = document.getElementById("BebidaB5");
let dispB5 = document.getElementById("displayBebidaB5");
btnB5.addEventListener ("click", function(){
  countB5++;
  dispB5.innerHTML = countB5
})
function bebidaB5(){
  document.getElementById("bebida5").innerHTML = Platillo.Bebida5+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Orchata
let countB6 = 0
let btnB6 = document.getElementById("BebidaB6");
let dispB6 = document.getElementById("displayBebidaB6");
btnB6.addEventListener ("click", function(){
  countB6++;
  dispB6.innerHTML = countB6
})
function bebidaB6(){
  document.getElementById("bebida6").innerHTML = Platillo.Bebida6+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Té1
let countB7 = 0
let btnB7 = document.getElementById("BebidaB7");
let dispB7 = document.getElementById("displayBebidaB7");
btnB7.addEventListener ("click", function(){
  countB7++;
  dispB7.innerHTML = countB7
})
function bebidaB7(){
  document.getElementById("bebida7").innerHTML = Platillo.Bebida7+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Té2
let countB8 = 0
let btnB8 = document.getElementById("BebidaB8");
let dispB8 = document.getElementById("displayBebidaB8");
btnB8.addEventListener ("click", function(){
  countB8++;
  dispB8.innerHTML = countB8
})
function bebidaB8(){
  document.getElementById("bebida8").innerHTML = Platillo.Bebida8+' $'+Precio.Bebida
  sumaFactura.push(2)

}

//Té3
let countB9 = 0
let btnB9 = document.getElementById("BebidaB9");
let dispB9 = document.getElementById("displayBebidaB9");
btnB9.addEventListener ("click", function(){
  countB9++;
  dispB9.innerHTML = countB9
})
function bebidaB9(){
  document.getElementById("bebida9").innerHTML = Platillo.Bebida9+' $'+Precio.Bebida
  sumaFactura.push(2)
}

//Postres

//Pie de limón
let countP1 = 0
let btnP1 = document.getElementById("PostreP1");
let dispP1 = document.getElementById("displayPostreP1");
btnP1.addEventListener ("click", function(){
  countP1++;
  dispP1.innerHTML = countP1
})
function postre1(){
  document.getElementById("postre1").innerHTML = Platillo.Postre1+' $'+Precio.Postre1
  sumaFactura.push(18)
}

//Flan
let countP2 = 0
let btnP2 = document.getElementById("PostreP2");
let dispP2 = document.getElementById("displayPostreP2");
btnP2.addEventListener ("click", function(){
  countP2++;
  dispP2.innerHTML = countP2
})
function postre2(){
  document.getElementById("postre2").innerHTML = Platillo.Postre2+' $'+Precio.Postre2
  sumaFactura.push(17)
}

//Parfait
let countP3= 0
let btnP3 = document.getElementById("PostreP3");
let dispP3 = document.getElementById("displayPostreP3");
btnP3.addEventListener ("click", function(){
  countP3++;
  dispP3.innerHTML = countP3
})
function postre3(){
  document.getElementById("postre3").innerHTML = Platillo.Postre3+' $'+Precio.Postre3
  sumaFactura.push(15)
}



/* ---------------------------------------------------Modifica la página de acuerdo a la hora----------------------------------- */
// Obtiene la hora actual y alterra la cuenta de acuerdo a ella
$(document).ready(function() {
    const horaActual = new Date();
    const hora = horaActual.getHours();
    console.log(horaActual);
    
    // Cambiando la Pagina segun la hora con JQuery
    if (hora >= 1 && hora < 12) {
        $(".desayuno").show();
        $(".almuerzo").hide();
        $(".cena").hide();
    } else if (hora >= 12 && hora < 19) {
        $(".desayuno").hide();
        $(".almuerzo").show();
        $(".cena").hide();
    } else if (hora >= 19 && hora < 23) {
        $(".desayuno").hide();
        $(".almuerzo").hide();
        $(".cena").show();
    }
});

/* Caja de sujerencias */

function sugerencias(){
  let comentario='', unir='', agregar='';
  do {
    comentario=prompt("Por favor escriba su comentario: ");
    unir = unir + '<br>' + comentario;
    if(comentario !== null){
    agregar = prompt('¿Desea agregar otro comentario?')
    }
  } while (agregar === 'si');
  if (comentario===''||comentario===null){
    document.getElementById('sugerencia').innerHTML = '';
  }
  else if (comentario!==''||comentario!==null) {
  document.getElementById('sugerencia').innerHTML = unir;
  }
}