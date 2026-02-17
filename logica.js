const users = [
  { id: 1, name: "Juan Pérez", email: "juan.perez@example.com" },
  { id: 2, name: "María Gómez", email: "maria.gomez@example.com" },
  { id: 3, name: "Carlos Rodríguez", email: "carlos.rodriguez@example.com" },
  { id: 4, name: "Laura Martínez", email: "laura.martinez@example.com" },
  { id: 5, name: "Andrés López", email: "andres.lopez@example.com" },
];

function obtenerUsuarioPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = users.find(user => user.id === id);

      if (usuario) {
        resolve(usuario); 
      } else {
        reject("Usuario no encontrado"); 
      }
    }, 2000); 
  });
}

btnBuscar.addEventListener("click", () => {
  const input = document.getElementById("userId");
  const id = Number(input.value);

  if (!input.value || id < 1) {
    resultado.textContent = "X Por favor ingrese un ID válido";
    return;
  }

  resultado.textContent = "Cargando usuario... ";

  obtenerUsuarioPorId(id)
    .then(usuario => {
      resultado.textContent = `Nombre: ${usuario.name} 
      | Email: ${usuario.email}`;
    })
    .catch(error => {
      resultado.textContent = error;
    })
    .finally(() => {
      console.log("Petición finalizada");
    });
});
