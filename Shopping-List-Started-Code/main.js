$(document).ready(function(){
  // Your code here

  //Header : shoppingList
  //drop down menu with 4 optons connected to the list according to the name
  //button adds input to list
  //list retains values input
  //double click on item in list =remove item

  //MAIN FUNCTION (BUTTON EVENT 1)

  $('button').on('click', function (e) {

    //LET
    let dropDown = $('#selectShop.shop').val();
    let toBuy = $('#addToList').val();
    let newItem = '';

    //SWITCH
    switch (dropDown) {
      case 'shop_1':
      newItem = $(`<li class="list-item"></li>`).text(toBuy);
      $('.shoppingList1').append(newItem);
      break;
      case 'shop_2':
      newItem = $(`<li class="list-item"></li>`).text(toBuy);
      $('.shoppingList2').append(newItem);
      break;
      case 'shop_3':
      newItem = $(`<li class="list-item"></li>`).text(toBuy);
      $('.shoppingList3').append(newItem);
      break;
      case 'shop_4':
      newItem = $(`<li class="list-item"></li>`).text(toBuy);
      $('.shoppingList4').append(newItem);
      break;
      default:

    }//close switch

    //LIST EVENTS
    //When list item is clicked once, item is striked through
    $('li').click(function (e) {
      $(this).addClass('strike');
    }); //close click

    //When list item is double-clicked, item disappears/is removed
      $('li').dblclick(function (e) {
        $(this).remove();
      }); //close dblclick

  })//close function

  // BUTTON EVENTS (BUTTON EVENT 2)

  $('button').click(function (event) {
    event.preventDefault();

  })// close button


})// close $(document).ready(function()
