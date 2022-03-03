import React, { Component } from "react";

import portfolio from "./utbildning.json";

const Cv = () => {

  return (
    <>
    <div>
        <h2>Pontus Hylander</h2>
            <p>
                Norra järnvägsatan 23A <br/>
                82731 Ljusdal <br/>
                070-215 57 79<br/>
                Pontus.hylander@gmail.com<br/> 
            </p>
    </div>

    <div >         
      <ul>
        {portfolio.map((record, i) => (
          <li key={i}>
            <li>{record.namn}</li>
            <ul>
              <li key={record.år}>{record.år}</li>
              <li key={record.Jobb}>{record.Jobb}</li>
              <li key={record.Företag}>{record.Företag}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
    
    <h3>Gymnasieutbildning</h3>
            <p>2011 - 2014 - Hantverk/Finsnickeri - Trägymnasiet Ljusdal </p>

        <h3>Språk</h3>
            <p>Flytande Svenska och Engelska </p>

        <h3>Körkort</h3>
            <p>B-körkort, även tillgång till egen bil </p>

        <h3>Övriga Egenskaper </h3>        
            <p>Är van vid att sitta i telefon och har även bra kunskaper att felsöka och använda Office och Windows. Är van att jobba med Databaser </p>

        <h3>Referenser </h3>
            <p>Lämnas på begäran </p>

    </>
  );

};

export default Cv;