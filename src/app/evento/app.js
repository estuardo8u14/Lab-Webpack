import {app2} from "./const/app2";

'use strict'

const switcher = document.querySelector('.btn1');

export const startApp = () => {
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('intro-img1')

        var className = document.body.className;
        if(className == "intro-img") {
            this.textContent = "No te recominedo usar el modo obscuro en tu navegador";
        }
        else {
            this.textContent = "Aqui hay una recopilación de imagenes de cada segmento de la historia";
        }

        console.log('current class name: ' + className);

    });
};