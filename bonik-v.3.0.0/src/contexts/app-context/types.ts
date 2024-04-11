export interface ContextProps {
  state: InitialState;
  dispatch: (args: ActionType) => void;
}

export interface InitialState {
  cart: CartItem[];
  isHeaderFixed: boolean;
}

export interface CartItem {
  qty: number;
  name: string;
  slug?: string;
  price: number;
  imgUrl?: string;
  id: string | number;
}

interface CartActionType {
  type: "CHANGE_CART_AMOUNT";
  payload: CartItem;
}

interface LayoutActionType {
  type: "TOGGLE_HEADER";
  payload: boolean;
}

export type ActionType = CartActionType | LayoutActionType;
