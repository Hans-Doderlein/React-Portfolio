import { MainHeader } from "./components/Header/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utilities/routes";
import { MainFooter } from "./components/Footer/MainFooter";

function App() {
  const routeList = Object.keys(routes).map((route) => ({ ...routes[route] }));

  return (
    <>
      <Router>
        <MainHeader />
        <Routes>
          {routeList.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
      <MainFooter />
    </>
  );
}

export default App;
