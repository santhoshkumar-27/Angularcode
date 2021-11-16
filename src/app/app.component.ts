import { Component, Input } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcode';
  @Input() eventName: string = "";
  objectName = "test";
  test ="This is our entertainer <script></script>";
  constructor(public dataService: DataService){
  }
  user = null;
  users : {name:string; age:number; gender:string;}[] = [
    {name: 'ABC',
    age: 23,
    gender: 'M'},
    {name: 'DEF',
    age: 23,
    gender: 'F'},
    {name: 'GHI',
    age: 23,
    gender: 'M'}
]

  increaseCount(){
    this.dataService.count++;
  }
  print(event:any): void{
    console.log(event)
    this.eventName = event.target.value;
  }
  
}
