import { helper } from '@ember/component/helper';

export default helper(function iconPath([iconId] /*, named*/) {
  return `/icons/${iconId}.svg`;
});
