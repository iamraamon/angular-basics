import { Component, OnInit,Input } from '@angular/core';
import { Joke } from '../joke';
@Component({
  selector: 'app-joke-nesting-input',
  templateUrl: './joke-nesting-input.component.html',
  styleUrls: ['./joke-nesting-input.component.css']
})
export class JokeNestingInputComponent {
  @Input('joke')
  data!: Joke;
  constructor() { }

  ngOnInit(): void {
  }

}
