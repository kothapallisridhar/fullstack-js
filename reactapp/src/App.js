import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { lazy, Suspense, useState } from "react";
const Form = lazy(() => import("./form"));

// lazy loading with conditional rendering
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="text-center">
        <h1>Lazy loading</h1>
        {show && (
          <Suspense>
            <Form />
          </Suspense>
        )}
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          Open Form
        </button>
      </div>
    </>
  );
}

export default App;
