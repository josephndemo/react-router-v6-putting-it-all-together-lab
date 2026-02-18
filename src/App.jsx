import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
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
    <>
      <Routes>

        {/* Home and About */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Directors */}
        <Route path="/directors" element={<DirectorContainer />}>

          {/* List */}
          <Route index element={<DirectorList />} />

          {/* Add Director */}
          <Route path="new" element={<DirectorForm />} />

          {/* Single Director */}
          <Route path=":id" element={<DirectorCard />}>

            {/* Add Movie */}
            <Route path="movies/new" element={<MovieForm />} />

            {/* Single Movie */}
            <Route path="movies/:movieId" element={<MovieCard />} />

          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
