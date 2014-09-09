$(function () {
  var itemTemplate = _.template(
    '<li class="item">' +
      '<h2><%= name %></h2>' +
      '<button>Remove</button>' +
    '</li>'
  );
  var $items = $('.items-container .items');

  function addItem(item) {
    var $item = $(itemTemplate(item));

    if (item.completed) {
      $item.toggleClass('completed');
    }

    // Toggle completed state on click.
    $item.click(function () {
      $item.toggleClass('completed');
    });

    // Remove on remove button click.
    $item.find('button').click(function () {
      $item.remove();
    });

    $items.append($item);
  }

  function removeItem($item) {
    // TODO: Add a class with transition or an animation and then remove the
    // element.
    $item.remove();
  }

  $('.add-item').submit(function (e) {
    e.preventDefault();

    // Find input element.
    var $form = $(this);
    var $input = $form.find('input[name=item-name]');

    // Construct item.
    var item = {
      name: $input.val()
    };

    // Reset form.
    $input.val('');

    // Add it to the item list.
    addItem(item);
  });

  // Add stubs directly.
  _.each(window.items, addItem);
});
