import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

 /* jokes: [ {setup:any,
punchline:any,
hide:any}];*/
jokes:any;
//joke:any;

	constructor() {
		this.jokes = [
			{
				setup: "What did the cheese say when it looked in the mirror?",
				punchline: "Hello-Me (Halloumi)",
				hide: true
			},
			{
				setup: "What kind of cheese do you use to disguise a small horse?",
				punchline: "Mask-a-pony (Mascarpone)",
				hide: true
			},
			{
				setup: "A kid threw a lump of cheddar at me",
				punchline: "I thought ‘That’s not very mature’",
				hide: true
			},
		];
	}
  ngOnInit(): void {
   
  }

	toggle(joke:any) {
		joke.hide = !joke.hide;
	}

}
