import { Link } from "react-router-dom";
import { LogInForm } from "../../Components/Auth/LogIn";
import { SIGNUP_LINK } from "../../Navigation/routes";

export default function LogIn() {
  return (
    <div className="emergency">
      <h1>Ingresa a tu cuenta</h1>
      <LogInForm />
      <br />
      <Link to={SIGNUP_LINK}>
        <p>O crea una cuenta aquí</p>
      </Link>
    </div>
  );
}
