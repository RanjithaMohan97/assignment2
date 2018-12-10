import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Explore Angular';
  s1 = 'Angular'

  setValue (){
    return "Thankyou";
  }
}
