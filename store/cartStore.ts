import { TProduct } from "@/types/type";
import { create } from "zustand";

interface IItem {
  product: TProduct;
  quantity: number;
}

interface ICartStore {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  increment: () => void;
  decrement: () => void;
  items: IItem[];
  addItem: (item: TProduct, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<ICartStore>((set) => ({
  isCartOpen: false,
  setIsCartOpen: (value: boolean) => set({ isCartOpen: value }),
  quantity: 1,
  setQuantity: (value: number) => set({ quantity: value }),
  increment: () =>
    set((state) => ({
      quantity: Math.min(10, state.quantity + 1),
    })),
  decrement: () =>
    set((state) => ({
      quantity: Math.max(1, state.quantity - 1),
    })),
  items: [],
  addItem: (item: TProduct, quantity: number) =>
    set((state) => ({
      items: state.items.some((i) => i.product.slug === item.slug)
        ? state.items.map((i) =>
            i.product.slug === item.slug
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          )
        : [...state.items, { product: item, quantity }],
    })),
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
