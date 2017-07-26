var listaTareas = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]

var html = "";
 for (var i =0; i<listaTareas.length;i++){
  var dato_1 = listaTareas[i];
  var s = "<li>"+ dato_1.title +"</li>";
  html += s;
 } 
var lista = document.getElementById('list');
lista.innerHTML = html;

/*function add() {
  var etiquetali = document.createElement("li");  //Creamos una etiqueta li
  var nuevaTarea = document.getElementById("newTarea").value; 
  var contenidoEtiqueta = document.createTextNode(nuevaTarea); 
  etiquetali.appendChild(contenidoEtiqueta);
  document.getElementById("list").appendChild(etiquetali);
  document.getElementById("newTarea").value = "";
  var pushArray = {
  title: nuevaTarea,
  completed :false,
  }
  listaTareas.push(pushArray);
  }
*/
function Lista(title) {
  this.title = title;
  this.completed=false;
}


function add(){
  var nuevaTarea = document.getElementById("newTarea").value;
  var tareas = new Lista(nuevaTarea);
  listaTareas.push(tareas);
  mostrar();
  }

function mostrar() {
      var stringHtml = "";
        for (var i in listaTareas) {
         console.log (listaTareas);
         stringHtml += "<li >" +  listaTareas[i].title +  "</li>";
         }
      var n = document.getElementById('list');
      n.innerHTML = stringHtml;
   }

