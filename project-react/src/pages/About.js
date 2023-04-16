import React, { useContext } from "react";
import { UserInfo } from "../UserInfo";
import styled from "styled-components";
function About() {
  const textAbout = useContext(UserInfo);
  return (
    <div>
      <h1 className="header-about">{textAbout}</h1>
      <Abouttext>
        Välkommen till Täbys katthem där vårt uppdrag är att rädda katter från
        livet som hemlösa och ge dem en trygg miljö och ett kärleksfullt hem
        tills de hittar sina egna riktiga hem. Vi är djupt engagerade i att
        rädda, vårda och adoptera ut hemlösa katter i Täby och dess omgivningar.{" "}
        <br /> <br />
        Vårt katthem drivs av en passion och kärlek för katter och vår
        målsättning är att ge dessa djur en andra chans till ett bättre liv. Vi
        arbetar tillsammans med andra organisationer och frivilliga för att
        hjälpa katter i nöd så att de kan leva lyckliga och hälsosamma liv. På
        vårt katthem har vi ett team av erfarna volontärer som ger katterna
        vårda, mat, vatten, medicinsk behandling och social stimulans. <br />
        <br />
        Vi arbetar också med träningsprogram för nya adoptivfamiljer för att
        säkerställa att våra utplacerade katter hamnar i ett tryggt och
        välkomnande hem. Vi tar in katter som är hemlösa, övergivna eller
        försummade, katter som har skadats eller lider av sjukdomar och som har
        behov av vård och behandling. Vi är stolta över att kunna erbjuda dessa
        katter en varm och trygg plats att bo på tills de kan adopteras av en
        kärleksfull familj. <br />
        <br />
        Som en ideell organisation är vi beroende av donationer och stöd från
        lokalsamhället för att fortsätta vårt arbete. Om du vill hjälpa till, är
        du välkommen att donera ditt tid, bidra med produkter eller göra en
        monetär donation för att bidra till vårt arbete att rädda katter. Tack
        för att du besöker vår sidan och för att du bryr dig om katterna i Täby!
      </Abouttext>
    </div>
  );
}
const Abouttext = styled.p`
  width: 70%;
  text-align: center;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

export default About;
