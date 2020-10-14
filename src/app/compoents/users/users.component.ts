import { Component, OnInit } from '@angular/core';
import {user} from '../../models/user';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : user[];
Loaded :boolean=false;
hide=false;
  constructor(private data:DataService) { }

  ngOnInit() {
     setTimeout(() => {
    //  this.data. getUsers().subscribe(users => {
    //   this.users=users;
    //   this.Loaded=true;
    //  });
    
    this.users=this.data.getUsers();

    },2000);
    
this.Loaded=true;
  }
ToggleUser(user: user ){
  user.hide=!user.hide;

}  
  
}
