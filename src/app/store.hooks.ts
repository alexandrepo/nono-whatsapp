import type { RootState, AppDispatch } from './store.interface';

import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';


/**
 * Hook usado para acessar a função `dispatch` do redux
 * @returns — retorna a função `dispatch` para `store` do projeto
 */
export const useDispatch: () => AppDispatch = useReduxDispatch;

/**
 *  Hook responsável por disponibilizar acesso ao estado da `store` do projeto.
 */
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
