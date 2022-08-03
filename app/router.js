import EmberRouter from '@ember/routing/router';
import config from 'pop-pays-ember-interview/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('location', { path: '/location/:location_id' });
});
