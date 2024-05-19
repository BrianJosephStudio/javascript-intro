import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageOne } from './components/PageOne.tsx'
import { CustomerForm } from './components/CustomerForm.tsx';
import { PerformancePanel } from './components/PerformancePanel.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/1",
      element: <PageOne/>,
    },
    {
      path: "/customer-form",
      element: <CustomerForm
      themeSwitch={true}
      validateInput={true}
     />,
    },
    {
      path: "/performance-monitor",
      element: <PerformancePanel/>,
    }
  ],
  {
    basename: "/apps/javascript-intro"
  }
)

  return (
      <RouterProvider router={router} />
  )
}

export default App
