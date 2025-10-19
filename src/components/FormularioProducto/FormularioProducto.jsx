import React, { useState } from 'react';

function FormularioProducto({ producto, onGuardar, onCancelar }) {
  const [formData, setFormData] = useState({
    ean_producto: producto?.ean_producto || '',
    Referencia: producto?.Referencia || '',
    Gramos: producto?.Gramos || '',
    Tamano: producto?.Tamano || '',
    Color: producto?.Color || '',
    PrecioUnitario: producto?.PrecioUnitario || ''
  });

  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Imagen seleccionada:', file.name, file.type, file.size);
      setImagen(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.ean_producto || !formData.Referencia || !formData.PrecioUnitario) {
      alert('Error: Por favor complete los campos obligatorios (EAN, Referencia y Valor Unitario)');
      return;
    }
    
    // Crear FormData para enviar
    const dataToSend = new FormData();
    dataToSend.append('ean_producto', formData.ean_producto);
    dataToSend.append('Referencia', formData.Referencia);
    dataToSend.append('Gramos', formData.Gramos || '');
    dataToSend.append('Tamano', formData.Tamano || '');
    dataToSend.append('Color', formData.Color || '');
    dataToSend.append('PrecioUnitario', formData.PrecioUnitario);
    
    // Agregar imagen si existe
    if (imagen) {
      console.log('Agregando imagen al FormData:', imagen.name);
      dataToSend.append('imagen', imagen);
    }
    
    console.log('Enviando FormData con producto y posible imagen');
    onGuardar(dataToSend);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '40px', maxWidth: '1000px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '28px', fontWeight: 'bold' }}>
          {producto ? 'Editar Producto' : 'Crear Producto'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
              Datos del Producto
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
            <div>
              <label htmlFor="ean_producto" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                EAN: *
              </label>
              <input
                type="text"
                id="ean_producto"
                name="ean_producto"
                value={formData.ean_producto}
                onChange={handleChange}
                placeholder="Código EAN"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(125, 125, 125, 0.1)'
                }}
              />
            </div>

            <div>
              <label htmlFor="Referencia" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Referencia: *
              </label>
              <input
                type="text"
                id="Referencia"
                name="Referencia"
                value={formData.Referencia}
                onChange={handleChange}
                placeholder="Referencia del producto"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(125, 125, 125, 0.1)'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
            <div>
              <label htmlFor="Gramos" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Gramos:
              </label>
              <input
                type="number"
                id="Gramos"
                name="Gramos"
                value={formData.Gramos}
                onChange={handleChange}
                placeholder="Peso en gramos"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(125, 125, 125, 0.1)'
                }}
              />
            </div>

            <div>
              <label htmlFor="Tamano" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Tamaño:
              </label>
              <input
                type="text"
                id="Tamano"
                name="Tamano"
                value={formData.Tamano}
                onChange={handleChange}
                placeholder="Tamaño del producto"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(125, 125, 125, 0.1)'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
            <div>
              <label htmlFor="Color" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Color:
              </label>
              <input
                type="text"
                id="Color"
                name="Color"
                value={formData.Color}
                onChange={handleChange}
                placeholder="Color del producto"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(125, 125, 125, 0.1)'
                }}
              />
            </div>

            <div>
              <label htmlFor="PrecioUnitario" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Valor Unitario: *
              </label>
              <input
                type="number"
                id="PrecioUnitario"
                name="PrecioUnitario"
                value={formData.PrecioUnitario}
                onChange={handleChange}
                placeholder="Precio del producto"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(125, 125, 125, 0.1)'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '30px', padding: '20px', border: '2px dashed #007bff', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <label htmlFor="imagen" style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold', fontSize: '16px' }}>
              📷 Imagen del Producto (Opcional):
            </label>
            <input
              type="file"
              id="imagen"
              name="imagen"
              onChange={handleImagenChange}
              accept="image/*"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '2px solid #007bff',
                borderRadius: '4px',
                cursor: 'pointer',
                boxSizing: 'border-box'
              }}
            />
            {imagen && (
              <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '4px', borderLeft: '4px solid #4caf50' }}>
                <p style={{ margin: '0', fontSize: '14px', color: '#2e7d32', fontWeight: 'bold' }}>
                  ✓ Archivo seleccionado: {imagen.name}
                </p>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
            <button
              type="submit"
              style={{
                backgroundColor: 'rgba(0, 180, 0, 0.7)',
                color: 'white',
                padding: '15px 50px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                minWidth: '150px'
              }}
            >
              {producto ? 'EDITAR' : 'CREAR'}
            </button>
            <button
              type="button"
              onClick={onCancelar}
              style={{
                backgroundColor: '#d9534f',
                color: 'white',
                padding: '15px 50px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                minWidth: '150px'
              }}
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioProducto;