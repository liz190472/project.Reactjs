import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PanelLateral from './PanelLateral';

describe('Componente PanelLateral', () => {
  test('renderiza el componente correctamente', () => {
    render(<PanelLateral />);
    
    // Verifico que el contenedor principal existe
    const panel = screen.getByRole('button', { name: /Usuario/i }).closest('div');
    expect(panel).toBeInTheDocument();
  });

  test('renderiza todos los 10 botones del menú', () => {
    render(<PanelLateral />);
    
    const botones = screen.getAllByRole('button');
    expect(botones).toHaveLength(10);
  });

  test('renderiza el botón Usuario', () => {
    render(<PanelLateral />);
    
    const botonUsuario = screen.getByRole('button', { name: /Usuario/i });
    expect(botonUsuario).toBeInTheDocument();
  });

  test('renderiza el botón Clientes', () => {
    render(<PanelLateral />);
    
    const botonClientes = screen.getByRole('button', { name: /Clientes/i });
    expect(botonClientes).toBeInTheDocument();
  });

  test('renderiza el botón Producto', () => {
    render(<PanelLateral />);
    
    const botonProducto = screen.getByRole('button', { name: /Producto/i });
    expect(botonProducto).toBeInTheDocument();
  });

  test('renderiza el botón Inventario', () => {
    render(<PanelLateral />);
    
    const botonInventario = screen.getByRole('button', { name: /Inventario/i });
    expect(botonInventario).toBeInTheDocument();
  });

  test('renderiza el botón Ventas', () => {
    render(<PanelLateral />);
    
    const botonVentas = screen.getByRole('button', { name: /Ventas/i });
    expect(botonVentas).toBeInTheDocument();
  });

  test('renderiza el botón Pedidos', () => {
    render(<PanelLateral />);
    
    const botonPedidos = screen.getByRole('button', { name: /Pedidos/i });
    expect(botonPedidos).toBeInTheDocument();
  });

  test('renderiza el botón Compras', () => {
    render(<PanelLateral />);
    
    const botonCompras = screen.getByRole('button', { name: /Compras/i });
    expect(botonCompras).toBeInTheDocument();
  });

  test('renderiza el botón Facturación', () => {
    render(<PanelLateral />);
    
    const botonFacturacion = screen.getByRole('button', { name: /Facturación/i });
    expect(botonFacturacion).toBeInTheDocument();
  });

  test('renderiza el botón Proveedores', () => {
    render(<PanelLateral />);
    
    const botonProveedores = screen.getByRole('button', { name: /Proveedores/i });
    expect(botonProveedores).toBeInTheDocument();
  });

  test('renderiza el botón Reportes', () => {
    render(<PanelLateral />);
    
    const botonReportes = screen.getByRole('button', { name: /Reportes/i });
    expect(botonReportes).toBeInTheDocument();
  });
});
