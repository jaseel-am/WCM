import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Output  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './left-menu.component.html', 
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  isCollapsed = false; // Tracks if the menu is collapsed

  @Output() menuToggle = new EventEmitter<boolean>(); // Emit the collapse state to parent

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.menuToggle.emit(this.isCollapsed); // Emit the current state
  }
 }
