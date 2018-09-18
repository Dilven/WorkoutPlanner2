
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux';
import thunk from 'redux-thunk';

const configureStore = () => {
  const persistedState = loadState();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, persistedState, composeEnhancers(
    applyMiddleware(thunk)
  ));
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  
  return store;
};

export default configureStore;



