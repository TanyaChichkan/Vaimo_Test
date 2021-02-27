# Online shopping platform Aurora 

![Technology](technology.png)


## Starting the app

### Description

This website is created for online shopping. It allows a shopper to choose products from a wide range of categories, and is adjusted for 2 types of devices (mobile  - with min-screen-width 340px and desktop with min-screen-width 1440px; breakpoints were chosen according to the test layouts). 

### Setting up 

* To start working with the app on your computer, you should first clone/download the repository from GitHub

```shell
git clone https://github.com/TanyaChichkan/Vaimo_Test
```

Move to the project's folder and run the following command to install all the dependencies.

```shell
npm install
```

Afterwards, start the app on the server.

```shell
npm start
```

* To run the app from the browser, follow the link https://tanyachichkan.github.io/Vaimo_Test/

Follow the link in your browser
[http://localhost:4040](http://localhost:4040).

### General information

The website consists of 3 main parts: header, main  - with registration section, and footer.


### Header
Introduces general information, and **changes its theme from transparent background with white-colored icons to white background with black-colored icons while being hovered, or being active**. 

1. Mobile device:
     + contains a magnifier (***search-icon***); when it's clicked, an input for typing a query is shown inside the header; and the pic of the icon is changed into a ***close-icon***;

    + contains a burger-menu, opened by click on ***burger-icon***; when open, it changes the icon into a  close-icon. By pressing it  - the burger-menu will be closed; the menu is opened on the backdrop;

    + the burger-menu introduces:
    1. a list of **categories** and a ***registration block***; by click on ***Women***, another page with sub-categories is opened, choose ***Clothing*** to see all items available for clothing. To return back to the first page of the menu - press ***View all*** (available on each page) or "<" button (on the page with clothing items); 
    ***Categories-->Women-->Clothing-->View all***. Now, only ***Women*** category is available, others can be added dynamically if needed. 

    2. a block with registration; when any of two buttons is clicked (***Registration/Sign In***), the user is authenticated, and a circle with number of chosen products in the cart appears in the header;
    when it's pressed 2 times, it means the user logged out.

2. Desktop device:
    + demonstrates a logo, a navigation menu, an input for the query and a registration block; 
    
    + navigation bar with categories gives a user the same options for choosing a category, as a burger-menu for mobile (see #1.3 for mobile, except a category change is being rendered in the header within navigation block);

    + registration block in the right corner imitates a user's log by clicking on ***Registration/Sign up*** buttons;
    when a user is authenticated, the registration menu is changed into a ***User Info menu***;

    + ***User Info menu*** consists of the user's name, a cart-icon, a circle with number of goods added, and a block with 3 buttons ***Add/Remove items, Sign Out***; all of them are active and can be used. ***Add item*** - number of goods in the circle +1, ***Remove item*** - number decreases by 1, ***Sign Out*** - a user is logged out, and the page returns to its primary view. When the user is logged in again, the number of goods is shown according to all the previous operations, it's changed dynamically. 


### Hero section
It's changed on the **desktop device**, if the user is logged in, and its max-width is fixed up to 500px of the mobile (to keep the picture, and not to widen it, as it looses its quality being stretched);

### Footer section
Introduces regular information to the user, and it also ***shows category details*** to the user on the ***mobile device***. To see the details for each category, click on any part of the ***category item*** or (*>*).



        












