"use strict";

const { exampleAction, findBoolean } = require("../controllers/axismutualfund");

/**
 * axismutualfund service
 */

module.exports = {
  exampleAction: async () => {
    try {
      const data = await strapi.entityService.findMany(
        "api::mutual-fund-element.mutual-fund-element",
        {
          fields: [
            "field_3_pm_nav_title",
            "field_3pm_nav_cta_text",
            "field_3pm_nav_start_time",
            "field_3pm_nav_end_time",
            "field_3_pm_nav_url_page",
            "field_3_pm_nav_page_on_off",
            "field_3_pm_nav_dropdown",
            "field_3pm_nav_scheme_code",
          ],
        }
      );
      return data;
    } catch (err) {
      return err;
    }
  },
  findBoolean: async () => {
    try {
      const data = await strapi.entityService.findMany(
        "api::mutual-fund-element.mutual-fund-element",
        {
          fields: ["field_3_pm_nav_page_on_off"],
        }
      );
      return data;
    } catch (err) {
      return err;
    }
  },
};
