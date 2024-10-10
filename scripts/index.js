// Clase Activity para definir las actividades
class Activity {
  constructor(id, title, description, imgUrl) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
  }
}

// Clase Repository para manejar las actividades
class Repository {
  constructor() {
      this.activities = []; // Inicializa el array de actividades vacío
  }

  // Método para obtener todas las actividades
  getAllActivities() {
      return this.activities;
  }

  // Método para crear/agregar una nueva actividad
  createActivity(activity) {
      this.activities.push(activity);
  }

  // Método para eliminar una actividad por ID
  deleteActivity(id) {
      this.activities = this.activities.filter(activity => activity.id !== id);
  }
}

// Crear una instancia del repositorio
const repository = new Repository();

// Función para crear una actividad como un elemento HTML
function createActivity(activity) {
  const { id, title, description, imgUrl } = activity;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h3>${title}</h3>
                    <p>${description}</p>
                    <img src="${imgUrl}" alt="${title}">`;

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Delete";
  btnDelete.addEventListener("click", () => {
      repository.deleteActivity(id);
      renderActivity(); // Refrescar el renderizado
  });

  card.appendChild(btnDelete);
  return card;
}

// Función para renderizar las actividades
const renderActivity = () => {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Limpiar el contenedor

  const activities = repository.getAllActivities();
  const cards = activities.map(activity => createActivity(activity));
  cards.forEach(card => container.appendChild(card));
};

// Función para manejar el botón de agregar actividad
const handlerbtn = (e) => {
  e.preventDefault();

  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputImgUrl = document.getElementById("imgUrl");

  // Validar entradas
  if (inputTitle.value.length > 0 && inputDescription.value.length > 0 && inputImgUrl.value.length > 0) {
      const newActivity = new Activity(
          repository.getAllActivities().length + 1, // Generar un ID basado en la longitud actual
          inputTitle.value,
          inputDescription.value,
          inputImgUrl.value
      );

      repository.createActivity(newActivity);
      renderActivity(); // Refrescar el contenedor
      inputTitle.value="";
      inputImgUrl.value="";
      inputDescription.value="";

  } else {
      alert("Debe cargar los campos seleccionados");
  }
};

// Asociar el evento al botón de agregar actividad
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", handlerbtn);

// Renderizar las actividades inicialmente
renderActivity();
