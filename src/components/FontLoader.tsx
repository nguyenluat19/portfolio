import React from "react";
import { Helmet } from "react-helmet";
export function FontLoader() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          .font-sans { 
            font-family: "Inter", sans-serif; 
            font-display: swap; 
          }
          .font-heading { 
            font-family: "Poppins", sans-serif; 
            font-display: swap; 
            line-height: 1.2;
          }
        `}
      </style>
    </Helmet>
  );
}
