# Sparta-Jquery-Shopping
# Sparta-grid-maker
**By : Erica P da Silva Correia**

####Work description :

1. Submit item typed in the form to the list that corresponds with the selected shop in the dropdown menu
2. list items must disappear when double clicked.
3. list items get striked when clicked.

####Tech Used :
**Jquery, HTML, CSS**

-----
#####how to download :


1. go to the github page [**https://github.com/EricaDaSilvaCorreia**](https://github.com/EricaDaSilvaCorreia)
2. Click repositories and select the repository [**Sparta-JQuery-Shopping**](https://github.com/EricaDaSilvaCorreia/Sparta-Jquery-Shopping)
3. Click 'Clone or Download'
4. Choose between **Open in Desktop**, **Download ZIP**, **Clone with SSH**, **Clone with HTTPs**

-----


#####Challenges :

The main issue I had with the assignment was that whenever I clicked the add button or submitted by hitting enter, the page would refresh. after a few tries I thought it must've been some sort of default event attached to the button so I did some research on how to stop this from happening and I came across prevent default which, as the name suggests, prevented the page from refreshing whenever I clicked the 'add' button or hit enter. 

Other than that I couldn't seem to be able to use the id of the form to make the main function work (See Below : What I had on Friday, this version didn't work at all, don't quite understand why? maybe I'm overlooking something?). 

After I replaced some things, it would either submit a blank list item whenever I clicked the input until I realised that I didn't want to target the whole form per se, but just the botton and add all the things I wanted to be trggered by clicking the button inside that function and after that everything else went smoothly.

~~~Jquery

  $('#shoppingForm').on('click','submit', function (e) {
     
       const dropDown = $(':selected').val();
       const toBuy = $('#addToList').val();
       const newItem = '';
     
       switch (dropDown) {
         case 'shop_1':
         const li = $(`<li></li>`).text(toBuy);
         $('.shoppingList1').append(li);
         e.preventDefault($('.shoppingList1'));
         console.log($('.shoppingList1').append(li));
           break;
         case 'shop_2':
         newItem = $(`<li></li>`).text(toBuy);
         $('.shoppingList2').append(newItem);
         e.preventDefault();
           break;
         case 'shop_3':
         newItem = $(`<li></li>`).text(toBuy);
         $('.shoppingList3').append(newItem);
         e.preventDefault();
           break;
         case 'shop_4':
         newItem = $(`<li></li>`).text(toBuy);
         $('.shoppingList4').append(newItem);
         e.preventDefault();
           break;
         default:
     
       }//close switch
     
     
     })//close submit

~~~


-----

#####Take-Aways :

Over all I think that the assignment went really well. most of my breakthroughs and eureka moments with this assignment came after I took a break from it to go refresh all the knowledge obtained this week. Once I was done regrouping and came back to try and tackle it again, I noticed that it took less tries compared to other assignments before I knew exactly what I needed to target and what I needed to write to get the result I wanted. 

I think that this week was really helpful in terms of me starting to put structure before design in my thought process which is great, I feel like I have level 1 x-ray vision now, and I'm pretty impressed with my progress so far. I'm very eager to put it all to the test this week and see what comes out of it and what I need to work on improving next.

Other than that I give it an 8/10.


-----


