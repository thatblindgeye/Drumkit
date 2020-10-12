"use strict";

function removeClass(e) {
    if(e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }
  
  function playClickSound(e) {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    const key = document.querySelector(`div[data-key="${this.dataset.key}"]`);
    if (!audio) return;
  
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
  
  function playKeySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
  
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
  
  const btn = document.querySelectorAll("div[data-key]");
  btn.forEach(item => item.addEventListener("transitionend", removeClass)); 
  btn.forEach(item => item.addEventListener("click", playClickSound));
  window.addEventListener("keydown", playKeySound);