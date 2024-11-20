// script.js
const activityForm = document.getElementById("activityForm");
const activityList = document.getElementById("activityList");

activityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const activityName = document.getElementById("activityName").value.trim();
  const activityDate = document.getElementById("activityDate").value;
  const activityTime = document.getElementById("activityTime").value;

  if (!activityName || !activityDate || !activityTime) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear un nuevo elemento de actividad
  const newActivity = document.createElement("li");
  newActivity.innerHTML = `
    <div class="details">
      <strong>${activityName}</strong><br>
      <small>${activityDate} a las ${activityTime}</small>
    </div>
    <button class="delete-button">Eliminar</button>
  `;

  // Agregar funcionalidad para eliminar
  const deleteButton = newActivity.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    if (confirm(`¿Estás seguro de eliminar la actividad: ${activityName}?`)) {
      newActivity.remove();
    }
  });

  // Agregar la actividad a la lista
  activityList.appendChild(newActivity);

  // Limpiar el formulario
  activityForm.reset();
});
