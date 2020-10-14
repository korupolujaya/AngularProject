import { Injectable } from '@angular/core';
// import { Observable , of } from 'rxjs/Observable';

import { user }  from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
users :user[];
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        image : 'https://images.freeimages.com/images/small-previews/679/stephanie-on-bench-1215080.jpg'
        
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        image : 'https://placekitten.com/g/350/350'
       
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        },
        image:'https://lorempixel.com/400/200'
      }
      ];
   }

//    getUsers():Observable<user[]>{

// return of(this.users);
 getUsers():user[]{
   return this.users;
 }

   }

