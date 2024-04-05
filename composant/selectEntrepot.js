"use client"
import {useState} from "react";
import {getEntrepot} from "@/actions/entrepot";
import {Button} from "@/components/ui/button";


const SelectEntrepot = ({entrepots}) => {
  const [selectedEntrepot, setSelectedEntrepot] = useState(null);
  const retrieveEntrepot = async (data) => {
    const result = await getEntrepot(parseInt(data.get('entrepotId')));
    console.log(result);
    setSelectedEntrepot(result);
  }


  return (
    <div>
      <h1>Recherche</h1>
      <form action={retrieveEntrepot}>
        <label>
          <select name='entrepotId'>
            {entrepots.map((entrepot) => (
              <option key={entrepot.id} value={entrepot.id}>{entrepot.nom}</option>
            ))}
          </select>
        </label>
        {/*<button type="submit">Rechercher</button>*/}
        <Button type="submit">Rechercher</Button>
      </form>
      {selectedEntrepot && (
        <div>
          <h2>{selectedEntrepot.nom}</h2>
          <p>Adresse: {selectedEntrepot.adresse}</p>
          <p>Capacite: {selectedEntrepot.capacite}</p>
          <button type="button">Modifier</button>
          <p>Colis</p>
          <table>
            <thead>
            <tr>
              <th>Nom</th>
              <th>Poids</th>
              <th>Stock</th>
            </tr>
            </thead>
            <tbody>
            {selectedEntrepot.colis.map((colis, index) => (
              <tr key={index}>
                <td>{colis.nom}</td>
                <td>{colis.poids}</td>
                <td>{colis.stock}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SelectEntrepot;