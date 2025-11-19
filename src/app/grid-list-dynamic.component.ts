import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule} from '@angular/material/chips';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  description : string;
  linkToRepo: string;
  imgOfProject : string;
}

@Component({
  selector: 'grid-list-dynamic',
  templateUrl: './grid-list-dynamic.component.html',
  standalone: true,
  imports: [
    MatGridListModule,
    MatChipsModule,
  ],
})


export class GridListDynamic {
  tiles: Tile[] = [
    {text: 'Municipality',
      description:"A mock web app of a municipality, where citizens can report issues that happen in their area, they can track service requests and they can search for local events that are hosted on the web app. Data structures like Queues, Tree's and Stacks were used to retrieve and display the infomation on the site.",
      linkToRepo:"", 
      cols: 2, rows: 1,
       color: 'lightpink',
       imgOfProject: "assets/tshwane-logo.png"
      },
    {text: 'Skills', 
      description: "" ,
      linkToRepo:"",
      cols: 1, rows: 3, 
      color: 'lightgreen',
       imgOfProject: ""
    },
    {text: 'LetsLink',
      description: "LetsLink is a Android Mobile Application, it enables user's to create groups with their friends and plan outings by creating custom events or getting events from Ticketmaster. There are many features in this app, to name a few: Real-time chat feature, Collaborative Tasks and SOS feature.",
      linkToRepo :"" ,
      cols: 2, rows: 1,
       color: '#d6d6d6ff',
       imgOfProject: "assets/letslink.jpg"
      },
    {text: 'Zaka Mobile App',
      description:"Zaka is an innovative Android mobile application designed to help users take control of their finances through intuitive budget tracking, real-time analytics, and gamified goal setting. Built as part of the PROG7313 project, the app focuses on providing a user-friendly experience that encourages responsible financial habits.",
      linkToRepo:"https://github.com/Lanoleigh/ZakaFinal.git",
       cols: 2, rows: 1,
        color: '#DDBDF1',
       imgOfProject: "assets/zaka.png"
      },
  ];
}
