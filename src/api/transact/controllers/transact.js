'use strict';

/**
 * transact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transact.transact',({strapi})=>({
    async findMany(ctx){
        try{
            const data=await strapi.entityService.findMany('api::transact.transact',{
                fields:["sender","receiver","amount"],
            });
            ctx.body=data;
        }catch(err){
            ctx.data=err;
        }
    }
}));
