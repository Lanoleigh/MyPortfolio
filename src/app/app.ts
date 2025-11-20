import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { GridListDynamic } from './grid-list-dynamic.component';
import { MatInputModule } from '@angular/material/input'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatTabsModule,
    GridListDynamic,
    MatInputModule,
    MatSlideToggleModule
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {


  toggleTheme(event:any){
    const isAlt = event.checked;
    if(isAlt){
      document.body.classList.add('alt-theme');
    }else{
      document.body.classList.remove('alt-theme')
    }
  }
}
