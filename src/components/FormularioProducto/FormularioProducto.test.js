import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormularioProducto from './FormularioProducto';

describe('Componente FormularioProducto', () => {
  const mockOnGuardar = jest.fn();
  const mockOnCancelar = jest.fn();

  test('renderiza el formulario en modo creación', () => {
    render(<FormularioProducto onGuardar={mockOnGuardar} onCancelar={mockOnCancelar} />);
    
    const titulo = screen.getByText(/Crear Producto/i);
    expect(titulo).toBeInTheDocument();
  });

  test('renderiza todos los campos del formulario', () => {
    render(<FormularioProducto onGuardar={mockOnGuardar} onCancelar={mockOnCancelar} />);
    
    expect(screen.getByPlaceholderText(/Código EAN del producto/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Referencia del producto/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Peso en gramos/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tamaño del producto/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Color del producto/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Precio del producto/i)).toBeInTheDocument();
  });

  test('permite ingresar texto en los campos', () => {
    render(<FormularioProducto onGuardar={mockOnGuardar} onCancelar={mockOnCancelar} />);
    
    const inputEan = screen.getByPlaceholderText(/Código EAN del producto/i);
    fireEvent.change(inputEan, { target: { value: '123456789' } });
    
    expect(inputEan.value).toBe('123456789');
  });

  test('muestra alerta si faltan campos obligatorios', () => {
    // Mock de alert
    window.alert = jest.fn();
    
    render(<FormularioProducto onGuardar={mockOnGuardar} onCancelar={mockOnCancelar} />);
    
    const botonCrear = screen.getByRole('button', { name: /CREAR/i });
    fireEvent.click(botonCrear);
    
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining('campos obligatorios')
    );
  });

  test('ejecuta onCancelar al hacer clic en CANCELAR', () => {
    render(<FormularioProducto onGuardar={mockOnGuardar} onCancelar={mockOnCancelar} />);
    
    const botonCancelar = screen.getByText(/CANCELAR/i);
    fireEvent.click(botonCancelar);
    
    expect(mockOnCancelar).toHaveBeenCalledTimes(1);
  });
});
