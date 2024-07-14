import create from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  photos: any;
  id: number;
  image: string;
  name: string;
  rating: string;
  prevPrice: string;
  category?: string;
  slashPrice: string;
  badgeValue: string;
  description: string;
  available_quantity: number | string;
}

interface CartState {
  isAdded: boolean;
  cartItems: CartItem[];
  clearCart: () => void;
  setIsAdded: (isAdded: boolean) => void;
  addItemToCart: (newItem: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      isAdded: false,

      addItemToCart: (newItem: CartItem) => {
        set((state) => ({
          cartItems: [...state.cartItems, newItem],
          isAdded: true,
        }));
      },
      setIsAdded: (isAdded: boolean) => set({ isAdded: isAdded }),
      removeItemFromCart: (itemId: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        }));
      },

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", 
    }
  )
);

export default useCartStore;
