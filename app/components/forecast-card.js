import Component from '@glimmer/component';

export default class ForecastsComponent extends Component {
  get date() {
    console.log('date', this)
  }
}
