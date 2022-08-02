import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-ng-builtin-directives',
  templateUrl: './ng-builtin-directives.component.html',
  styleUrls: ['./ng-builtin-directives.component.css']
})
export class NgBuiltinDirectivesComponent implements OnInit {

  persons:Person[]
  personsOld:any[];

  displayResult:any;

  isElseTrue:any

  constructor() {

    this.isElseTrue = true;

    this.displayResult=false;

    this.persons=[

  new Person("ram",37,"India",new Date('06/06/1985')),
  new Person("Raghav",3,"India",new Date('07/08/2019')),
  new Person("Neha",7,"India",new Date('06/18/2016'))
    ]

    this.personsOld=[
      {
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
      },
      {
        "name": "Day  Meyers",
        "age": 21,
        "country": 'HK',
        "dob":'2015-18-06'
      },
      
      {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'Australia'
        ,
        "dob":'2020-12-06'
      },
      {
        "name": "Aguirre  Ellis",
        "age": 34,
        "country": 'UK',
        "dob":'2020-12-06'
      },
      {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'USA',
        "dob":'2020-12-06'
      },
      {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'India',
        "dob":'2020-12-06'
      }
    ];
    

   }

  ngOnInit(): void {
  }

  getColorCode(countryname:string):string {

switch(countryname){
   case  'UK' :  return 'green';
   case  'USA' :  return 'yellow';
   case  'MARS' :  return 'Red';
   case  'HK' :  return 'grey';
   default : return 'indigo';

}


    return '';
  }

}
