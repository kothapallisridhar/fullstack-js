import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function User(props) {
  return (
    <>
      <h1>This is User Component</h1>
      <h2>Hello {props.username}</h2>
    </>
  );
}

function Login() {
  return <h1>This is Login Component</h1>;
}

function AuthCheck(Component) {
  let authenticated = true;

  return (props) => {
    if (authenticated) {
      return <Component {...props} />;
    } else {
      return <Login />;
    }
  };
}

const AuthChecked = AuthCheck(User);

function App() {
  return (
    <>
      <AuthChecked username="Suhas" />
    </>
  );
}

export default App;
