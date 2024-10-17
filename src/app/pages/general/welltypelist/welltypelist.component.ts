import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  standalone: true,
  templateUrl: './welltypelist.component.html',
  styleUrls: ['./welltypelist.component.scss']
})
export class WelltypelistComponent {
  constructor(private router: Router) { }
  goToGeneralInfo(): void {
    this.router.navigate(['/transaction/generalinfo']); 
  }
}
