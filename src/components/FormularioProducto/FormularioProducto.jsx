import React, { useState } from 'react';
import Cabecera from '../Cabecera/Cabecera';
import PanelLateral from '../PanelLateral/PanelLateral';
import Subcabecera from '../Subcabecera/Subcabecera';
import './styles.css';

// Este componente maneja el formulario tanto para crear como para editar productos
function FormularioProducto({ producto, onGuardar, onCancelar }) {
  // Inicializo el estado del formulario
  // Si recibo un producto (modo edición), uso sus datos, si no uso valores vacíos (modo creación)
  const [formData, setFormData] = useState({
    ean: producto?.ean || '',
    referencia: producto?.referencia || '',
    gramos: producto?.gramos || '',
    tamano: producto?.tamano || '',
    color: producto?.color || '',
    valorUnitario: producto?.valorUnitario || ''
  });

  // Esta función maneja los cambios en cualquier campo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Esta función valida y envía el formulario
  const handleSubmit = () => {
    // Valido que los campos obligatorios estén llenos
    if (!formData.ean || !formData.referencia || !formData.valorUnitario) {
      alert('Error: Por favor complete los campos obligatorios (EAN, Referencia y Valor Unitario)');
      return;
    }
    // Ejecuto la función de guardar que me pasaron como prop
    onGuardar(formData);
  };

  return (
    <div className="body">
      <Cabecera />
      <Subcabecera titulo={producto ? 'Editar Producto' : 'Crear Producto'} />
      
      <div className="panelFormulario">
        <PanelLateral />
        
        <div className="container">
          <div className="form">
            {/* Primera fila: EAN y Referencia */}
            <div className="filaFormulario">
              <div className="campo">
                <label className="label">Ean: *</label>
                <input
                  type="text"
                  name="ean"
                  className="input"
                  value={formData.ean}
                  onChange={handleChange}
                  placeholder="Código EAN del producto"
                />
              </div>
              
              <div className="campo">
                <label className="label">Referencia: *</label>
                <input
                  type="text"
                  name="referencia"
                  className="input"
                  value={formData.referencia}
                  onChange={handleChange}
                  placeholder="Referencia del producto"
                />
              </div>
            </div>
            
            {/* Segunda fila: Gramos, Tamaño y Color */}
            <div className="filaFormulario">
              <div className="campo">
                <label className="label">Gramos:</label>
                <input
                  type="text"
                  name="gramos"
                  className="input"
                  value={formData.gramos}
                  onChange={handleChange}
                  placeholder="Peso en gramos"
                />
              </div>
              
              <div className="campo">
                <label className="label">Tamaño:</label>
                <input
                  type="text"
                  name="tamano"
                  className="input"
                  value={formData.tamano}
                  onChange={handleChange}
                  placeholder="Tamaño del producto"
                />
              </div>
              
              <div className="campo">
                <label className="label">Color:</label>
                <input
                  type="text"
                  name="color"
                  className="input"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Color del producto"
                />
              </div>
            </div>
            
            {/* Tercera fila: Valor Unitario */}
            <div className="filaFormulario">
              <div className="campo">
                <label className="label">Valor Unitario: *</label>
                <input
                  type="number"
                  name="valorUnitario"
                  className="input"
                  value={formData.valorUnitario}
                  onChange={handleChange}
                  placeholder="Precio del producto"
                />
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="botones">
              <button className="botonCrear" onClick={handleSubmit}>
                {producto ? 'EDITAR' : 'CREAR'}
              </button>
              <button className="botonCancelar" onClick={onCancelar}>
                CANCELAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioProducto;
