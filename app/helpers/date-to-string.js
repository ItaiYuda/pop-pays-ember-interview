import Helper from '@ember/component/helper';

export default class dateToString extends Helper {
  compute([date], { format = 'dd/mm/yyyy' }) {
    return new Date(date * 1000).toLocaleDateString();
  }
}
