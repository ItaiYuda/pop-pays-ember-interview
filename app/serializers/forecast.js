import ApplicationSerializer from './application';

export default class ForecastSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      data: payload.DailyForecasts.map((info) => {
        return {
          id: info.EpochDate,
          type: 'forecast',
          attributes: {
            date: new Date(info.EpochDate),
            minTemperature: info.Temperature.Minimum.Value,
            maxTemperature: info.Temperature.Maximum.Value,
            description: info.Day.IconPhrase,
            iconId: info.Day.Icon,
          },
        };
      }),
    };
    return payload;
  }
}
