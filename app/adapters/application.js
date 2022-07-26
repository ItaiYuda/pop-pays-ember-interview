import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}
