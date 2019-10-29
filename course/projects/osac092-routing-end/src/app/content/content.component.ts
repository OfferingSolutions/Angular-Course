import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(): void {
    this.router.navigate(['/products']);
  }
}
