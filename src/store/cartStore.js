import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      // Add item to cart
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
          });
        } else {
          set({ 
            items: [...currentItems, { ...item, quantity: item.quantity || 1 }] 
          });
        }
      },

      // Remove item from cart
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      // Update item quantity
      updateQuantity: (itemId, quantity) => {
        if (!quantity || quantity < 1) return;
        
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity: parseInt(quantity, 10) } : item
          ),
        }));
      },

      // Clear cart
      clearCart: () => set({ items: [] }),

      // Get cart total
      getTotal: () => {
        return get().items.reduce(
          (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
          0
        );
      },

      // Get total items count
      getItemsCount: () => {
        return get().items.reduce((sum, item) => sum + (item.quantity || 0), 0);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      onRehydrateStorage: () => (state) => {
        console.log('Cart hydrated:', state);
      }
    }
  )
);

export default useCartStore; 