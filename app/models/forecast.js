import Model, { attr } from '@ember-data/model';

export default class ForecastModel extends Model {
  @attr date;
  @attr minTemperature;
  @attr maxTemperature;
  @attr description;
  @attr iconId;
}
