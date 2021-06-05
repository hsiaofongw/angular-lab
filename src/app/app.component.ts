import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  x=1;
  title = 'angular-lab';

  ngOnInit() {
    window.setInterval(() => window.console.log(this.x), 1000);
  }
}
