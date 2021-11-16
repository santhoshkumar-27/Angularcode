import { Component } from "@angular/core";
import { DataService } from "./service/data.service";

@Component({
    selector: 'app-hello',
    templateUrl: './app.component.html',
    // template: '<h1> {{dataService.count}}</h1>',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})

export class HelloComponent{
    title ="angular";
   
    constructor(public dataService: DataService){}
    user : {name:string; age:number; gender:string;}[] = [
        {name: 'ABC',
        age: 23,
        gender: 'M'},
        {name: 'DEF',
        age: 23,
        gender: 'G'},
        {name: 'GHI',
        age: 23,
        gender: 'M'}
    ]
}
