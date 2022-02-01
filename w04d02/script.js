console.log('hello from the js file');

console.log('name', username);

// jQuery === $

// const node = document.createElement("LI");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);


$(() => {
  const $li = $('<li>').text('water');

  const $mainList = $('#main-list');
  $mainList.append($li);

  const $inputButton = $('#new-input-button');

  // $inputButton.click(() => {});
  $inputButton.on('click', () => {
    console.log('I got clicked!!!');

    // grab the input field
    const $inputField = $('#new-list-input');

    // get the input field's value
    const inputValue = $inputField.val();
    // console.log('this is the inputValue:', inputValue);

    // create a new li with the input field's value
    const $li = $('<li>').text(inputValue);
    
    // append the new li to the ul
    $mainList.append($li); 

    // clear the input value and give it focus
    $inputField.val('').focus();
  });
});

// $(document).ready(() => {
//   const $li = $('<li>').text('water');

//   const $mainList = $('#main-list');
//   $mainList.append($li);
// });

