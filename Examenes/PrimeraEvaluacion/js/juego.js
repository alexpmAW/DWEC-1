let contadorEnemy=0;
let atackEnemy=0;
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#start").addEventListener('click',function(){
        document.querySelector("#start").classList.add("hide");
        document.querySelector("#mainBody").classList.remove("hide");
        crearEnemy();
        document.querySelector("#vidaPersonaje").textContent= getVida();
    })

    document.querySelector("#lAtak").addEventListener('click',function(){
        atack(1+ Math.floor(getFuerza()/3),90 + getSuerte())
    })
    document.querySelector("#nAtak").addEventListener('click',function(){
        atack(3+ Math.floor(getFuerza()/2),70 + getSuerte())
    })
    document.querySelector("#hAtak").addEventListener('click',function(){
        atack(5 + getFuerza(),50 + getSuerte())
    })
  });

  function crearEnemy()
  {
    document.querySelector("#imgEnemy").src=`images/enemigo_${contadorEnemy}.png`;
    setVidaEnemigo(Math.floor(Math.random()*16 +5))
    atackEnemy=Math.floor(Math.random()*5 +1);
    contadorEnemy++;
  }

function getFuerza(){
    return parseInt(JSON.parse(localStorage.getItem("personaje")).fuerza);
}
function getVida(){
    return parseInt(JSON.parse(localStorage.getItem("personaje")).vida);
}
function getSuerte(){
    return parseInt(JSON.parse(localStorage.getItem("personaje")).suerte);
}
  function atack(fuerza,probabilidad)
{
    const hemosAcertado=Math.random()*100 +1 <=probabilidad;
    if (hemosAcertado)
    {
        if (getVidaEnemigo()-fuerza<=0)
        {
            crearEnemy();
            return;
        }
        setVidaEnemigo(getVidaEnemigo()-fuerza);
        setVidaPersonaje(getVidaPersonaje()- atackEnemy);
    }
    addHistoric(hemosAcertado ? fuerza: 0);
}

function addHistoric(fuerza)
{
    const pElementDone=document.createElement("p");
    const pTextoDone=document.createTextNode(`Has hecho ${fuerza} de daño`)
    pElementDone.appendChild(pTextoDone)

    const pElementRecived=document.createElement("p");
    const pTextoRecived=document.createTextNode(`Has hecho ${fuerza} de daño`)
    pElementRecived.appendChild(pTextoRecived)

    document.querySelector("#historico").appendChild(pElementDone)
    document.querySelector("#historico").appendChild(pElementRecived)
}
//personaje
function getVidaPersonaje()
{
    return parseInt(document.querySelector("#vidaPersonaje").textContent);
}

function setVidaPersonaje(value)
{
    document.querySelector("#vidaPersonaje").textContent=value;
}

//enemigo
function getVidaEnemigo()
{
    return parseInt(document.querySelector("#vidaEnemigo").textContent);
}

function setVidaEnemigo(value)
{
    document.querySelector("#vidaEnemigo").textContent=value;
}