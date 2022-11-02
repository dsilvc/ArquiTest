import { ITEMS_PER_PAGE, useEmergenciesData } from "../../Data/emergencies";
import PaginatedItems from "../../Components/Pagination";
import { useAuth } from "../../Context/Auth";

export default function Emergencies() {
  const { emergencies } = useEmergenciesData();
  const { user } = useAuth();

  return (
    <>
      {!user && (
        <div className="not-logged">
          Debes iniciar sesión para ver las emergencias
        </div>
      )}
      <div>
        <PaginatedItems
          itemsPerPage={ITEMS_PER_PAGE}
          emergencies={emergencies}
        ></PaginatedItems>
      </div>
    </>
  );
}
