// const container = $("#container");
// console.log(container);

// $("#items").append("<li>My first item</li>");
// $("#items").append("<li>My second item</li>");

// `<li>${item}</li>` - template literals
// addToList("Wash Clothes");
// addToList("Prepare for my exam");

function addToList(item) {
  $("#items").append(
    "<li>" + item + " <span class='label pending'>Pending</span></li>"
  );
}

function updateTotal() {
  const pending = $(".pending").length; // number of pending tasks
  const completed = $(".success").length; // number of completed tasks

  // this adds value in between the opening and closing tag of an HTML element
  $("#task-length").text("Pending: " + pending + " Completed: " + completed);
}

$(document).ready(function () {
  $(document).on("click", "button", function (event) {
    // prevent the default action of a form
    event.preventDefault();

    // accessing the input element
    const todoInput = $("#todo-item").val(); // getting the value

    if (todoInput !== "") {
      // add the input item to the unordered list
      addToList(todoInput);
      updateTotal();

      // put the focus back to the input element
      $("#todo-item").focus();
    }
  });

  // when the input is in focus or highlighted
  $("#todo-item").focus(function () {
    $(this).val(""); // setting the input value
  });

  // target the click event on the .pending class
  $("#items").on("click", ".pending", function () {
    // access the parent (li), then attaches the "Done" label to the li element
    $(this).parent().append("<span class='label success'>Done</span>");

    // remove the "Pending" label
    $(this).remove();

    // recalculate the pending and completed tasks
    updateTotal();
  });

  updateTotal();
});
