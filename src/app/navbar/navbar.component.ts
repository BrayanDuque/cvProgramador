import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLink, CommonModule, RouterLinkActive, ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isActive = true;

  toggleNavbar() {
      this.isActive = !this.isActive;
  }
  
}
