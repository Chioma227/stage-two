import  create  from "zustand";


interface CartItem {
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
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isAdded: false,

  addItemToCart: (newItem: CartItem) => {
    set((state) => ({
      cartItems: [...state.cartItems, newItem],
    }));
    set({ isAdded: true });

    // const { cartItems } = state;
    // localStorage.setItem(
    //     'cartItems',
    //     JSON.stringify([...state.cartItems, newItem])
    //   );
  },
  removeItemFromCart: (itemId: number) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    }));
  },
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
