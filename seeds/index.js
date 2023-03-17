const sequelize = require('../config/connection');

const seedDashboard = require('./dashboardData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  
  await seedDashboard();

  process.exit(0);
};

seedAll();
