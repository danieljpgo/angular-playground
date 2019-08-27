import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedIndex: number = 0;
  tabs: number = 3;

  title = 'angular-playground';

  onSwipeleft(event) {
    console.log('teste2');
    if(this.selectedIndex + 1 <= this.tabs - 1) {
      this.selectedIndex += 1;
    }
  }

  onSwiperight(event) {
    console.log('teste');
    if(this.selectedIndex - 1 >= 0) {
      this.selectedIndex -= 1;
    }
  }
}
