/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  const allDomains = GetAllNames();

  var ul = document.createElement("ol");

  document.getElementById("renderList").appendChild(ul);

  const listItems = allDomains
    .map((element, position, array) => `<li>${element}</li>`)
    .join("");

  ul.innerHTML = listItems;
  console.log(allDomains);
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".us", ".org"];

function GetAllNames() {
  const domains = [];
  for (const pnoun of pronoun) {
    for (const adjetive of adj) {
      for (const n of noun) {
        for (const extension of extensions) {
          let tempName = pnoun + adjetive + n + extension;
          domains.push(tempName);
        }
      }
    }
  }
  return domains;
}
