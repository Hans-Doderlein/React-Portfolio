import { MainHeader } from "./components/Header/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utilities/routes";

function App() {
  const routeList = Object.keys(routes).map((route) => ({ ...routes[route] }));

  console.log(routeList);
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
    </>
  );
}

export default App;
