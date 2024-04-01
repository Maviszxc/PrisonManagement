const prisoners = [
  {
    name: "Mateo",
    age: 25,
    crime: "Frustrated murder",
    sentence: "25 years",
  },

  {
    name: "Pedro",
    age: 23,
    crime: "Illegal possesion of drugs and firearms",
    sentence: "50 years",
  },

  {
    name: "Juan",
    age: 22,
    crime: "Adultery and arson",
    sentence: "10 years",
  },
]

module.exports.prisoners = (req, res) => {

    res.json({'PRISONERS': prisoners});

};