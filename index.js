$(function() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    const newItem = $(event.currentTarget)
      .find($('input[name="shopping-list-entry"]'))
      .val();
    $(".shopping-list").append(
      `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
    );
  });
// test
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    const itemText = $(event.currentTarget)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(event.currentTarget)
      .closest("li")
      .remove();
  });
});
