import React from 'react';
import styles from './styles.css';

// Este componente muestra la subcabecera con fecha y título de la sección
function Subcabecera({ titulo }) {
  // Obtengo la fecha actual en formato largo en español
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div style={styles.subcabecera}>
      <p>{fechaActual}</p>
      <p>{titulo}</p>
    </div>
  );
}

export default Subcabecera;