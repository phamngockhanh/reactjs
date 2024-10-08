import "./App.css";
import "./components/LoginPage/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./components/pic/logo.png";
import googleicon from "./components/pic/googleicon.png";
const App = () => {
  return (
    <div className="wrapper">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="login-box p-4">
          <div className="logo">
            <img src={logo} className="img-fluid" alt="RecipeCook Logo" />
          </div>
          <div>
            <h2 className="text-center mb-3">Log in</h2>
            <p className="text-center mb-4">
              Log in to save and review your favorite recipes.
            </p>
          </div>
          <div className="google-login text-center mb-4">
            <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center w-100">
              <img
                src={googleicon}
                alt="Google Icon"
                className="google-icon me-2"
              />
              Sign in with Google
            </button>
          </div>
          <div className="register text-center">
            <p>
              Don’t have an account? <a href="#">Join now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
