import ApplicationSerializer from './application';

export default class CitySerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log({payload})
    return {
      data: {
        id,
        type: 'location',
        attributes: {
          payload,
        },
      },
    };
  }
}
