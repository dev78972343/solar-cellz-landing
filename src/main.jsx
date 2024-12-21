import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./i18n";
import LenisWrapper from "./components/LenisWrapper/LenisWrapper";
import { HelmetProvider } from "react-helmet-async";
// import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisWrapper>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </LenisWrapper>
  </StrictMode>,
);
