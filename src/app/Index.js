import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./index.css";
function Index() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes></AppRoutes>
      </div>
    </BrowserRouter>
  );
}

export default Index;
