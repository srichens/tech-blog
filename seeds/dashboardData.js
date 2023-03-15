const { Dashboard } = require('../models');

const dashboarddata = [
  {
    name: 'Dashdata1',
    description: 'Here is some data',    
  },
  {
    name: 'Dashdata2',
    description: 'Here is some more data',    
  },
  {
    name: 'Dashdata3',
    description: 'Here is some other data',    
  },
  {
    name: 'Dashdata4',
    description: 'And some more data',    
  },
];

const seedDashboard = () => Dashboard.bulkCreate(dashboarddata);

module.exports = seedDashboard;
