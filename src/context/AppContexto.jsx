
import {createContext, useState} from 'react';


export const CartContext = createContext()

export const CartContextProvider = ( {children} ) =>{
    const [cart, setCart] = useState([])

    const contexto = "otro mensaje"


    const AddToCart = (producto) => {
        setCart(prevCart => {
          const itemExistente = prevCart.find(item => item.id === producto.id);
          
          if (itemExistente) {
            // Si el producto ya existe, actualiza la cantidad
            return prevCart.map(item =>
              item.id === producto.id
                ? { ...item, cantidad: item.cantidad + producto.cantidad }
                : item
            );
          } else {
            // Si es un producto nuevo, agrégalo al carrito
            return [...prevCart, producto];
          }
        });
      };

    const vaciarCarrito = () =>{
        setCart([])
    }

    const eliminarProducto = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    const modificarCantidadItem = (itemId, nuevaCantidad) => {
      setCart((prevCart) => {
          // Verificamos si el ítem con el itemId existe en el carrito
          const itemExiste = prevCart.find((item) => item.id === itemId);
  
          if (itemExiste) {
              // Si el ítem existe, modificamos la cantidad
              return prevCart.map((item) =>
                  item.id === itemId ? { ...item, cantidad: nuevaCantidad } : item
              );
          } else {
              // Si el ítem no existe, retornamos el carrito sin cambios
              console.log('El ítem no existe en el carrito');
              return prevCart;
          }
      });
  };


    const mostrarCantidad = () =>{
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
    }
    
    return (
        <CartContext.Provider 
        value={{contexto,
                cart,
                setCart,
                modificarCantidadItem,
                AddToCart, 
                vaciarCarrito, 
                eliminarProducto, 
                mostrarCantidad }}>
            {children}
        </CartContext.Provider>
    )
}