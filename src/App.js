import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AuthProvider } from './contexts/JWTAuthContext';
import routes, { renderRoutes } from "./routes";

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
          {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
