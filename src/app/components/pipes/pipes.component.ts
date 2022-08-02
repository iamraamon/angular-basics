import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dateVal: Date;

  imageUrl :any;

  persons:any
 // dateVal:Date | undefined;
 // dateVal!: Date;
  constructor() { 

    this.dateVal= new Date();
  }

  ngOnInit(): void {

    this.persons = [ {
      
        "name": "Douglas  Pace",
        "age": 35,
        "country": 'MARS',
        "dob":'2020-12-06'
      },
      {
        "name": "Mcleod  Mueller",
        "age": 32,
        "country": 'USA',
        "dob":'1985-06-06'
      }
    ];

  }

}
