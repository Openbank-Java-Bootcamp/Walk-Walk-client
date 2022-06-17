1.    PROJECT DESCRIPTION
=========================

_Walk_ _Walk_! is an application designed to facilitate the interaction between dog owners and people who do not have dogs but have the time and desire to spend time with them.

One of the aims of the project was to make the interaction very intuitive in order to be usable for most of ranges of age. The dog owner only has to create an activity for its dog such as walking or running in a specific location and date. Then, another person can choose it if it is interesting for him/her and he/she accepts the date and time of the activity. Finally, they have the contact number of the other user in order to define the exact location and to have a conversation before the activity.

2.    TECHNOLOGIES USED
=======================

The technologies used in this project for the frontend are: React, HTML, JS and CSS.

3.    COMPONENTS AND PAGES STRUCTURE
====================================

\-          HomePage: In case you are not logged in, this page will show the LoginPage. In case you are already logged in, this page will show a Navbar and ActivityListPage.

\-          LoginPage: This page is designed so that users who have already registered in the app can enter it by entering their email and password.

In case they are not registered yet, they will find in this page the option to go to the SignupPage to register in the database by entering: username, email, password and phone number.

\-          Navbar: is an important component through which you can go to MyDogsPage, MyActivitiesPage, ActivitiesListPage and the button to LogOut.

\-          MyDogsPage: Here I can see my list of dogs, add one through a button that takes me to the AddDog component, edit their data or delete them by accessing through the EditDogPage.

\-          MyActivitiesPage: In this page I can see two lists, one with the activities created by me and another one with the activities I have chosen. In this page I have the Add Activity button that takes me to the AddActivity component.

\-          AddActivity: I can only add an activity if I have a dog. When I fill in the form and press submit, I have the Edit Activity option. That takes me to the EditActivity where I can edit the activity data or delete it by pressing Update or Delete.

\-          In addition to the previous pages, the app has also the additional components ActivityCard, ChosenActivityCard, MyActivityCard, IsPrivate and IsAnon which are used to show certain information in the pages.

\-          Auth.Context: Enables the authentication of each user.

4.    FUTURE WORK
=================

As future work the app could be further developed by creating a chat for greater interaction between owners and volunteers to walk dogs.

Another thing to implement would be a rating to evaluate the activities.

Finally, it would also be interesting if users could visit the profiles of other users. Showing the dogs that the user have, and all the information related with activities.

5.    RESOURCES
===============

Some of the resources used to improve the application have been:

\-          Pexels: to find photos and backgrounds ([https://www.pexels.com/es-es/](https://www.pexels.com/es-es/)).

\-          Canva: free web site to design logos ([https://www.canva.com/](https://www.canva.com/)).

\-          CodeSandBox: where to find design ideas ([https://codesandbox.io/](https://codesandbox.io/)).

\-          Trello: [https://trello.com/b/VWVadwtS/walk-walk-final-project](https://trello.com/b/VWVadwtS/walk-walk-final-project)

\-          The material provided in the classes.

\-          Other pages to find information:

o   [https://stackoverflow.com/](https://stackoverflow.com/)

o   [https://www.w3schools.com/](https://www.w3schools.com/)