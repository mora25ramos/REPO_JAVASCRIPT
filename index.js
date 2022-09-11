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

  let events = [];

  const eventName = document.querySelector("#eventName");
  const eventDate = document.querySelector("#eventDate");
  const buttonAdd = document.querySelector("#bAdd");
  
  const json = load();
  const arr = JSON.parse(json);
  events = [...arr];
  renderEvents();
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  
  buttonAdd.addEventListener("click", (e) => {
    addEvent();
  });
  
  function addEvent() {
    if (eventName.value === "" || eventDate.value === "") {
      return;
    }
    if (datediff(eventDate.value) < 0) {
      return;
    }
  
    const newEvent = {
      id: (Math.random() * 100).toString(36).slice(2),
      name: eventName.value,
      date: eventDate.value,
    };
  
    events.unshift(newEvent);
  
    save(JSON.stringify(events));
  
    eventName.value = "";
  
    renderEvents();
  }
  
  function renderEvents() {
    const eventsHTML = events.map((event) => {
      return `
          <div class="task">
              <div class="days"><span class="days-number">${datediff(
                event.date
              )}</span><span class="days-text">días</span></div>
              <div class="event-name">${event.name}</div>
              <div class="event-date">${event.date}</div>
              <div class="actions"><button data-id="${
                event.id
              }" class="bDelete">Eliminar</button></div>
          </div>`;
    });
  
    document.querySelector("#tasksContainer").innerHTML = eventsHTML.join("");
  
    document.querySelectorAll(".bDelete").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = button.getAttribute("data-id");
        events = events.filter((event) => event.id !== id);
        save();
        renderEvents();
      });
    });
  }
  
  function datediff(d) {
    var date1 = new Date(d);
    var date2 = new Date();
    var difference = date1.getTime() - date2.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  }
  
  function save(data) {
    localStorage.setItem("items", data);
  }
  
  function load() {
    return localStorage.getItem("items");
  }