import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainPage } from "./components/MainPage/MainPage.jsx";
import { Root } from "./routes/Root.jsx";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='woman' element={<MainPage gender='woman'/>} />
      <Route path='man' element={<MainPage gender='man'/>} />
      <Route path='woman/:category' element={<MainPage gender='woman'/>} />
      <Route path='man/:category/' element={<MainPage gender='man'/>} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router}></RouterProvider>