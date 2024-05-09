import './App.css'
import { useRef } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageOne } from './components/PageOne.tsx'

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = createBrowserRouter([
    {
      path: "/1",
      element: <PageOne/>,
    },
  ])

  return (
    <>
      <div ref={containerRef} className="container" onClick={_event => console.log("clicked")}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
