import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { GridListDynamic } from './grid-list-dynamic.component';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatTabsModule,
    GridListDynamic,
    MatFormField,
    MatLabel,
    MatInputModule
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
