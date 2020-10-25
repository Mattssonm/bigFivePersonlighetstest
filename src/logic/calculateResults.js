
/*
  Poängberäkning
  1) Vänd först på responsskalan för de testuppgifter som är markerade med ett ”R” i tabell
    11 nedan. Om personen ifråga till exempel på uppgift 6 har skrivit siffran 1 så blir det
    siffran 5. Om personen angett siffran 2, så ändras den till siffran 4. Om personen angett
    siffran 4 vänds den således till en 2:a och siffran 5 blir siffran 1.
  2) Summera sedan poängen på de testuppgifter som utgör respektive personlighetsdimension, som framgår av tabell 11.
  3) Jämför sedan poängen med relevant jämförgrupp i tabell 12a-g. Exempel:
    a. Låt säga att en person fått 13 poäng på dimensionen Extraversion.
    b. Titta på raden för Extraversion i lämplig tabell (om personen är en kvinna, titta i
      tabellen för kvinnor).
    c. Följ raden till den kolumn där du hittar poängen. För totalgruppen är det i den
    första percentilkolumnen, där det står 0-10. Detta innebär att individens poäng är
    jämförbar med den förväntade andel på 10% av människor som har lägst grad av
    extraversion.

  Tabell 11. Översikt över poängberäkning på testet BFI.
    Dimension Definierande testuppgifter
    Extraversion: 1, 6R, 11, 16, 21R, 26, 31R, 36
    Agreeableness: 2R, 7, 12R, 17, 22, 27R, 32, 37R, 42
    Conscientiousness: 3, 8R, 13, 18R, 23R, 28, 33, 38, 43R
    Neuroticism: 4, 9R, 14, 19, 24R, 29, 34R, 39
    Openness: 5, 10, 15, 20, 25, 30, 35R, 40, 41R, 44 

    http://miun.diva-portal.org/smash/get/diva2:351828/FULLTEXT01.pdf
  */

 export function calculateResults(answers) {
  
  //object for testing
  // const emptyAnswers =  {
  //   1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0, 31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0  
  // }
  // let randomAnswers = {};
  // const testObj = Object.entries(emptyAnswers).map(([key]) => {
  //   return randomAnswers[key] = Math.floor(Math.random() * 5) + 1;
  // })
 
  //Declare an array with categories to summarize
  const toSummarize = [
    [1, 6, 11, 16, 21, 26, 31, 36],
    [2, 7, 12, 17, 22, 27, 32, 37, 42],
    [3, 8, 13, 18, 23, 28, 33, 38, 43],
    [4, 9, 14, 19, 24, 29, 34, 39],
    [5, 10, 15, 20, 25, 30, 35, 40, 41, 44 ]
  ]

  //Declare an array of answers to reverse
  const toReverse = [6, 21, 31, 2, 12, 27, 37, 8, 18, 23, 43, 9, 24, 34, 35, 41]

  let results = [];

  //loop each category
  for (let i = 0; i < toSummarize.length; i++) {
    let categorySum = 0;
    //loop all the statementnumbers(prop) in each category
    for (let j = 0; j < toSummarize[i].length; j++) { 
      const prop = toSummarize[i][j];
      const value = answers[prop];
      //if prop isnt equal to 3 and if prop is included in toReverse, reverse it before adding to categorySum
      if (value !== 3 && toReverse.includes(prop)) {
        if (value === 5) {
          categorySum += 1;
        } else if (value === 4) {
          categorySum += 2;
        } else if (value === 2) {
          categorySum += 4;
        } else {
          categorySum += 5; 
        } 
      } else {
        categorySum += value;
      }
    }
    results.push(categorySum);
  }
  //returns an array with 5 scores for each trait
  return results;
}