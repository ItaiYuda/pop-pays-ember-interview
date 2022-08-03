import Model, { attr } from '@ember-data/model';

export default class CityModel extends Model {
  @attr key;
  @attr localizedName;
  @attr region;
  @attr country;
}
