import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        toastOptions={{
          style: { background: "#333", color: "#fff" },
          success: { style: { background: "#166534" } },
          error: { style: { background: "#b91c1c" } },
        }}
      />
    </Provider>
  </StrictMode>
);
