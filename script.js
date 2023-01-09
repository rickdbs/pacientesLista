/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 1.90,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 1.70,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 1.80,
    },

]

let patientsNames = []

for(let patient of patients) {
    patientsNames.push(patient.name, patient.age, patient.weight, patient.height)

    alert(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem ` + patient.height.toFixed(2) + ` de altura`)
}