import Model from '../model/model';
import View from '../view/view';

class Controller {

  constructor() {
    this.fetchData();
  }

  fetchData() {
    return fetch('./mock-data.json', {
      mode: 'no-cors' })
      .then(res => {
        let contentType = res.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
          return res.json();
        }
        throw new TypeError("No data found");
      })
      .then(element => element.data.map( (entry, index) => new Model(entry, index)))
      .then(models => models.map(model => {
        const view = new View(model);
        view.render();
      }))
      .catch(err => console.log(err))
  }

}

export default Controller;