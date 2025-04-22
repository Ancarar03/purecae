import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  
  // Acciones
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

// Formato de precio para España
const formatPrice = (price: number): string => {
  return `${price.toFixed(2).replace('.', ',')} €`;
};

// Calcular totales 
const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  return { totalItems, totalPrice };
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          // Actualizar cantidad si ya existe
          const updatedItems = currentItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
          
          const { totalItems, totalPrice } = calculateTotals(updatedItems);
          
          set({
            items: updatedItems,
            totalItems,
            totalPrice,
          });
        } else {
          // Añadir nuevo item
          const updatedItems = [...currentItems, { ...item, quantity: 1 }];
          const { totalItems, totalPrice } = calculateTotals(updatedItems);
          
          set({
            items: updatedItems,
            totalItems,
            totalPrice,
          });
        }
      },

      removeItem: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id);
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        
        set({
          items: updatedItems,
          totalItems,
          totalPrice,
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          // Si la cantidad es 0 o menos, eliminar el item
          get().removeItem(id);
          return;
        }

        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        
        set({
          items: updatedItems,
          totalItems,
          totalPrice,
        });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: 'purecae-cart', // nombre para localStorage
    }
  )
); 