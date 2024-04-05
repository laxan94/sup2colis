"use client"
import { useState } from "react"
import {getColis} from "@/actions/colis";

const SearchColis = ({colis}) => {

    const [selectedColis, setselectedColis] = useState(null)
    const retrieveColis = async (data) => {
      const result = await getColis(parseInt(data.get('colisId')))
      console.log(result)
      // console.log(new Date(result.livraisons[0].dateEnvoi).toISOString())
      setselectedColis(result)
    }

    return (
      <div>
        <h1>Recherche</h1>
        <form action={retrieveColis}>
          <label>
            <select name='colisId'>
              {colis.map((colis) => (
                <option key={colis.id} value={colis.id}>{colis.nom}</option>
              ))}
            </select>
          </label>
          <button type="submit">Rechercher</button>
        </form>
        {selectedColis && (
          <div>
            <h2>{selectedColis.nom}</h2>
            <p>Poids: {selectedColis.poids}</p>
            <p>Stock: {selectedColis.stock}</p>
            <p>Entrepot:</p>
            <p>Nom: {selectedColis.entrepot.nom}</p>
            <p>Adresse: {selectedColis.entrepot.adresse}</p>
            <p>Capacite: {selectedColis.entrepot.capacite}</p>
            <p>Historique</p>
            <ul>
              {selectedColis.livraisons.map((livraison, index) => (
                <li key={index}>
                  <p>Expediteur: {livraison.expediteur}</p>
                  <p>Destinataire: {livraison.destinataire}</p>
                  <p>Quantité: {livraison.quantite}</p>
                  {/*<p>Date d'envoi: {new Date(livraison.dateEnvoi)}</p>*/}
                  <p>Statut: {livraison.statut}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
}

export default SearchColis;