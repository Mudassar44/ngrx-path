import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autologin } from './auth/store/auth.actions';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AppState } from './store/app.state';
import { getLoading } from './store/shared/shared.selectore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // If we go by the Angular definition, a ComponentFactory is a base class for a factory that can create a component dynamically. Instantiate a factory for a given type of component with resolveComponentFactory(). Use the resulting ComponentFactory. create() method to create a component of that type.

  //https://www.youtube.com/watch?v=8rgwiSr2sUc&ab_channel=JSFrameworks


  title = 'ngrx-path';
  @ViewChild('placeholder',{read:ViewContainerRef, static:true})
  public placeholder : ViewContainerRef;
  showLoading : Observable<boolean> = new Observable;
constructor(private store : Store<AppState>,private resolver : ComponentFactoryResolver) {
    
    
  }
  ngOnInit(): void {
    // this.placeholder.clear();
    //  const componentFactory = this.resolver.resolveComponentFactory(DynamicComponent);
    // const component = this.placeholder.createComponent(componentFactory);
    // component.instance.title = "Dynamic Component";

    this.showLoading = this.store.select(getLoading);

    this.store.dispatch(autologin());
  }
}
