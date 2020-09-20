import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PdctService } from '../pdct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pList:any;
  cartlist:any[]
  constructor(private service:PdctService, private C_service:CartService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(list=>{
      this.pList=list
      this.cartlist=[];
      console.log(this.pList)
      for(let i =0;i<this.pList.length;i++)
    {
      this.pList[i].qty=0
    }
      
    })
    
  }

  dec(o)
  {
    if(o.qty>0)
    {
      for(let i=0;i<this.pList.length;i++)
    { 
      if(this.pList[i]==o)
      {
        this.pList[i].qty=this.pList[i].qty-1;
        break;
      }
    }
    }
  }

  inc(o)
  {
    
      for(let i=0;i<this.pList.length;i++)
    { 
      if(this.pList[i]==o)
      {
        this.pList[i].qty=this.pList[i].qty+1;
        break;
      }
    }
    
  }

  add2Cart(o)
  { let elementfound:Boolean =false
    
    for(let i=0;i<this.cartlist.length;i++)
    {
      if(this.cartlist[i].name==o.name)
      {
        this.cartlist[i].qty=o.qty
        console.log("updated cart list",this.cartlist)
        elementfound=true
      }
    }
    if(elementfound==false)
    {
      this.cartlist.push(o);
    console.log("this is the cart list",this.cartlist)
    }

    this.C_service.getData(this.cartlist)
  }

  

}
