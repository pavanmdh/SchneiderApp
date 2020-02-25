import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'group-details',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupDetailsComponent implements OnInit {

  items: Array<any> = [];
  dropItems : Array<any> = [];
  detailsSubscription: Subscription;
  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.detailsSubscription = this.configurationService.getGroupDetails().subscribe(data => {
      this.items = data;
    })
  }

  ngDocheck() {
    this.items = [];
  }

  ngOnDestroy() {
    this.detailsSubscription.unsubscribe();
}

}
