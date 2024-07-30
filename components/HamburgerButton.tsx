"use client";
import Hamburger from "hamburger-react";

function HamburgerButton() {
  return (
    <div className="fixed bottom-10 right-10 z-[999]">
      <div className="bg-hover p-3 rounded-3xl scale-[.5] origin-bottom-right">
        <Hamburger color="#18181C"/>
      </div>
    </div>
  );
}

export default HamburgerButton;
