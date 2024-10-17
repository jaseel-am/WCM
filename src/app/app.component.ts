import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MasterLayoutComponent,FooterComponent],
  // imports: [RouterOutlet, HeaderComponent, FooterComponent, LeftMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WCM';
  constructor() {
    console.log('app component triggered');
  }
}
