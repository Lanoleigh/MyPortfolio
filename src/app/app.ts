import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatGridList, MatGridTile } from '@angular/material/grid-list'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatTabsModule,
    MatGridList,
    MatGridTile
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
