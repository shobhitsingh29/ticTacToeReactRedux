import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import stateReducer from "./reducers/statereducer";

// import {logger, crashReporter} from "./middlewares/midlleware";
import "../css/styles.less";
import "./common/utils/utils";
import App from "./app";
import rootSaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  state: stateReducer
});
const store = createStore(reducers,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const Main = () => (<Provider store={store}>
  <App />
</Provider>);

ReactDOM.render(<Main />, document.getElementById("root"));
