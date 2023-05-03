'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        'Users', 
        [
        { 
          firstName: 'Alex',
          lastName: 'Rivers',
          phoneNumber: '001-222-4444',
          city: 'San Fransico',
          state: 'California',
          gender: 'Female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'David',
          lastName: 'Kallis',
          phoneNumber: '001-444-2222',
          city: 'Las Vegas',
          state: 'Nevada',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Felix',
          lastName: 'Rivera',
          phoneNumber: '002-242-2244',
          city: 'El Paso',
          state: 'Texas',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Stacy',
          lastName: 'Thomas',
          phoneNumber: '002-266-2682',
          city: 'New York City',
          state: 'New York',
          gender: 'Female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Henry',
          lastName: 'Williams',
          phoneNumber: '002-264-8424',
          city: 'Pensacola',
          state: 'Florida',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ], 
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

module.exports = {
async up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
      'Billing', 
      [
        {
          idNumber:'AR.3646',
          billingAmount: '$126',
          minutesUsed: '534mins',
          textsSent: '1,573',
          dataUsed: '86gb',
          outgoingCalls: '116',
         },
        {
          idNumber:'DK.8645',
          billingAmount: '$225',
          minutesUsed: '864mins',
          textsSent: '2064',
          dataUsed: '112gb',
          outgoingCalls: '224',
        },
        {
          idNumber:'FR.2849',
          billingAmount: '$86',
          minutesUsed: '128mins',
          textsSent: '846',
          dataUsed: '68gb',
          outgoingCalls: '86',
        },
        {
          idNumber:'ST.6372',
          billingAmount: '$226',
          minutesUsed: '2098mins',
          textsSent: '1954',
          dataUsed: '120gb',
          outgoingCalls: '398',
        },
        {
          idNumber:'HW.8362',
          billingAmount: '$145',
          minutesUsed: '405mins',
          textsSent: '1022',
          dataUsed: '128gb',
          outgoingCalls: '206',
        },
        ], 
      {}
    );
  },