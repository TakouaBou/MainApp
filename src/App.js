import { useState } from "react"
function App(){
  //State
   const [fruits,setFruits] = useState([
    { id: 1, nom: "un" },
    { id: 2, nom: "deux" },
    { id: 3, nom: "troix"},
   ]);
  //comportements
   const handleDelete = (id) => {
    console.log(id);

    const copyf = [...fruits];
    const fcmodif = copyf.filter(fruit => fruit.id !== id);
    setFruits(fcmodif);
   }
  //render(Affichage)
  return ( <div>
    <h1>Liste</h1>
    <ul>
      { fruits.map((fruit) => (
       <li key={fruits.id}>
       {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>x</button>
       </li>
      ))}
    </ul>
    <form action="submit">
     <input type="text" placeholder="Ajouter un elm.."/>
     <button>Ajouter</button>
    </form>
    </div>
  );
}
export default App;
