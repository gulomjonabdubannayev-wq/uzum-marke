import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product } from './data';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: string;
  customerInfo: {
    name: string;
    phone: string;
    address: string;
    deliveryMethod: string;
    paymentMethod: string;
  };
}

export interface UserState {
  isLoggedIn: boolean;
  phone: string;
  name: string;
  orders: Order[];
  addresses: string[];
}

interface AppState {
  cart: CartItem[];
  favorites: number[];
  recentlyViewed: number[];
  user: UserState;
  language: 'uz' | 'ru' | 'en';
  location: string;
}

type Action =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_FAVORITES'; productId: number }
  | { type: 'REMOVE_FROM_FAVORITES'; productId: number }
  | { type: 'ADD_RECENTLY_VIEWED'; productId: number }
  | { type: 'SET_LANGUAGE'; language: 'uz' | 'ru' | 'en' }
  | { type: 'SET_LOCATION'; location: string }
  | { type: 'LOGIN'; phone: string; name: string }
  | { type: 'LOGOUT' }
  | { type: 'ADD_ORDER'; order: Order }
  | { type: 'LOAD_STATE'; state: Partial<AppState> };

const initialState: AppState = {
  cart: [],
  favorites: [],
  recentlyViewed: [],
  user: {
    isLoggedIn: false,
    phone: '',
    name: '',
    orders: [],
    addresses: [],
  },
  language: 'uz',
  location: 'Toshkent',
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(item => item.product.id === action.product.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { product: action.product, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.product.id !== action.productId) };
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return { ...state, cart: state.cart.filter(item => item.product.id !== action.productId) };
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.productId ? { ...item, quantity: action.quantity } : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'ADD_TO_FAVORITES':
      if (state.favorites.includes(action.productId)) return state;
      return { ...state, favorites: [...state.favorites, action.productId] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(id => id !== action.productId) };
    case 'ADD_RECENTLY_VIEWED': {
      const filtered = state.recentlyViewed.filter(id => id !== action.productId);
      return { ...state, recentlyViewed: [action.productId, ...filtered].slice(0, 20) };
    }
    case 'SET_LANGUAGE':
      return { ...state, language: action.language };
    case 'SET_LOCATION':
      return { ...state, location: action.location };
    case 'LOGIN':
      return { ...state, user: { ...state.user, isLoggedIn: true, phone: action.phone, name: action.name } };
    case 'LOGOUT':
      return { ...state, user: { ...initialState.user } };
    case 'ADD_ORDER':
      return { ...state, user: { ...state.user, orders: [action.order, ...state.user.orders] }, cart: [] };
    case 'LOAD_STATE':
      return { ...state, ...action.state };
    default:
      return state;
  }
}

interface StoreContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  cartTotal: number;
  cartCount: number;
  cartDiscount: number;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('savdozone_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'LOAD_STATE', state: parsed });
      }
    } catch (e) {
      console.error('Failed to load state:', e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('savdozone_state', JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state]);

  const cartTotal = state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartDiscount = state.cart.reduce((sum, item) => sum + (item.product.oldPrice - item.product.price) * item.quantity, 0);

  return (
    <StoreContext.Provider value={{ state, dispatch, cartTotal, cartCount, cartDiscount }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
}
