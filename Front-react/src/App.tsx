import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Spinner from "./Services/Spinner";
import PageNotFound from "./Services/NotFound";
import { ProvideEmergenciesInPage } from "./Context/EmergenciesInPage";
import { ProvideAuth } from "./Context/Auth";
// containers
const AppLayout = lazy(() => import("./Navigation/Layout/AppLayout"));

function App() {
  return (
    <div className="root">
      <ProvideAuth>
        <ProvideEmergenciesInPage>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path={"/*"} element={<AppLayout />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ProvideEmergenciesInPage>
      </ProvideAuth>
    </div>
  );
}

export default App;
