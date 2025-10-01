import React, { useState } from "react";

// Estilos en línea para el proyecto
const styles = {
  // Estilos generales
  body: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    backgroundColor: "#f4f4f4",
    margin: 0,
    padding: 0,
  },

  // Estilos de cabecera
  cabecera: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    backgroundColor: "rgba(36, 104, 131, 0.9)",
    color: "white",
  },

  h1: {
    padding: "1% 5%",
    margin: 0,
  },

  // Estilos del Login
  cabeceraInicioSesion: {
    backgroundColor: "rgba(125, 125, 125, 0.5)",
    padding: "1% 40%",
    textAlign: "center",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "5% auto",
    maxWidth: "500px",
    fontSize: "16px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },

  campoTexto: {
    display: "flex",
    flexDirection: "column",
    margin: "15px 0",
  },

  label: {
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "rgba(125, 125, 125, 0.1)",
  },

  botonInicioSesion: {
    padding: "15px",
    fontSize: "16px",
    backgroundColor: "rgba(36, 104, 131, 0.9)",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  },

  botonOlvidoContrasena: {
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "rgba(125, 125, 125, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },

  // Estilos de Lista de Productos
  cabeceraListaProducto: {
    backgroundColor: "rgba(125, 125, 125, 0.5)",
    padding: "10px",
    textAlign: "center",
    fontSize: "14px",
  },

  panelFormulario: {
    display: "flex",
    flexDirection: "row",
    minHeight: "calc(100vh - 150px)",
  },

  panelLateral: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(125, 125, 125, 0.5)",
    padding: "20px",
    width: "200px",
  },

  botonPanel: {
    margin: "9px 0",
    padding: "12px 10px",
    backgroundColor: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },

  container: {
    backgroundColor: "#fff",
    padding: "30px",
    margin: "20px",
    flex: 1,
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },

  botonCrear: {
    backgroundColor: "rgba(0, 180, 0, 0.7)",
    padding: "12px 25px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
    float: "right",
    marginBottom: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    clear: "both",
  },

  thead: {
    backgroundColor: "#f0ad4e",
    color: "#333",
  },

  th: {
    padding: "12px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
  },

  botonAccion: {
    padding: "6px 15px",
    margin: "0 5px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },

  botonEditar: {
    backgroundColor: "#5bc0de",
    color: "white",
  },

  botonEliminar: {
    backgroundColor: "#d9534f",
    color: "white",
  },
};

// Componente de Inicio de Sesión
function InicioSesion({ onLogin }) {
  // Aquí defino el estado para manejar los valores del formulario
  // Utilizo el hook useState para crear variables de estado reactivas
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  // Esta función maneja el evento de submit del formulario
  // Previene el comportamiento por defecto y llama a la función onLogin
  const handleSubmit = () => {
    // Valido que los campos no estén vacíos antes de continuar
    if (usuario.trim() && password.trim()) {
      onLogin();
    } else {
      alert("Por favor complete todos los campos");
    }
  };

  // Función para manejar el evento de olvidar contraseña
  const handleOlvidoContrasena = () => {
    alert("Funcionalidad de recuperación de contraseña - En desarrollo");
  };

  return (
    <div style={styles.body}>
      {/* Cabecera principal del sistema */}
      <div style={styles.cabecera}>
        <h1 style={styles.h1}>Toallas Lizzy</h1>
      </div>

      {/* Subcabecera específica de inicio de sesión */}
      <div style={styles.cabeceraInicioSesion}>
        <h2>Inicio de Sesión</h2>
      </div>

      {/* Contenedor del formulario de inicio de sesión */}
      <div style={styles.formContainer}>
        {/* Campo de usuario con icono */}
        <div style={styles.campoTexto}>
          <label style={styles.label}>👤 Usuario</label>
          <input
            type="text"
            style={styles.input}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
          />
        </div>

        {/* Campo de contraseña con icono */}
        <div style={styles.campoTexto}>
          <label style={styles.label}>🔒 Contraseña</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>

        {/* Botón principal de inicio de sesión */}
        <button style={styles.botonInicioSesion} onClick={handleSubmit}>
          Ingresar
        </button>

        {/* Botón secundario para olvidar contraseña */}
        <button
          style={styles.botonOlvidoContrasena}
          onClick={handleOlvidoContrasena}
        >
          ¿Olvidó su contraseña?
        </button>
      </div>
    </div>
  );
}

// Componente de Lista de Productos
function ListaProducto({ onLogout }) {
  // Aquí defino el estado inicial de los productos con datos de ejemplo
  // Utilizo useState para mantener un array de productos que puedo modificar
  const [productos, setProductos] = useState([
    {
      id: 1,
      imagen: "🛁",
      ean: "7703347542028",
      referencia: "ToallaHoteleria",
      valorUnitario: 75000,
    },
    {
      id: 2,
      imagen: "🧼",
      ean: "7703347025547",
      referencia: "LimpionDeCocina",
      valorUnitario: 25000,
    },
    {
      id: 3,
      imagen: "👶",
      ean: "7703347320458",
      referencia: "toallaInfantil",
      valorUnitario: 50000,
    },
    {
      id: 4,
      imagen: "🏨",
      ean: "7703347965120",
      referencia: "TapeteLogoHotelero",
      valorUnitario: 35000,
    },
  ]);

  // Función para crear un nuevo producto
  // En una aplicación real, esto abriría un modal o formulario
  const handleCrear = () => {
    alert("Función de crear producto - Abre formulario de creación");
  };

  // Función para editar un producto existente
  // Recibo el id del producto que quiero editar
  const handleEditar = (id) => {
    alert(`Editar producto con ID: ${id}`);
  };

  // Función para eliminar un producto
  // Filtro el array de productos removiendo el que tiene el id especificado
  const handleEliminar = (id) => {
    if (window.confirm("¿Está seguro de eliminar este producto?")) {
      setProductos(productos.filter((producto) => producto.id !== id));
    }
  };

  // Obtengo la fecha actual para mostrar en la cabecera
  const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={styles.body}>
      {/* Cabecera principal */}
      <div style={styles.cabecera}>
        <h1 style={styles.h1}>Toallas Lizzy</h1>
      </div>

      {/* Subcabecera con fecha y título de la sección */}
      <div style={styles.cabeceraListaProducto}>
        <p>{fechaActual}</p>
        <p>Lista Producto</p>
      </div>

      {/* Panel principal con layout de dos columnas */}
      <div style={styles.panelFormulario}>
        {/* Panel lateral izquierdo con botones de navegación */}
        <div style={styles.panelLateral}>
          <button style={styles.botonPanel}>Usuario</button>
          <button style={styles.botonPanel}>Clientes</button>
          <button style={styles.botonPanel}>Producto</button>
          <button style={styles.botonPanel}>Inventario</button>
          <button style={styles.botonPanel}>Ventas</button>
          <button style={styles.botonPanel}>Pedidos</button>
          <button style={styles.botonPanel}>Compras</button>
          <button style={styles.botonPanel}>Facturación</button>
          <button style={styles.botonPanel}>Proveedores</button>
          <button style={styles.botonPanel}>Reportes</button>
        </div>

        {/* Contenedor principal con la tabla de productos */}
        <div style={styles.container}>
          <h2>Lista Producto</h2>

          {/* Botón para crear nuevo producto */}
          <button style={styles.botonCrear} onClick={handleCrear}>
            CREAR
          </button>

          {/* Tabla responsiva con todos los productos */}
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>Imagen</th>
                <th style={styles.th}>Ean Producto</th>
                <th style={styles.th}>Referencia</th>
                <th style={styles.th}>Valor Unitario</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeo el array de productos para crear una fila por cada uno */}
              {productos.map((producto, index) => (
                <tr
                  key={producto.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                  }}
                >
                  <td style={styles.td}>
                    <span style={{ fontSize: "40px" }}>{producto.imagen}</span>
                  </td>
                  <td style={styles.td}>{producto.ean}</td>
                  <td style={styles.td}>{producto.referencia}</td>
                  <td style={styles.td}>
                    $ {producto.valorUnitario.toLocaleString("es-CO")}
                  </td>
                  <td style={styles.td}>
                    {/* Botones de acción para cada producto */}
                    <button
                      style={{ ...styles.botonAccion, ...styles.botonEditar }}
                      onClick={() => handleEditar(producto.id)}
                    >
                      Editar
                    </button>
                    <button
                      style={{ ...styles.botonAccion, ...styles.botonEliminar }}
                      onClick={() => handleEliminar(producto.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Componente principal de la aplicación
function App() {
  // Estado para controlar si el usuario está autenticado o no
  // Esto me permite alternar entre la vista de login y la vista de productos
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función que se ejecuta cuando el usuario inicia sesión exitosamente
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Función que se ejecuta cuando el usuario cierra sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Renderizado condicional: muestro un componente u otro según el estado de autenticación
  return (
    <div>
      {isLoggedIn ? (
        <ListaProducto onLogout={handleLogout} />
      ) : (
        <InicioSesion onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
