import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/Operators';
import { AllService } from '../all.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:any;
  constructor(private _ser:AllService,private _ar:ActivatedRoute,private _r:Router) { }

  ngOnInit(): void {
    this._r.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((e)=>{
      this.isLogin = this._ser.isLogin();
    });
  }

}

// import 'rxjs/add/operator/filter';

// constructor(router:Router) {
//   router.events
//     .filter(event => event instanceof NavigationStart)
//     .subscribe((event:NavigationStart) => {
//       // You only receive NavigationStart events
//     });
// }


// RxJS 6

// router.events.pipe(filter(event => event instanceof NavigationStart))
// Thanks to Peilonrayz (see comments below)

// new router >= RC.3

// import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

// constructor(router:Router) {
//   router.events.forEach((event) => {
//     if(event instanceof NavigationStart) {
//     }
//     // NavigationEnd
//     // NavigationCancel
//     // NavigationError
//     // RoutesRecognized
//   });
// }
// You can also filter by the given event:

// import 'rxjs/add/operator/filter';

// constructor(router:Router) {
//   router.events
//     .filter(event => event instanceof NavigationStart)
//     .subscribe((event:NavigationStart) => {
//       // You only receive NavigationStart events
//     });
// }
// Using the pairwise operator to get the previous and current event also is an nice idea. https://github.com/angular/angular/issues/11268#issuecomment-244601977

// import 'rxjs/add/operator/pairwise';
// import { Router } from '@angular/router';

// export class AppComponent {
//     constructor(private router: Router) {
//         this.router.events.pairwise().subscribe((event) => {
//             console.log(event);
//         });
//     };
// }
