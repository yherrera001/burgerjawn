import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  menuItems = [{ //sample class
    id : 1,
    name : 'French Fries',
    description : 'Exra Salty, Greased Up, and Hot',
    price : 5,
   amount : 0,
   featured : false, //highlight the item
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5yIGSLD2zMxRF-yEQiFhdAcWP7nIC9bjZJQ&usqp=CAU',
  },
    {
    id : 2,
    name : 'Burgers',
    description : 'Beefy, Juicy, and Hot',
    price : 10,
    amount: 0,
    featured : true, //highlight the item
    image : 'https://images-cdn.9gag.com/photo/aV0BdEw_700b.jpg'},
    {
      id : 3,
      name : 'Soda',
      description : 'Sweet, Sparkling, and COLD!',
      price : 2,
      amount : 0,
      featured : false, //hightlight the item
      image : 'https://www.uncommoncaribbean.com/wp-content/uploads/2019/08/DSC_0223-2048x1365.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

 cart = 0
 total = 0
increasedAmount(menuItem){
  menuItem.amount++;
  this.cart++;
  this.total += menuItem.price;
    }

    decreasedAmount(menuItem){
      if(menuItem.amount > 0){
        menuItem.amount--;
        this.cart--;
        this.total -= menuItem.price;
       }
    }
}
  