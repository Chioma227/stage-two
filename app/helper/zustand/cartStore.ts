import  create  from "zustand";


interface CartItem {
  available_quantity: number | string;
  photos: any;
  id: number;
  image: string;
  name: string;
  rating: string;
  badgeValue: string;
  prevPrice: string;
  category?: string;
  slashPrice: string;
  description: string;
}

interface CartState {
  cartItems: CartItem[];
  addItemToCart: (newItem: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  clearCart: () => void;
  isAdded: boolean;
  setIsAdded: (isAdded: boolean) => void;
}

const useCartStore = create<CartState>((set) => ({
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
}));



export default useCartStore;
