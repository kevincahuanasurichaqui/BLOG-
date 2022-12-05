

function enviar_datos()
{
    console.log("hizo clik");

    console.log(document.getElementById("email").value);

    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let texto = document.getElementById("texto").value;
        
        // alert("los valores ingresados son: \n correo: email \n telefono: telefono \n texto: texto");
        
        alert(`los valores ingresados son: \n correo: ${email} \n telefono: ${telefono} \n texto: ${texto}`);

        

}


function regresar_inicio()
{



}