// INGRESAMOS LA KEY - LA PODEMOS OBETENER DE APIS FREE
const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InlvcmdoZXR5YXVyaTEyM0BnbWFpbC5jb20ifQ.OhtjCxRHurDzUSiuPFP9B1AhvSh3Gc9JH_9oR3LeXto';

// INGRESAMOS LA URL DE LA API
// url = "https://dniruc.apisperu.com/api/v1/dni/{Documento}?token={token}";

//Creamos una const de el boton

const btn = document.getElementById('btnConsultar');


//Creamos una funcion para el boton

function BuscarDNI() {
    //Ingresamos el DNI 
    const dni = document.getElementById('dni').value;
    //Pintamos el resultado
    const resultado = document.querySelector('#resultados');

    //Usamos fetch una promesa
    //Ingresamos la url del API
    fetch(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${key}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)

        resultado.innerHTML = `El nombre es ${data.nombres} y el apellido es ${data.apellidoPaterno} ${data.apellidoMaterno}`
    })
    .catch( error => console.log(error))
}


//Creamos un evento para el boton
btn.addEventListener("click", BuscarDNI)
