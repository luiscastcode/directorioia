import React from "react";
import { CookieConsent } from "react-cookie-consent";

const CookieCo = () => {
  return (
    <div className="cookie">
      <CookieConsent
        location="bottom"
        buttonText="De acuerdo!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Este sitios usa cokkies para mejorar la experiencia.{" "}
      </CookieConsent>
    </div>
  );
};

export default CookieCo;
