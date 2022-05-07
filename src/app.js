/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];
  for (let adjective of adjectives) {
    for (let pronoun of pronouns) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          console.log(pronoun + adjective + noun + extension);
        }
      }
    }
  }
};
