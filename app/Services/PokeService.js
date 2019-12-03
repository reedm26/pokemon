import Store from "../store.js";
// @ts-ignore
let _pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 8000
});
class PokeService {
  search(name) {
    return _pokeApi.get("pokemon/" + name).then(res => {
      Store.commit("pokemon", res.data);
    });
  }
}

const service = new PokeService();
export default service;
