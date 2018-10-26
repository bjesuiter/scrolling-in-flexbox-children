import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';

  lineCount = 30;
  lines = [];

  getLines(count: number) {
    const lines = [];

    for (let i = 0; i < count; i++) {
      lines.push(`Line Number ${i}`);
    }

    return lines;
  }
}
