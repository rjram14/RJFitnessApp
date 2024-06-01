import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isCurrentPage: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCurrentPage = this.router.url === '/forget-password' || this.router.url === '/signup' || this.router.url === '/subscribe'|| this.router.url === '/login';
      }
    });
  }
  
  

}
