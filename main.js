

let datos = [1,2,3,4,[1,2,3,['Papa','Platano','Yuca','Ñame', 'Arracacha'],4,5],6,7,8,["José",2],10];

let almacenar = [];
const respuesta = datos.some((value,indice,datos)=>{
    if(value[1] == 2){
        almacenar.push([indice,value.includes("José Alfredo")]);
    }
});

console.log(datos);
console.log(almacenar);

// let datos = [1,2,3,4,[1,2,3,4,5],6,7,8,[25],10];

// const respuesta = datos.includes([25],2);

// console.log(datos);
// console.log(respuesta);











const informacio = ["José", "Alfredo", "Jiménez", 45];

let data = informacio.map(valor => (valor=="Jiménez") ? "García" : valor);
console.log(informacio);
console.log(data);









// const lista = [
//         "Miguel",
//         "Castro",
//         23,
//         ({...arg})=>{
//             return `Hola ${arg.nom} como estas`;
//         }
//     ];
// const f = (valor,indice,array)=>{
//     if(typeof valor == "function"){
//         console.log(valor({nom: lista[0]}));
//     }
// }
// let valor = lista.forEach();

// console.log(valor);










// let array = [];

// array["Nombre"] = "Miguel";
// array["Apellido"] = "Castro";
// array["Edad"] = 23;

// for(let [indice, valor] of Object.entries(array)){
//     console.log(valor);
// }



// console.log(array);
// console.log(Object.values(array));
// Object.values(array).forEach(element => {
//     console.log(element);
// });


