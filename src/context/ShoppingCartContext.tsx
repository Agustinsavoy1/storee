import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { ShoppingCart } from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type IShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as IShoppingCartContext);

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const getItemQuantity = useCallback(
    (id: number) => cartItems.find(item => item.id === id)?.quantity || 0,
    [cartItems]
  );

  // ? Comento esto porque habria que probar si la de abajo funciona
  // [FUNCION ORIGINAL]

  // function increaseCartQuantity(id: number) {
  //   setCartItems((currItems: CartItem[]) => {
  //     if (currItems.find(item => item.id === id) == null) {
  //       return [...currItems, { id, quantity: 1 }];
  //     } else {
  //       return currItems.map(item => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }

  const increaseCartQuantity = useCallback(
    (id: number) => {
      setCartItems((currItems: CartItem[]) => {
        const existingItem = currItems.find(item => item.id === id);
        if (existingItem == null) {
          return [...currItems, { id, quantity: 1 }];
        }
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      });
    },
    [setCartItems]
  );

  // ? Comento esto porque habria que probar si la de abajo funciona
  // [FUNCION ORIGINAL]

  // function decreaseCartQuantity(id: number) {
  //   setCartItems((currItems: CartItem[]) => {
  //     if (currItems.find(item => item.id === id)?.quantity === 1) {
  //       return currItems.filter(item => item.id !== id);
  //     } else {
  //       return currItems.map(item => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }

  const decreaseCartQuantity = useCallback(
    (id: number) => {
      setCartItems((currItems: CartItem[]) => {
        const existingItem = currItems.find(item => item.id === id);
        if (existingItem?.quantity === 1) {
          return currItems.filter(item => item.id !== id);
        }
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (id: number) => setCartItems((currItems: CartItem[]) => currItems.filter(item => item.id !== id)),
    [setCartItems]
  );

  const contextValue = useMemo(
    () => ({
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      openCart,
      closeCart,
      cartItems,
      cartQuantity,
    }),
    [
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      openCart,
      closeCart,
      cartItems,
      cartQuantity,
    ]
  );

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
