import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ForecastRoute extends Route {
  @service store;

  async model(params) {
    return await this.store.query('forecast', {location_id: params.location_id, useMock: false});
  }
}
