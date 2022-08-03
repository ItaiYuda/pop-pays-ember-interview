import ApplicationSerializer from './application';

export default class LocationSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const dailyForecasts = payload.DailyForecasts.map(
      (item) =>
        ({
          id:item.Date,
          type: 'location',
          attributes: {
            date: item.Date,
            epochDate: item.EpochDate,
            maxTemperature: item.Temperature.Maximum.Value,
            minTemperature: item.Temperature.Minimum.value,
            description: item.Day.IconPhrase,
          },
        })
    );
    return {
      data: dailyForecasts,
    };
  }
}
