const txt1 = document.getElementById('txt1');

const database= firebase.database();

BtnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    database.ref('/NuevoPostre').set({
        campo1 : txt1.value
    });
});