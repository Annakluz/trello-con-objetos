//investigar diagrama identidad relacion//
//checar lo de data- atributtes
var listas = [];

function Lista (id,title){                 //objeto por que empieza en mayuscula
    this.id = id
    this.title = title
    this.pendientes = [];
    this.agregarAtributoPendiente = function(pendiente){}
    
}
function Pendient(id,content){
    this.id = id;
    this.content = content;
}

function createList(){ //esta funcion crea la lista unicamente en la data y las mete al arreglolistas
    var title = document.getElementById("listTitle");
    var id =Date.now();
    var lista = new Lista(id,title.value) //yo lo hice afuera en innerhtml = .value
    listas.push(lista)
    renderHTML(lista)
}
function renderHTML(lista){ //esto solo maneja la parte que se mostrara graficamente
    var sectionContainer = document.createElement("section");
    var containerList = document.getElementById("containerList");
    var inputPendient = document.createElement("input");
    var buttonPendiet = document.createElement("input");
    inputPendient.type ="text"; //estos son los botones de lso pendientes
    buttonPendient.value ="Enviar Pendiente";
    buttonPendiet.onclick = func//////
    buttonPendiet.setAttribute("data-lista-id",lista.id); //para que el id no sea el mismo pero esten ligados
    
    sectionContainer.id = lista.id; //esto crea la lista 
    var h3Title = document.createElement("h3");
    h3Title.innerText = lista.title;
    sectionContainer.appendChild(h3Title);
    containerList.appendChild(sectionContainer);
}
function agregarPendiente (){
    var idDeListaModificar = this.getAttribute("data-lista-id");
    var objetoAgregarElPendiente = listas.filter(function(lista){return lista.id == idDeListaModificar})
}