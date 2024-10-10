// Función para generar el menú dinámico
function generarMenu(menuData) {
    const menu = document.getElementById('dynamic-menu');
  
    menuData.menu.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.enlace;
      a.textContent = item.nombre;
  
      li.appendChild(a);
  
      if (item.submenu.length > 0) {
        const submenu = document.createElement('ul');
        submenu.classList.add('submenu');
  
        item.submenu.forEach(subitem => {
          const subLi = document.createElement('li');
          const subA = document.createElement('a');
          subA.href = subitem.enlace;
          subA.textContent = subitem.nombre;
          subLi.appendChild(subA);
          submenu.appendChild(subLi);
        });
  
        li.appendChild(submenu);
      }
  
      menu.appendChild(li);
    });
  }
  
  // Función para cargar el menú desde el archivo JSON
  function cargarMenu() {
    fetch('https://luisrsoto.github.io/MenuDinamicoJSON/menu.json') // Asegúrate de usar la ruta correcta a tu archivo JSON en el servidor
      .then(response => response.json())
      .then(data => {
        generarMenu(data);
      })
      .catch(error => {
        console.error('Error al cargar el menú:', error);
      });
  }
  
  // Llamar a la función para cargar el menú
  cargarMenu();  
