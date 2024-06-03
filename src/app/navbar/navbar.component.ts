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

  isVisible: boolean = false;

  toogleNavbar = ()=>{
   this.isVisible = !this.isVisible;
  }
}
