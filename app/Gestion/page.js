import SelectEntrepot from "@/composant/selectEntrepot";
import {getAllEntrepots} from "@/actions/entrepot";


const GestionPage = async () => {
  const entrepots = await getAllEntrepots();
    return (
        <div>
            <h1>Gestion Page</h1>

          <SelectEntrepot entrepots={entrepots}/>
        </div>
    )
}

export default GestionPage;