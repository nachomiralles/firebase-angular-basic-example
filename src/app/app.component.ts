import { Component } from '@angular/core';
import {FirebaseInitializerService} from './providers/firebase-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    FirebaseInitializerService.initialize();
  }
  title = 'Tour of Heroes';

}
