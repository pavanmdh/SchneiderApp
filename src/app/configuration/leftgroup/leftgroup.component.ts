import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'left-group',
  templateUrl: './leftgroup.component.html',
  styleUrls: ['./leftgroup.component.css']
})
export class LeftGroupComponent implements OnInit {

  selectedGroup: string = "";
  selectedGroupId: string = "";
  applicationGroup: any = {
    "Interlock MV/LV": 1,
    "ZSI": 2,
    "Load Schedule": 3,
    "ATS": 4
  }

  constructor(private configurationServive: ConfigurationService) { }

  ngOnInit() {

  }

  check(data) {
    this.configurationServive.clearProductList();
    this.configurationServive.clearGroup();
    let selectedGroupText = data.target.innerText;
    this.selectedGroupId = this.applicationGroup[selectedGroupText];
    // this.homeService.sendGroupDetails(+this.selectedGroupText);
    this.configurationServive.sendProductListDetails(selectedGroupText);
  }

}
