# React bàsic

Exercicis per posar en pràctica el inici d'un projecte en React. 

## Començam 🚀

_Començarem creant una web en react des de zero, incloent tots els passos necessaris, per a passar després ha crear els nostres primers components i fer ús de props._


### Objectius 📋

Entendre de manera bàsica com funciona React.
Saber què és un component.
Saber què són els props.
Fer el teu primer projecte amb React.
```

### Nivell 1 🔧

En aquest exercici prepararem el projecte, seguint els passos:

1. Instal·lar Nodejs: Per a facilitar la creació del projecte i gestió de paquets, usarem npm. Per a poder utilitzar-ho haurem de tenir descarregat Node.js en nuesto ordenador. 

https://nodejs.org/en/download/



configuración de la instalación Node.js



2. Instal·lar la plantilla del nostre projecte

Clonem un projecte que ens servirà de plantilla per als nostres exercicis.
https://github.com/monteserin/react-template



3.  Obrir el projecte amb el Visual Studio Code

Veuràs que en executar el comando anterior, s’ha creat una carpeta amb el nom del projecte.

Arrosseguem el directori acabat de crear al Visual Studio Code per obrir el projecte amb l’editor.

Hem de descarregar els mòduls del projecte, per això, obrim la terminal (drecera del teclat ctrl + ñ) → i executem el comando:



npm i



5. Comprendre l'estructura del projecte creat.

Veuràs que s'han creat diversos arxius i directoris, és important conèixer l'estructura del projecte. A continuació es mostra informació de cada part:

- Carpeta node_modules. Aquí es guarden les dependències del projecte. Veuràs que per defecte create-react-app ha creat vàries.

- Carpeta src: Aquesta carpeta conté el codi de l'aplicació. Per defecte el component principal es llaama App.js. També hi haurà un index.js que es encargarña d'introduir el component App en el <div> del index.html.

- Readme.md. Fitxer d'informació del projecte.

- Package.json. En aquest arxiu es defineixen les dependències de npm. Bé pots instal·lar els paquets amb npm install “nom del paquet” o pots definir totes les dependències del projecte i després executant npm intall es intalarán totes alhora.



npm i nom-del-paquet



- Gitignore. Aquí es definiran els arxius o carpetes que volem que git no tingui en compte.



6. Instal·lar les dependències del projecte per a poder executar-lo.

Podrem instal·lar-les executant el comando:

npm i



7. Arrencar el projecte i visuarlo en el navegador. Desplegarem el nostre projecte en un entorn local (localhost) executant el comando:

npm start

(Instal·lant l’extensió de Visual Studio Code "npm de egamma" podrem executar el comando anterior fent clic en un botó:)

unidad 6 - cat 5



Una vegada executat hauràs de veure el missatge d'èxit:

unidad 6 - cat 6


Si entrem en http://localhost:3000 podrem veure l'aplicació:

unidad 6 - cat 7

- Exercici 2
Enhorabona! Ja tens el projecte funcionant, ara només farem petits canvis per a jugar amb React. 

Com ja sabràs, una aplicació amb React està composta de components, diguem que cada component és una peça del puzle. 

Pots crear tants components com vulguis, i sempre que ho consideris necessari, pots usar un o diversos component dins d'un altre. Per exemple, si féssim una landing page amb react, dins del component principal (base de la web) podríem importar el component header, menú, formulari de contacte….

En aquest exercici, crearem un component i l’importarem en el component principal App.

- Crear l'arxiu book.js.

-  Després copia aquest codi i completa’l perquè retorni el text “Viatge a la lluna”:



export default () => {

    ????

}



- Ara farem ús del component Book en App.js. Completa el component App.js:



import Book from './book'; 

export default () => { 

    return ( 

        <div> 

            ????

        </div> 

      );

};



El resultat ha de ser:

unidad 6 - cat 8



---
⌨️ con ❤️ por [Cesar](https://github.com/cesar-itacademy) 😊

### Nivell 2 🔧

- Exercici 3
En lloc de harcodear (escriure directament) el valor del component en el seu interior, li ho passarem com prop des del component App.

El resultat hauria de continuar sent el mateix. L’única cosa que canviarà serà la implementació del codi.

### Nivell 30 🔧

- Exercici 4
Llegirem els llibres que mostrarà la nostra aplicació des d’un fitxer JSON. Per això, importarem aquest fitxer en la nostra aplicació i ho recorrerem amb una estructura .map.

Aquest és el JSON amb el array de frases:



[

    { 

         "title": "Viatge a la lluna", 

          "author": "Julio Verne" 

     }, 

     { 

         "title": "El metge", 

         "author": "Noah Gordon" 

     }

 ]




---
⌨️ con ❤️ por [Cesar](https://github.com/cesar-itacademy) 😊