import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList";
import DirectorCard from "./pages/DirectorCard";
import DirectorForm from "./pages/DirectorForm";
import MovieForm from "./pages/MovieForm";
import MovieCard from "./pages/MovieCard";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home and About */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Directors */}
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
