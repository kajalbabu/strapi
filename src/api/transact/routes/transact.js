"use strict";

/**
 * transact router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::transact.transact");
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/transacts",
      handler: "transact.findMany",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
