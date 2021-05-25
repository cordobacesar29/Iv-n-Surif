let objet = {};

function stripProperty() {
    /* ejemplo con la propiedad name
    
        let objet = {
            name: 'cesar',
            email: 'cordobacesar29@gmail.com'
        }

    */

    /*    ejemplo sin propiedad name
        let objet = {
            email: 'cordobacesar29@gmail.com'
        }
    */
    if(objet.name) {
        delete objet.name;
        return console.log(1);
    }
    return console.log(0);
}

stripProperty();