import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('')
    
    //función para capturar en inputValue las pulsaciones del teclado
    const onInputChange = ({ target }) => {        
        setInputValue( target.value );
    }

    //función que envía lo que escribimos en el formulario y actualiza el listado
    const onSubmit = ( event ) => {
        event.preventDefault();//evita que  la página se recargue y que el formulario no se envíe para poder validar los datos del formulario.
        const newInputValue = inputValue.trim()
        //1ª validación:
        if( newInputValue.length <= 1) return; //sale de la función si el valor sin espacios delante y detrás es igual o menor a uno.

        //actualizamos listado:
        onNewCategory( newInputValue )
        //setCategories( categories => [ inputValue,...categories  ]);

        //limpiamos la caja del input
        setInputValue('');
       
    }

  return (
    <form  onSubmit = { onSubmit }> 
         
        <input
            type = "text"
            placeholder="Buscar gifs"
            value = { inputValue }
            onChange={ onInputChange }
        />

    </form>
   
   // el form hace un refresco de la web al pulsar enter
   
  )
}
