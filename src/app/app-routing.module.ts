import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {JokeListComponent}  from './components/joke-list/joke-list.component';
import  {RamComponent}  from './components/ram/ram.component';
import  {JokeDomainComponent}  from './components/joke-domain/joke-domain.component';
import { JokeNestingComponent } from './components/joke-nesting/joke-nesting.component';
import {JokeFormListComponent} from './components/joke-form-list/joke-form-list.component'
import {ProductListComponent} from './components/product-list/product-list.component'
import { NgBuiltinDirectivesComponent } from './components/ng-builtin-directives/ng-builtin-directives.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgStyleClassComponent } from './components/ng-style-class/ng-style-class.component';
import { PipesComponent } from './components/pipes/pipes.component';
const routes: Routes = [
 
  {path: '', redirectTo: 'ram', pathMatch: 'full'},
   { path:'joke-list' , component:JokeListComponent },
   { path:'ram' , component:RamComponent },
   { path:'joke-domain' , component:JokeDomainComponent },
   { path:'joke-nesting' , component:JokeNestingComponent },
   { path:'joke-form-list' , component:JokeFormListComponent },
   { path:'product-list' , component:ProductListComponent },
   {path:'ng-builtin-directives',component:NgBuiltinDirectivesComponent},
   {path:'life-cycle',component:LifeCycleComponent},
   {path:'ng-style-class',component:NgStyleClassComponent}
   ,
   {path:'pipes',component:PipesComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
