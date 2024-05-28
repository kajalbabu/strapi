'use strict';

/**
 * account router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::account.account');

// module.exports={
//     routes: [
//         {
//          method: 'GET',
//          path: '/accounts',
//          handler: 'account.findMany',
//          config: {
//            policies: [],
//            middlewares: [],
//          },
//         },
//       ],
// }
