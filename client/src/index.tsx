import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/layout/App";
import "./app/layout/style.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { StoreProvider } from "./app/content/StoreContext";
import { Provider } from "react-redux";
import { store } from "./app/content/configureStore";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const history = createBrowserHistory();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
