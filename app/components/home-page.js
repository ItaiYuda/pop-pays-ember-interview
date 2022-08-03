import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomePageComponent extends Component {
  // @service store;
  // @tracked value = '';
  //
  // @action async searchCity() {
  //   if (!this.value) {
  //     return null;
  //   }
  //   const response = await fetch('/api/cities.json');
  //   const cities = await response.json();
  //   const city = cities.find((city) => city.EnglishName === this.value);
  //   console.log(city, this);
  // }
}
