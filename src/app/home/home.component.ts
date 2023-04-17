import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Son Dep Trai'
  public age = 12

  constructor(){}
  ngOnInit(): void {
  }

  public resetName() :void{
    this.name= '';
  }
}
