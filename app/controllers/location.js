import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class LocationController extends Controller {
  @service store;

  x = console.log(this, 'LocationController')
  get cityName() {
    console.log('this.store', this);
    return 'Tel Aviv';
  }
}
