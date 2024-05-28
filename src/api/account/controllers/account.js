'use strict';
/**
 * account controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::account.account');
// ,({strapi})=>({
//     async findMany(ctx){
//         try{
//             const data=await strapi.entityService.findMany("api::account.account",{
//                 fields:["name","balance"],
//             });
//             ctx.body=data;
//         }catch(err){
//             ctx.body=err
//         }
//     }
// }));
