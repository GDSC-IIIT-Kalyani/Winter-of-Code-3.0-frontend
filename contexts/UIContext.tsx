import { createContext, useReducer, Reducer, ReactNode } from 'react';

type StoreStateType = {
  openDrawer: boolean;
};

type StoreActionsType = {
  type: string;
  payload: StoreStateType;
};

type Props = {
  children: ReactNode;
};

const initialState: StoreStateType = {
  openDrawer: false,
};

export const UIContext = createContext<{
  state: StoreStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const reducer: Reducer<StoreStateType, StoreActionsType> = (
  state: StoreStateType,
  action: StoreActionsType
) => {
  switch (action.type) {
    case 'CLOSE_DRAWER':
      return { ...state, openDrawer: false };

    case 'OPEN_DRAWER':
      return { ...state, openDrawer: true };
  }
};

export const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
