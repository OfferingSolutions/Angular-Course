import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this._route.params.forEach((params: Params) => {
    //     let id = +params['id'];
    //     this.id = id;
    // });

    // this.id = this.route
    //     .queryParams
    //     .map(params => +params['id'] || -1);

    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
