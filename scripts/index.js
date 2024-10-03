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
  
  // Crear algunas actividades
  const activity1 = new Activity(1, "Correr", "Correr es saludable", "http://imagen1.com");
  const activity2 = new Activity(2, "Caminar", "Caminar es relajante", "http://imagen2.com");
  const activity3 = new Activity(3, "Leer", "Leer es fundamental", "http://imagen3.com");
  
  // Agregar actividades al repositorio
  repository.createActivity(activity1);
  repository.createActivity(activity2);
  repository.createActivity(activity3);
  
  // Listar todas las actividades
  console.log("Todas las actividades:", repository.getAllActivities());
  
  // Eliminar una actividad por ID
  repository.deleteActivity(2); // Elimina la actividad con ID 2
  
  // Listar las actividades después de la eliminación
  console.log("Actividades después de eliminar la actividad 2:", repository.getAllActivities());
  