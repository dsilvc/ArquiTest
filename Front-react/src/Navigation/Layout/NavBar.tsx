import { Link } from "react-router-dom";
import "../../Assets/styles/navbar.css";
import { useAuth } from "../../Context/Auth";
import { EMERGENCIES_LINK, LOGIN_LINK } from "../routes";

export default function NavBar() {
  const auth = useAuth();
  const user = auth.user;
  const token = user?.jti as string;
  return (
    <div className="navbar-root">
      <Link to={EMERGENCIES_LINK}>
        <div className="link">Emergencias</div>
      </Link>
      {!user && (
        <Link to={LOGIN_LINK}>
          <div className="link">Iniciar sesión</div>
        </Link>
      )}
      {user && <div>¡Hola {user.email}!</div>}
      {user && (
        <div className="link">
          <div onClick={() => auth.logOut(token)}>Cerrar sesión</div>
        </div>
      )}
    </div>
  );
}
