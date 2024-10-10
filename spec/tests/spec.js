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

  module.exports = {Activity, Repository}