import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cabecera from './Cabecera';

describe('Componente Cabecera', () => {
  test('renderiza el título "Toallas Lizzy" correctamente', () => {
    render(<Cabecera />);
    const tituloElement = screen.getByText(/Toallas Lizzy/i);
    expect(tituloElement).toBeInTheDocument();
  });

  test('renderiza un elemento h1', () => {
    render(<Cabecera />);
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
  });

  test('el h1 contiene el texto correcto', () => {
    render(<Cabecera />);
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toHaveTextContent('Toallas Lizzy');
  });
});
