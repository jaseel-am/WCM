import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Output   } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isActive(routes: string[]): boolean {
    return routes.some(route => this.router.isActive(route, false));
  }
}