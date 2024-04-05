'use server'
import {getAllColis, getColis} from "@/actions/colis";
import SearchColis from "@/composant/searchColis";


const SuivisPage = async () => {

  const colis = await getAllColis()
  console.log(colis)
  // const retrieveColis = async (data) => {
  //   "use server"
  //   return await getColis(parseInt(data.get('colisId')))
  // }


  return (
    <div>
      <h1>Suivis</h1>
      {/*<form action={retrieveColis}>*/}
      {/*  <label>*/}
      {/*    <select name='colisId'>*/}
      {/*      {colis.map((colis) => (*/}
      {/*        <option key={colis.id} value={colis.id}>{colis.nom}</option>*/}
      {/*      ))}*/}
      {/*    </select>*/}
      {/*  </label>*/}
      {/*  <button type="submit">Rechercher</button>*/}
      {/*</form>*/}

      <SearchColis colis={colis}/>

    </div>

  )
}

export default SuivisPage;