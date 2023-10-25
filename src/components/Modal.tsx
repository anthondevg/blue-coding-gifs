"use client";
import React, { useState } from "react";

export default function Modal({
  isOpen = false,
  url = "https://media1.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=2749b2dbntil15axgycwvwfc9lv1d15njtqugjd11djbmnl9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
}: any) {
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return <div></div>;
  return (
    <div
      className={`bg-black/80 absolute h-screen w-screen ${
        modalIsOpen ? "hidden" : ""
      }`}
    >
      <div className="p-2 bg-black fixed top-2">
        <div>
          <div id="app" />
          <div id="modals" />
        </div>

        <button className="text-white" onClick={closeModal}>
          X
        </button>
        <div>
          <img className="rounded h-40 w-full" src={url} />
        </div>
      </div>
    </div>
  );
}
