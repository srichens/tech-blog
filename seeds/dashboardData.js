const { Dashboard } = require('../models');

const dashboarddata = [
  {
    title: 'Dashdata1',
    content: 'Here is some data',    
  },
  {
    title: 'Dashdata2',
    content: 'Here is some more data',    
  },
  {
    title: 'Dashdata3',
    content: 'Here is some other data',    
  },
  {
    title: 'Dashdata4',
    content: 'And some more data',    
  },
];

const seedDashboard = () => Dashboard.bulkCreate(dashboarddata);

module.exports = seedDashboard;
