import React from 'react';
import './Personalitytest.css'
import Statement from './Statement'

export default function Statementlist(props) {

  const statements = {
    1: "Är pratsam",  
    2: "Tenderar att hitta fel hos andra", 
    3: "Gör ett grundligt jobb",
    4: "Är deprimerad, nere",
    5: "Är originell, kommer med nya idéer", 
    6: "Är reserverad", 
    7: "Är hjälpsam och osjälvisk mot andra",
    8: "Kan vara något vårdslös",
    9: "Är avspänd, hanterar stress väl",
    10: "Är nyfiken på många olika saker",
    11: "Är full av energi",
    12: "Startar gräl med andra ",
    13: "Är pålitlig i arbetet",
    14: "Kan vara spänd",
    15: "Är sinnrik, en djup tänkare",
    16: "Sprider mycket entusiasm",
    17: "Har en förlåtande läggning", 
    18: "Tenderar att vara oorganiserad", 
    19: "Oroar mig mycket", 
    20: "Har livlig fantasi",
    21: "Tenderar att vara tystlåten",
    22: "Är i allmänhet tillitsfull",
    23: "Tenderar att vara lat",
    24: "Är känslomässigt stabil, blir inte upprörd så lätt",
    25: "Är uppfinningsrik",
    26: "Har en självhävdande personlighet",
    27: "Kan vara kall och distanserad",
    28: "Framhärdar tills uppgiften är slutförd",
    29: "Kan vara lynnig",
    30: "Värdesätter konstnärliga, estetiska upplevelser",
    31: "Är ibland blyg, hämmad",
    32: "Är omtänksam och vänlig mot nästan alla",
    33: "Gör saker effektivt",
    34: "Förblir lugn i spända situationer",
    35: "Föredrar rutinarbete",
    36: "Är utåtriktad, sällskaplig",
    37: "Är ibland ohövlig mot andra",
    38: "Gör upp planer och fullföljer dem",
    39: "Blir lätt nervös",
    40: "Tycker om att reflektera, leka med idéer",
    41: "Har få konstnärliga intressen",
    42: "Tycker om att samarbeta med andra",
    43: "Blir lätt distraherad",
    44: "Har en utvecklad smak för konst, musik eller litteratur" 
  }
  
  //loop over every object entry and return Statement
  const jsx = Object.entries(statements).map(([key, value]) => {
    return <Statement index={key} statement={value} updateAnswers={props.updateAnswers} getAnswers={props.getAnswers} />
  })

	return <div>
    <p className="align-center">Jag ser mig själv som någon som...</p>
		<div className="statementList">
			{jsx}
		</div>
  </div>
}
