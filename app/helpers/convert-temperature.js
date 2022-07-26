import { helper } from '@ember/component/helper';

export default helper(function convertTemperature([temperature]) {
  return `${Math.round((temperature - 32) * 5 / 9)}°`;
});
