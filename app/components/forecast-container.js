import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ForecastContainerComponent extends Component {
  @service router;

  @action onBack() {
    this.router.transitionTo('home');
  }
}
