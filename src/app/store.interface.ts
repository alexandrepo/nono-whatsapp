import { store } from './store';


/**
 * Estado _raiz_ do projeto
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * Tipagem para _dispatch_ de _actions_
 */
export type AppDispatch = typeof store.dispatch;
