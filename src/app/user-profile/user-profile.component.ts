import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : '25',
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  inputQuote: string;

  constructor() { }

  ngOnInit() {
  }

  hideAge() {
    return this.User.age = '';
  }
}
