import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  public cartList_new;
  totalcost=0
  constructor(private C_service1:CartService) { 
    this.cartList_new=C_service1.setData()

  }

  ngOnInit(): void {

    for(let i=0;i<this.cartList_new.length;i++)
    {
      this.totalcost=this.totalcost+(this.cartList_new[i].price*this.cartList_new[i].qty);
    }

  }


}
