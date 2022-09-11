/*const NOMBRE = prompt("Ingrese su nombre")
const APELLIDO = prompt("Ingrese su apellido")

if (NOMBRE == "" || APELLIDO == "") {
    alert ("Ingrese todos los datos por favor")
} else {
    alert ("Bienvenido " + NOMBRE + APELLIDO)
} 

iniciarSesion();
function iniciarSesion() {
    const USUARIO = prompt("Ingrese su usuario");

    do {
        if (USUARIO == "profesor"){
            alert("Bienvenido" + USUARIO)
        }
    }
    while (USUARIO != "profesor") {
        alert("Usuario incorrecto");
    }

    const PASSWORD = prompt("Ingrese su contraseña");
    
    if (PASSWORD == "1234"){
        alert("Bienvenido" + USUARIO);
    }
    else {
        alert("Contraseña incorrecta");
    }
}*/

//Entrega n2
/*function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
  }
  
  function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
  }
  
  function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
  }
  
  function division(numeroUno, numeroDos) {
    let resultado = numeroUno / numeroDos;
    return resultado;
  }
  
  function mostrarResultado(resultado) {
    alert("El resultado de la operación es: " + resultado);
  }
  
  function mostrarMenu() {
    let opcion = prompt(
      "Bienvenido, seleccione una opción (ESC para salir)\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"
    );
    return opcion;
  }
  
  function calculadora() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "ESC") {
      if (opcionSeleccionada !== "") {
        opcionSeleccionada = parseInt(opcionSeleccionada);
  
        //isNaN nos sirve para saber si el contenido de una variable es NaN
        if (!isNaN(opcionSeleccionada)) {
          let numeroUno = parseFloat(prompt("Ingrese el primer numero"));
          let numeroDos = parseFloat(prompt("Ingrese el segundo numero"));
          switch (opcionSeleccionada) {
            case 1:
              let resultadoSuma = suma(numeroUno, numeroDos);
              mostrarResultado(resultadoSuma);
              break;
  
            case 2:
              let resultadoResta = resta(numeroUno, numeroDos);
              mostrarResultado(resultadoResta);
              break;
  
            case 3:
              let resultadoMultiplicacion = multiplicacion(numeroUno, numeroDos);
              mostrarResultado(resultadoMultiplicacion);
              break;
  
            case 4:
              let resultadoDivision = division(numeroUno, numeroDos);
              mostrarResultado(resultadoDivision);
              break;
  
            default:
              alert("Opcion Incorrecta");
              break;
          }
        } else {
          alert("Ingresó una letra");
        }
      } else {
        alert("Seleccione la opción");
      }
      opcionSeleccionada = mostrarMenu();
    }
  }
  
  calculadora();*/

  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  
  window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  });
