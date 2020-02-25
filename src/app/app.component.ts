import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchneiderApp';
  showHeader: boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
  }

}
