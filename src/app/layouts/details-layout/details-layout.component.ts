import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { LeftMenuComponent } from '../../shared/left-menu/left-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HeaderComponent,LeftMenuComponent],
  templateUrl: './details-layout.component.html',
  styleUrl: './details-layout.component.scss'
})
export class DetailsLayoutComponent {
  isCollapsed = false; // Tracks the state of the left menu

  onMenuToggle(collapsed: boolean) {
    this.isCollapsed = collapsed;
  }
}
