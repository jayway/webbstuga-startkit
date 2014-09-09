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
    $item.find('button').click(function (e) {
      e.stopPropagation();
      removeItem($item);
    });

    $items.append($item);
  }

  function removeItem($item) {
    // TODO: Add animation
    $item.one('animationend webkitAnimationEnd', function () {
      $item.remove();
    });
    $item.toggleClass('removing');
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
