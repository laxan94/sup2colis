import {createColis, getAllColis} from "@/actions/colis";
import {revalidatePath} from "next/cache";
import {createLivraison} from "@/actions/livraison";
import {getAllEntrepots} from "@/actions/entrepot";

const ColisPage = async () => {

  const colis = await getAllColis()
  const entrepots = await getAllEntrepots()
  const addColis = async (data) => {
    "use server"
    const newColis = await createColis({
        nom: data.get('nom'),
        poids: parseInt(data.get('poids')),
        stock: parseInt(data.get('stock')),
      }
    )
    revalidatePath('/colis')
    console.log("Colis ajouté")
  }

  const addLivraison = async (data) => {
    "use server"
    const newLivraison = await createLivraison(
      data.get('expediteur'),
      data.get('destinataire'),
      parseInt(data.get('quantite')),
      parseInt(data.get('colisId')),
    )
    revalidatePath('/colis')
    console.log("Livraison ajoutée")
  }

  return (
    <main>
      <h1>Enregistrement de colis</h1>
      <p>Ajout d'un Colis</p>
      <form action={addColis}>
        <label htmlFor='nom'>Nom</label>
        <input type='text' name='nom' required/>
        <label htmlFor='poids'>Poids</label>
        <input type='number' name='poids' required/>
        <label htmlFor='stock'>Stock</label>
        <input type='number' name='stock' required/>
        <select name='entrepotId' >
          {entrepots.map((entrepot) => (
            <option key={entrepot.id} value={entrepot.id}>{entrepot.nom}</option>
          ))}
        </select>
        <button type='submit'>Ajouter un colis</button>
      </form>

      <p>Créer une livraison</p>
      <form action={addLivraison}>
        <label htmlFor='expediteur'>Expediteur</label>
        <input type='text' name='expediteur' required/>
        <label htmlFor='destinataire'>Destinataire</label>
        <input type='text' name='destinataire' required/>
        <label htmlFor='quantite'>Quantité</label>
        <input type='number' name='quantite' required/>
        <select name='colisId' >
          {colis.map((colis) => (
            <option key={colis.id} value={colis.id}>{colis.nom}</option>
          ))}
        </select>

        <button type='submit'>Créer une livraison</button>
      </form>
    </main>

  )
}

export default ColisPage;