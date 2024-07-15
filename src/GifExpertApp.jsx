import { useState } from "react";
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Trump'])

  const onAddCategory = (newCategory) =>{
    
    if( categories.includes(newCategory)) return;// comprueba que el nuevo elemento no esté ya incluido en la lista, y en caso de que esté sale de la función.
   setCategories([ newCategory, ...categories])
  }

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    
      onNewCategory = { (event) => onAddCategory(event)}
    />
    {/* Listado de Gifs */}
   
    { categories.map( (category) => (
          <GifGrid 
            key ={ category } 
            category= { category }/>
        ))
    }
   
   

    </>
  )
}

//8SgF0vrsHXeNF4B84ms6iFruPNBepsFV