import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends Controller {
  @service router;
  @tracked value = '';

  @action async onClick() {
    if (!this.value) {
      return null;
    }
    return this.router.transitionTo(`/location/${this.value}`);
  }

  @action setTelAvivId() {
    this.value = '215854';
  }
}
