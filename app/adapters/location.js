import ApplicationAdapter from './application';

export default class LocationAdapter extends ApplicationAdapter {
  namespace = 'api';

  urlForFindRecord(location_id) {
    return this.urlPrefix('/api/forecast.json');
  }
}
