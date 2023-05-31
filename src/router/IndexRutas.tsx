import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import UserRouter from "../modules/users/routes/UserRoutes";
import { Suspense } from "react";
import { Loading } from "../components/loading/Spinner";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/users/*"
          element={
            <Suspense fallback={<Loading />}>
              <UserRouter />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
