import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageOne } from './components/PageOne.tsx'
import { CustomerForm } from './components/CustomerForm.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/1",
      element: <PageOne />,
    },
    {
      path: "/customer-form",
      element: <CustomerForm />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
