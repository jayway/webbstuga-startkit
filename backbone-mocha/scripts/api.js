define(['when'], function (when) {
  return {
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
});
