import React from 'react';
import styles from './styles.css';

// Este componente muestra el menú lateral con todas las opciones de navegación
function PanelLateral() {
  return (
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
  );
}

export default PanelLateral;