import PokeService from "../Services/PokeService.js";
import store from "../store";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
export default class PokeController {
  constructor() {
    store.subscribe("values", _draw);
  }
}
