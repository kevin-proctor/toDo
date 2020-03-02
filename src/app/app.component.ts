import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, animateChild, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';



export const routeAnimations  =
trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', top: '0px' }),
    query(':enter, :leave',  [
      style({
        position: 'absolute',
        top: '0px',
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '100%'})
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('600ms ease-out', style({ left: '-100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease-out', style({ left: '0%'}))
      ], { optional: true })
    ])
  ])
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  search: string
  constructor(){

  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && 
    outlet.activatedRouteData['animation'];
    }
}