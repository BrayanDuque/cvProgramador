import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isActive = true;

  toggleNavbar() {
    if (this.isActive === true) {
      this.isActive = false;
    }else {
      this.isActive = true;   
    }
  }
  
}
