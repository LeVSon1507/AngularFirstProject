import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public traiCay = ['Táo','Nho'];
  public traiCay2 = [
    {ten:'táo',gia:12, haGia:true},
    {ten:'nho',gia:-1 , haGia:false},
    {ten:'cam',gia:15 , haGia:false},
    {ten:'oi',gia:16 , haGia:false},
    {ten:'xoai',gia:17 , haGia:true},
];

}
