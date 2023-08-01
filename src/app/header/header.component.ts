import { Component, OnInit } from "@angular/core";
import { ShoppingService } from "../shared/services/shopping.service";

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  constructor(private shopServe : ShoppingService){}

  ngOnInit() :void {

  }
}
