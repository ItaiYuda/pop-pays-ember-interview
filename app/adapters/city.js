import ApplicationAdapter from './application';

export default class CityAdapter extends ApplicationAdapter {
  urlForFindRecord(location_id) {
    return this.urlPrefix('/api/forecast.json');
  }
}
