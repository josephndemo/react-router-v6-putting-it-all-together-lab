import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>404 - Page Not Found 🚫</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/">⬅ Back to Home</Link>
      </main>
    </>
  );
}

export default ErrorPage;
