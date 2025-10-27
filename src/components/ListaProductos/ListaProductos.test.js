import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListaProductos from './ListaProductos';

describe('Componente ListaProductos', () => {
  const productosEjemplo = [
    {
      ean: '7503347654238',
      referencia: 'ToallaDecorativa',
      valorUnitario: '75.000',
      imagen: null
    },
    {
      ean: '7503347655547',
      referencia: 'LimpioDeCocina',
      valorUnitario: '25.000',
      imagen: null
    }
  ];

  test('renderiza el título "Lista Producto"', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    expect(screen.getByText('Lista Producto')).toBeInTheDocument();
  });

  test('renderiza la tabla correctamente', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    const tabla = screen.getByRole('table');
    expect(tabla).toBeInTheDocument();
  });

  test('muestra los encabezados de la tabla', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    expect(screen.getByText('Imagen')).toBeInTheDocument();
    expect(screen.getByText('Ean Producto')).toBeInTheDocument();
    expect(screen.getByText('Referencia')).toBeInTheDocument();
    expect(screen.getByText('Valor Unitario')).toBeInTheDocument();
  });

  test('renderiza los productos recibidos como props', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    expect(screen.getByText('7503347654238')).toBeInTheDocument();
    expect(screen.getByText('ToallaDecorativa')).toBeInTheDocument();
    expect(screen.getByText('$ 75.000')).toBeInTheDocument();
  });

  test('muestra el segundo producto correctamente', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    expect(screen.getByText('7503347655547')).toBeInTheDocument();
    expect(screen.getByText('LimpioDeCocina')).toBeInTheDocument();
    expect(screen.getByText('$ 25.000')).toBeInTheDocument();
  });

  test('muestra productos de ejemplo cuando no recibe props', () => {
    render(<ListaProductos />);
    
    // Verifica que muestre los productos de ejemplo por defecto
    expect(screen.getByText('7503347654238')).toBeInTheDocument();
    expect(screen.getByText('7503347655547')).toBeInTheDocument();
    expect(screen.getByText('7503347638546')).toBeInTheDocument();
    expect(screen.getByText('7503347965120')).toBeInTheDocument();
  });

  test('muestra mensaje cuando el array de productos está vacío', () => {
    render(<ListaProductos productos={[]} />);
    
    expect(screen.getByText('No hay productos disponibles')).toBeInTheDocument();
  });

  test('renderiza el número correcto de filas cuando recibe 2 productos', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    const filas = screen.getAllByRole('row');
    // 1 fila de encabezado + 2 filas de productos = 3 filas totales
    expect(filas).toHaveLength(3);
  });

  test('muestra icono de producto cuando no hay imagen', () => {
    render(<ListaProductos productos={productosEjemplo} />);
    
    const iconos = screen.getAllByText('📦');
    expect(iconos.length).toBeGreaterThan(0);
  });
});
