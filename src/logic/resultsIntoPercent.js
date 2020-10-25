export function resultsIntoPercent(inputArr) {
  // const testArr = [ 19, 22, 29, 18, 34 ];
  
  const traits =  [
    {  
      trait: "Extroversion",
      min: 8,
      max : 40 
    }, {  
      trait: "Agreeableness",
      min: 9,
      max : 45 
    }, {  
      trait: "Conscientiousness",
      min: 9,
      max : 45 
    }, {  
      trait: "Neuroticism",
      min: 8,
      max : 40 
    }, {  
      trait: "Openness",
      min: 10,
      max : 50 
    } 
  ]

  const results = inputArr.map( (key, index) => {
    return Math.round(((key - traits[index].min) * 100) / (traits[index].max - traits[index].min))
  })
  
  return results;
}
