export default class Poke {
  constructor(data) {
    this._id = data._id;
    this.name = data.name;
    this.img = data.img || data.sprites.front_default;
    this.weight = data.weight;
    this.height = data.height;
    this.types = data.types;
  }

  get Template() {
    return; /*html*/
    `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
  }
}
