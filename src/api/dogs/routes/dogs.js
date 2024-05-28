module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/dogs',
     handler: 'dogs.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
