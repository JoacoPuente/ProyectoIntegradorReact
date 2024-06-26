import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MenuProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MenuProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
