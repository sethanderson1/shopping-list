$(function() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    console.log("clicked submit");
    const newItem = $(event.currentTarget)
      .find($('input[name="shopping-list-entry"]'))
      .val();
    console.log(newItem);
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

  
  
  
  $(".shopping-list").on('click','span:contains("check")',function(event) {
    const clickCheckTarget = $('span:contains("check")');
    console.log(clickCheckTarget);
    // event.preventDefault();
    console.log("clicked check");
    console.log($(event.currentTarget));

    const itemText = $(event.currentTarget)
      .closest("li")
      .find('.shopping-item')
      .toggleClass('shopping-item__checked');
      console.log(itemText);

  });


  $(".shopping-list").on('click','span:contains("delete")',function(event) {
    $(event.currentTarget).closest("li").remove();

  });
});
