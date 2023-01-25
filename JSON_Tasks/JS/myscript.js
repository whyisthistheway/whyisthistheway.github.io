// oppg 1  jason er JavaScript Object Notation og vi bruker den til å overføre eller lagre data.
/* oppg 2 vi kan bruke den til å holde informasjon som 
let jobs = {"people":
  [
    { "Name":"John Does", "job":"engineer" },
    { "Name":"Anna Smith", "Job":"Nurse" },
    { "Name":"Peter Jones", "Job":"Teacher" }
  ]
};
*/
// oppg 3 vet ikke om jeg gjorde det riktig
let JsonExample = {lærere:
    [
    {"Fag": "Naturfag", "Navn": "Pratima Mundhe"},
    {"Fag": "Medieproduksjon", "Navn": "Marthe Ødegaard"},
    {"Fag": "Informasjonsteknologi", "Navn":"Joakim Husefest"},
    {"Fag": "Helse og matfag", "Navn": "Ida Wolden"},
    {"Fag": "Engelsk", "Navn": "Walter Johnsen"}
    ] 
}
//4 vet ikke hvordan jeg skal gjøre dette har søkt men fant ikke ut

// 5
console.log(JsonExample.lærere[3].Navn);