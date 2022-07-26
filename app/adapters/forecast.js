import ApplicationAdapter from './application';
import ENV from '../config/environment';

export default class ForecastAdapter extends ApplicationAdapter {

  query(store, type, query, recordArray, adapterOptions) {
    const {location_id, useMock} = query
    if(useMock) {
      return this.ajax('/api/forecast.json', 'GET');
    }

    const params = {
      apikey: encodeURIComponent(ENV.weatherApiKey),
    }
    return this.ajax(this.buildURL(location_id), 'GET', { data: params });
  }

  pathForType(modelName) {
    return modelName;
  }
}
