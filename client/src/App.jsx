import {Catalogs} from "./pages/Catalogs.style.jsx";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./pages/Home.jsx";

function App() {
  return (
	<Router>
		<div className="App">
			<Routes>
				<Route index element={<Home/>}/>
				<Route path="/catalogs" element={<Catalogs/>}/>
			</Routes>
		</div>
	</Router>
  );
}

export default App;
