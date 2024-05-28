'use strict';
const {entityService}=require("@strapi/strapi").factories;
/**
 * A set of functions called "actions" for `dogs`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const data=await strapi.entityService.findMany("api::account.account",{
        fields:["name","balance"],
      });
      // ctx.body = 'ok';
      return data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
