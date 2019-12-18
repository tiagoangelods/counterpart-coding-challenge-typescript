import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from '../reducers';

const persistConfig: any = {
  key: 'root',
  storage,
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const w : any = window as any;
const devtools: any = w.devToolsExtension ? w.devToolsExtension() : (f:any)=>f;

export const store = createStore(persistedReducer, devtools);
export const persistor = persistStore(store);