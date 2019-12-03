import PokeService from "../Services/PokeService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = "";
  store.State.pokemon.forEach(pokemon => {
    template += pokemon.Template;
  });
  document.getElementById("pokemon").innerHTML = template;
  console.log();
}
//Public
export default class PokeController {
  constructor() {
    store.subscribe("pokemon", _draw);
  }
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    let form = event.target;
    let name = form.name.value;
    PokeService.search(name).catch(e => {
      debugger;
      console.log(e);
    });
  }
}
