import React, { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera";
import PanelLateral from "./components/PanelLateral/PanelLateral";
import Subcabecera from "./components/Subcabecera/Subcabecera";
import FormularioProducto from "./components/FormularioProducto/FormularioProducto";

// Estilos globales que voy a reutilizar en toda la aplicación
const styles = {
  body: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    backgroundColor: "#f4f4f4",
    margin: 0,
    padding: 0,
  },

  // Estilos que uso para el formulario de login
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
    flexDirection: "row",
    alignItems: "center",
    margin: "15px 0",
    gap: "10px",
  },

  icono: {
    fontSize: "24px",
    minWidth: "30px",
  },

  inputWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#333",
    fontSize: "14px",
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

  // Estilos que aplico a la sección de productos
  panelFormulario: {
    display: "flex",
    flexDirection: "row",
    minHeight: "calc(100vh - 150px)",
  },

  container: {
    backgroundColor: "#fff",
    padding: "30px",
    margin: "20px",
    flex: 1,
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },

  botonCrearLista: {
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

  alert: {
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "4px",
    fontSize: "14px",
  },

  alertSuccess: {
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
  },

  alertError: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
  },

  imagenProducto: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "4px",
  },
};

// Este componente maneja el inicio de sesión del usuario
function InicioSesion({ onLogin }) {
  // Aquí guardo los valores que el usuario escribe en el formulario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({
    mostrar: false,
    mensaje: "",
    tipo: "",
  });

  // Esta función valida que los campos no estén vacíos antes de permitir el login
  const handleSubmit = () => {
    // Primero verifico que ambos campos tengan contenido (sin espacios en blanco)
    if (!usuario.trim() || !password.trim()) {
      // Si falta algún campo, muestro un mensaje de error
      setAlerta({
        mostrar: true,
        mensaje: "Error: Por favor complete todos los campos",
        tipo: "error",
      });
      // Oculto el mensaje después de 3 segundos
      setTimeout(
        () => setAlerta({ mostrar: false, mensaje: "", tipo: "" }),
        3000
      );
      return; // Detengo la ejecución aquí, NO dejo pasar al usuario
    }

    // Si ambos campos tienen datos, muestro mensaje de éxito
    setAlerta({
      mostrar: true,
      mensaje: "Inicio de sesión exitoso. Bienvenido/a!",
      tipo: "success",
    });

    // Espero 1.5 segundos para que el usuario vea el mensaje y luego ejecuto el login
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  // Esta función maneja el botón de "Olvidó su contraseña"
  const handleOlvidoContrasena = () => {
    setAlerta({
      mostrar: true,
      mensaje: "Funcionalidad de recuperación de contraseña - En desarrollo",
      tipo: "success",
    });
    setTimeout(
      () => setAlerta({ mostrar: false, mensaje: "", tipo: "" }),
      3000
    );
  };

  return (
    <div style={styles.body}>
      <Cabecera />
      <Subcabecera titulo="Inicio de Sesión" />

      <div style={styles.formContainer}>
        {/* Solo muestro la alerta si 'mostrar' es true */}
        {alerta.mostrar && (
          <div
            style={{
              ...styles.alert,
              ...(alerta.tipo === "success"
                ? styles.alertSuccess
                : styles.alertError),
            }}
          >
            {alerta.mensaje}
          </div>
        )}

        <div style={styles.campoTexto}>
          <div style={styles.icono}>👤</div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Usuario</label>
            <input
              type="text"
              style={styles.input}
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingrese su usuario"
            />
          </div>
        </div>

        <div style={styles.campoTexto}>
          <div style={styles.icono}>🔒</div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </div>
        </div>

        <button style={styles.botonInicioSesion} onClick={handleSubmit}>
          Ingresar
        </button>

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

// Este componente muestra la lista de productos y maneja el CRUD completo
function ListaProducto() {
  // Aquí inicio mi lista de productos con datos de ejemplo y las rutas de las imágenes
  const [productos, setProductos] = useState([
    {
      id: 1,
      imagen: "./imagenes/toallaHoteleraCenefa.webp",
      ean: "7703347542028",
      referencia: "ToallaHotelera",
      gramos: "500",
      tamano: "70x140",
      color: "Blanco",
      valorUnitario: 75000,
    },
    {
      id: 2,
      imagen: "./imagenes/limpionesDeCocina.jpeg",
      ean: "7703347025547",
      referencia: "limpionDeCocina",
      gramos: "200",
      tamano: "40x60",
      color: "Blanco",
      valorUnitario: 25000,
    },
    {
      id: 3,
      imagen: "./imagenes/toallaInfantil.jpeg",
      ean: "7703347320458",
      referencia: "toallaInfantil",
      gramos: "510",
      tamano: "60x120",
      color: "Surtido",
      valorUnitario: 50000,
    },
    {
      id: 4,
      imagen: "./imagenes/tapeteHotelero.jpg",
      ean: "7703347965120",
      referencia: "tapeteHotelero",
      gramos: "800",
      tamano: "50x80",
      color: "Blanco",
      valorUnitario: 35000,
    },
  ]);

  // Controlo qué vista mostrar: 'lista', 'crear' o 'editar'
  const [vistaActual, setVistaActual] = useState("lista");
  // Guardo el producto que estoy editando actualmente
  const [productoEditar, setProductoEditar] = useState(null);

  // Esta función cambia la vista al formulario de creación
  const handleCrear = () => {
    setVistaActual("crear");
    setProductoEditar(null);
  };

  // Esta función carga los datos del producto seleccionado y abre el formulario de edición
  const handleEditar = (id) => {
    const producto = productos.find((p) => p.id === id);
    setProductoEditar(producto);
    setVistaActual("editar");
  };

  // Esta función elimina un producto después de confirmar con el usuario
  const handleEliminar = (id) => {
    if (window.confirm("¿Está seguro de eliminar este producto?")) {
      setProductos(productos.filter((producto) => producto.id !== id));
      alert("Producto eliminado exitosamente");
    }
  };

  // Esta función recibe los datos del formulario y crea o actualiza el producto
  const handleGuardar = (formData) => {
    if (vistaActual === "crear") {
      // Si estoy creando, agrego un nuevo producto a la lista
      const nuevoProducto = {
        ...formData,
        id: productos.length + 1,
        imagen: "./imagenes/candado.png", // Imagen por defecto para productos nuevos
        valorUnitario: parseFloat(formData.valorUnitario),
      };
      setProductos([...productos, nuevoProducto]);
      alert("Producto creado exitosamente");
    } else {
      // Si estoy editando, actualizo el producto existente
      setProductos(
        productos.map((p) =>
          p.id === productoEditar.id
            ? {
                ...p,
                ...formData,
                valorUnitario: parseFloat(formData.valorUnitario),
              }
            : p
        )
      );
      alert("Producto actualizado exitosamente");
    }
    // Después de guardar, vuelvo a la vista de lista
    setVistaActual("lista");
    setProductoEditar(null);
  };

  // Esta función cancela la creación o edición y vuelve a la lista
  const handleCancelar = () => {
    setVistaActual("lista");
    setProductoEditar(null);
  };

  // Si estoy en modo crear o editar, muestro el componente FormularioProducto
  if (vistaActual === "crear" || vistaActual === "editar") {
    return (
      <FormularioProducto
        producto={productoEditar}
        onGuardar={handleGuardar}
        onCancelar={handleCancelar}
      />
    );
  }

  // Si no, muestro la lista de productos
  return (
    <div style={styles.body}>
      <Cabecera />
      <Subcabecera titulo="Lista Producto" />

      <div style={styles.panelFormulario}>
        <PanelLateral />

        <div style={styles.container}>
          <h2>Lista de productos</h2>

          <button style={styles.botonCrearLista} onClick={handleCrear}>
            CREAR
          </button>

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
              {productos.map((producto, index) => (
                <tr
                  key={producto.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                  }}
                >
                  <td style={styles.td}>
                    {/* Aquí muestro la imagen real del producto */}
                    <img
                      src={producto.imagen}
                      alt={producto.referencia}
                      style={styles.imagenProducto}
                      onError={(e) => {
                        // Si la imagen no carga, muestro una imagen por defecto
                        e.target.src = "./imagenes/logo192.png";
                      }}
                    />
                  </td>
                  <td style={styles.td}>{producto.ean}</td>
                  <td style={styles.td}>{producto.referencia}</td>
                  <td style={styles.td}>
                    $ {producto.valorUnitario.toLocaleString("es-CO")}
                  </td>
                  <td style={styles.td}>
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

// Este es el componente principal que controla si muestro el login o la lista
function App() {
  // Controlo si el usuario está autenticado o no
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Esta función se ejecuta cuando el usuario hace login exitosamente
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Si el usuario está logueado, muestro la lista, si no, muestro el login */}
      {isLoggedIn ? <ListaProducto /> : <InicioSesion onLogin={handleLogin} />}
    </div>
  );
}

export default App;
