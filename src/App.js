import { Routes, Route } from "react-router-dom";
// import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import FirstProject from "./scenes/firstproject";
// import Recipes from "./scenes/recipes";
// import Blog from "./scenes/blog";
// import Template from "./scenes/template";
// import Favorites from "./scenes/favorites";
// import CustomTemplate from "./scenes/customTemplate";
// import Integrations from "./scenes/integrations";
// import Semrush from "./scenes/semrush";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<FirstProject/>}/>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/recipes" element={<Recipes />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/template" element={<Template />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          {/* <Route path="/customtemplate" element={<CustomTemplate />} /> */}
          {/* <Route path="/integrations" element={<Integrations />} /> */}
          {/* <Route path="/semrush" element={<Semrush />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
