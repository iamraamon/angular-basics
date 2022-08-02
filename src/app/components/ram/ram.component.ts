import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'raghav',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  sayHello :any ;

   a: any;

   b: any;

   result :any;

   displayResult:any;

   isElseTrue:any


   human:any;

   humanList:any;

  constructor() { }

  ngOnInit(): void {
    this.sayHello= " iam ram saying hello from onInit method";


    this.isElseTrue = true;

     this.displayResult=false;

     this.human={
      "name":"ram",
      "age":30
     };


     this.humanList = [
      {
        "name":"ram",
        "age":30
       },
       {
        "name":"raj",
        "age":30
       },
       {
        "name":"ram",
        "age":37
       }

     ]
  }


  callAddition(){

    console.log(" start callAddition");

    this.a=10;
    this.b=20 ;

    this.result=this.a + this.b ;

    this.displayResult=true;

    console.log(this.result);

    console.log(" end callAddition");
  }


  public callHide(){
    this.displayResult=false;
  }

}
