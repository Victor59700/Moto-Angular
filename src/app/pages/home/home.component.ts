import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent{
  constructor(private router: Router) {}

  redirectToCardMoto(motoId: number, model: string, year: number, engine: string, picture: string,) {
    this.router.navigate(['/cardMoto',motoId, { model, year, engine, picture, }]);
  }

  motosHarleyDavidson =  [
    {
      id: 1,
      model: "Sportster Iron 883",
      year: 2023,
      engine: "883cc",
      picture: "https://photos.auto-moto.com/34/2015/12/photos/7475/zoom-harley_davidson_sportster_iron_883_noir_dsir_essai_vido.webp",
      created: new Date()
    },
    {
      id: 2,
      model: "Street Glide Special",
      year: 2022,
      engine: "Milwaukee-Eight 114",
      picture: "https://www.motoplanete.com/harley-davidson/zoom-700px/harley-1870-street-glide-special-2020-700px.webp",
      created: new Date()
    },
    {
      id: 3,
      model: "Road King",
      year: 2023,
      engine: "Milwaukee-Eight 107",
      picture: "https://www.motoplanete.com/harley-davidson/zoom-700px/Harley-1745-Road-King-2022-700px.webp",
      created: new Date()
    },

  ];
}




