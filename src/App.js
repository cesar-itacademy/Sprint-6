
// Componente Book 
import Book from './book';

//Nivell 2 
// En lloc de harcodear (escriure directament) el valor del component en el seu interior, li ho passarem com prop des del component App.
// El resultat hauria de continuar sent el mateix. L’única cosa que canviarà serà la implementació del codi.

export default () => {

    return (
        <div>
            <Book title="Viatge a la lluna" />
        </div>
    );
}; 