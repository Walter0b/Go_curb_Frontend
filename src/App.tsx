import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import { appRouters } from "@pages/Router/Router";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouters}></RouterProvider>
    </Provider>
  );
}

export default App