const API_URL = 'http://localhost:8001/api';

const productoService = {
  getProductos: async () => {
    try {
      const response = await fetch(`${API_URL}/productos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener productos');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  crearProducto: async (formData) => {
    try {
      // NO incluir Content-Type cuando se envía FormData
      // El navegador lo configura automáticamente
      const response = await fetch(`${API_URL}/productos`, {
        method: 'POST',
        body: formData, // FormData se envía directamente
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  actualizarProducto: async (id, formData) => {
    try {
      // Agregar _method para simular PUT (Laravel lo requiere con FormData)
      formData.append('_method', 'PUT');
      
      const response = await fetch(`${API_URL}/productos/${id}`, {
        method: 'POST', // Usamos POST con _method=PUT
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  eliminarProducto: async (id) => {
    try {
      const response = await fetch(`${API_URL}/productos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar producto');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
};

export default productoService;