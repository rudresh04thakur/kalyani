import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllService } from './all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  //messages: any[] = [];
  message:any={};
  subscription: Subscription;

    constructor(private _ser: AllService) {
        
        this.subscription = this._ser.getMessage().subscribe(message => {
          if (message) {
            this.message=message;
            //this.messages.push(message);
          } else {
            // clear messages when empty message received
            //this.messages = [];
            this.message=""
          }
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
