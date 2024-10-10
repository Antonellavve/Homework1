const { Repository, Activity } = require("./tests/spec");

describe("ToDoList (Repository)", function () {
  let repository;
  let activity1;

  beforeEach(function () {
    // Inicializa un nuevo repositorio y una actividad antes de cada prueba
    repository = new Repository();
    activity1 = new Activity(1, "Test title", "Test description", "test-url");
  });

  it("Debe ser una clase", function () {
    expect(typeof Repository).toBe("function");
  });

  it("Cada lista debe ser una instancia de ToDoList (Repository)", function () {
    expect(repository instanceof Repository).toBe(true);
  });

  it("Debería agregar un elemento a la lista", function () {
    repository.createActivity(activity1); // Agregar una actividad
    expect(repository.getAllActivities().length).toBe(1); // Comprobar que hay 1 actividad
    expect(repository.getAllActivities()[0]).toEqual(activity1); // Comprobar que la actividad es correcta
  });

  it("Debería eliminar el último elemento de la lista", function () {
    repository.createActivity(activity1); // Agregar una actividad
    repository.deleteActivity(activity1.id); // Eliminar la actividad
    expect(repository.getAllActivities().length).toBe(0); // Comprobar que la lista está vacía
  });

  it("Debería retornar la lista de elementos", function () {
    repository.createActivity(activity1); // Agregar una actividad
    const activities = repository.getAllActivities(); // Obtener la lista
    expect(Array.isArray(activities)).toBe(true); // Comprobar que es un array
    expect(activities).toEqual([activity1]); // Comprobar que la lista contiene la actividad agregada
  });
});
