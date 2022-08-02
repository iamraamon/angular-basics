import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RamComponent } from './components/ram/ram.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeDomainComponent } from './components/joke-domain/joke-domain.component';
import { JokeNestingComponent } from './components/joke-nesting/joke-nesting.component';
import { JokeNestingInputComponent } from './components/joke-nesting-input/joke-nesting-input.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeFormListComponent } from './components/joke-form-list/joke-form-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgBuiltinDirectivesComponent } from './components/ng-builtin-directives/ng-builtin-directives.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgStyleClassComponent } from './components/ng-style-class/ng-style-class.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomDefaultPipePipe } from './pipe-custom/custom-default-pipe.pipe';
import { PipeAsyncComponent } from './components/pipe-async/pipe-async.component';
import { CustomLowerCasePipe } from './pipe-custom/custom-lower-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RamComponent,
    JokeListComponent,
    JokeDomainComponent,
    JokeNestingComponent,
    JokeNestingInputComponent,
    JokeFormComponent,
    JokeFormListComponent,
    ProductListComponent,
    NgBuiltinDirectivesComponent,
    LifeCycleComponent,
    NgStyleClassComponent,
    PipesComponent,
    CustomDefaultPipePipe,
    PipeAsyncComponent,
    CustomLowerCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
