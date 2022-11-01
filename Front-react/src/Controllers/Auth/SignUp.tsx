import { Link } from "react-router-dom";
import { SignupForm } from "../../Components/Auth/SignUp";
import { LOGIN_LINK } from "../../Navigation/routes";

export default function SignUp() {
  return (
    <div className="emergency">
      <h1>Crea tu cuenta</h1>
      <SignupForm />
      <br />
      <p>¿Ya tienes una cuenta?</p>
      <Link to={LOGIN_LINK}>Ingresa aquí</Link>
    </div>
  );
}
