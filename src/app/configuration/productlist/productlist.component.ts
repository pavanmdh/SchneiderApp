import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  lists: Array<any> = [];
  listsSubscription: Subscription;
  selectedProductList: number;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.listsSubscription = this.configurationService.getProductListDetails().subscribe(data => {
      if(data.length === 0) this.selectedProductList = -1;
      this.lists = data;
    })
  }

  check(data: any) {
    this.selectedProductList = +data.target.attributes["data-index"].value
    // this.configurationService.sendGroupDetails(this.selectedProductList);
    this.configurationService.sendGroupDetails(data.target.innerText)
  }

  ngOnDestroy() {
    this.listsSubscription.unsubscribe();
  }

}
