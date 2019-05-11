import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit {

  model: Order = new Order();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // form submitted
    console.log('form submitted');
    console.log(this.model);
  }
}

export class Order {
  user: string;
  contact: string;
}
