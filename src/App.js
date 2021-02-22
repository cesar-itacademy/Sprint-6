
// Componente Book 
import Book from './book';
import Library from './Library.json'

//Nivell 3
// Llegirem els llibres que mostrarà la nostra aplicació des d’un fitxer JSON. Per això, importarem aquest fitxer en la nostra aplicació i ho recorrerem amb una estructura .map.


export default () => {

    return (
       <div>
            {Library.map(book => {
                return(
                <>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </>
                ) 
            })}
        </div>
    );
}; 