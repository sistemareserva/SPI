const implement = document.getElementById('elemento')
const combo = document.getElementById('combo')
const tabpres = document.getElementById('tabpres')
const tabsancion = document.getElementById('tabsancion')

function llenarTabla(){
  //Esta funcion es de llenar la tabla de Implementos
fetch('./php/allimplement.php')
.then(dato =>{
   if(dato.ok){
     dato.json()
     .then(result=>{
      implement.innerHTML=''
    for(let i of result){
      implement.innerHTML+=`
      <tr>

        <td>${i.idimple}</td>
        <td>${i.nomimple}</td>
        <td>${i.estado}</td>
        <td><button name="" id="Edit" type="button"  onclick='actualizar()' class="btn btn-primary">Reservar</button></td>

      </tr>


      `
          }


     })
   }
})
}
function llenarCombo(){
fetch('./php/NomImpl.php')
.then(dato =>{
   if(dato.ok){
     dato.json()
     .then(result=>{
       combo.innerHTML=``
       combo.innerHTML=`<option>Escoger...</option>`
       for(let i of result){

       combo.innerHTML+=`
       <option >${i.nomimple}</option>
       `
}
      console.log(result)

     })
   }
})
}
function llenarTabPres(){
  fetch('./php/tabpresta.php')
  .then(dato =>{
     if(dato.ok){
       dato.json()
       .then(result=>{
         console.log(result)
        tabpres.innerHTML=''
      for(let i of result){
        tabpres.innerHTML+=`
        <tr>

          <td>${i.idimple}</td>
          <td>${i.nomimple}</td>
          <td>${i.hrasali}</td>
          <td>${i.fech}</td>

        </tr>


        `
            }


       })
     }
  })
}
function llenarTabSancion(){
  fetch('./php/tabsancio.php')
  .then(dato =>{
     if(dato.ok){
       dato.json()
       .then(result=>{
         console.log(result)
        tabsancion.innerHTML=''
      for(let i of result){
        tabsancion.innerHTML+=`
        <tr>

          <td>${i.fech}</td>
          <td>${i.fechasan}</td>
          <td>${i.nomimple}</td>


        </tr>


        `
            }


       })
     }
  })
}

llenarCombo()
llenarTabla()
llenarTabPres()
llenarTabSancion()

function TablaXcombo(){
var datos=combo.value

if(datos!="Escoger..."){
console.log("holaa")
fetch("./php/MosxNomxImple.php",{
  method: 'POST',
  body:JSON.stringify({
    dato:datos
  })
})
.then(datos=>{
  if(datos.ok){
    datos.json()
    .then(result=>{
      implement.innerHTML=''
    for(let i of result){
      implement.innerHTML+=`
      <tr>

        <td>${i.idimple}</td>
        <td>${i.nomimple}</td>
        <td>${i.estado}</td>
        <td><button name="" id="Edit" type="button"  onclick='actualizar()' class="btn btn-primary">Reservar</button></td>

      </tr>


      `
          }


    })
  }
  })


}else{
  llenarTabla()
}
}
function actualizar(){
llenarCombo()
llenarTabla()


}
