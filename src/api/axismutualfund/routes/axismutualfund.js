module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/axismutualfund',
     handler: 'axismutualfund.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'GET',
      path: '/boolean',
      handler: 'axismutualfund.findBoolean',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
  
};
