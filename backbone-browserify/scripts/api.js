var when = require('when');

module.exports = {
  getItems: function () {
    return when([
      {
      name: 'Brew beer',
      completed: true
    },
    {
      name: 'Prepare snacks',
      completed: false
    }
    ]);
  }
};
