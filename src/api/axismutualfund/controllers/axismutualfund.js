"use strict";

const { exampleAction } = require("../../dogs/controllers/dogs");

/**
 * A set of functions called "actions" for `axismutualfund`
 */

module.exports = {
  async exampleAction(ctx) {
    try {
      const data = await strapi
        .service("api::axismutualfund.axismutualfund")
        .exampleAction();
      ctx.body = data;
    } catch (err) {
      ctx.throw(err);
    }
  },
  async findBoolean(ctx) {
    try {
      const data = await strapi
        .service("api::axismutualfund.axismutualfund")
        .findBoolean();
      ctx.body = data;
    } catch (err) {
      ctx.throw(err);
    }
  },
};

// module.exports = {
//   exampleAction: async (ctx, next) => {
//     try {
//       const data = await strapi.entityService.findMany(
//        "api::mutual-fund-element.mutual-fund-element",
//         {
//           fields: [
//             "field_3_pm_nav_title",
//             "field_3pm_nav_cta_text",
//             "field_3pm_nav_start_time",
//             "field_3pm_nav_end_time",
//             "field_3_pm_nav_url_page",
//             "field_3_pm_nav_page_on_off",
//             "field_3_pm_nav_dropdown",
//             "field_3pm_nav_scheme_code",
//           ],
//         }
//       );
//       return data;
//     } catch (err) {
//       ctx.body = err;
//     }
//   },

