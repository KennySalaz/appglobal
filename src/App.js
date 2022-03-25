import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";

import IndexRoutes from "./Routes/IndexRoutes";
function App() {
  return (
    <>
 
      <Router >
        <IndexRoutes />
      </Router>

    </>
  );
}

export default App;
