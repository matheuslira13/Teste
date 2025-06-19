import React from "react";
import background from "../../assets/oncaDesktop.png";

const BackgroundLayout = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundLayout;
