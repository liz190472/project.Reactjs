import React from 'react';
import styles from './styles.css';

// Este componente muestra la cabecera principal con el título "Toallas Lizzy"
function Cabecera() {
  return (
    <div style={styles.cabecera}>
      <h1 style={styles.h1}>Toallas Lizzy</h1>
    </div>
  );
}

export default Cabecera;