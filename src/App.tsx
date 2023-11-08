import {NextUIProvider} from "@nextui-org/react";
import './App.css'
import Nav from './components/core/Nav';
import router from './router'
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <NextUIProvider>
      <Nav />
      <main className="flex w-full flex-col items-center px-6">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  )
}

export default App