# app
NO SQL lesson : https://fr.coursera.org/learn/sig-1/lecture/lRfNL/bases-de-donnees-nosql
Tutoriel - Express/NodeJS/MongoDB : https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2

App def :
Users
Events

Mongo DB structure :

Users
{
  _Id: <ObjectID>
  first_name: <String>
  last_Name: <String>
  age: <int>
  Adress: {
            street: <String>,
            city: <String>,
            post_code: <int>
            Country: <int>,
          }
}

Event
{
  _Id: <ObjectID>
  name: <String>
  description: <String>
  date: <date+hour>
  Adress: {
            street: <String>,
            city: <String>,
            post_code: <int>
            Country: <int>,
          }
}

Fonctionalities :
1st :
  Users
    Create an user account
    Modifie user account
    Delete user account
  User can :
    Create an Event
    Modifie an Event
    Delete an Event

Implementation of this in BD and in JS.

2nd :
