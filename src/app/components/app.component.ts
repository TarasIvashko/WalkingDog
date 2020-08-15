import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserServiceService) {
  }
gett(){
    this.userService.getAllUsers().subscribe(value => console.log(value));
}


}
