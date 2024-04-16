import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-moto',
  templateUrl: './card-moto.component.html',
  styleUrls: ['./card-moto.component.css']
})
export class CardMotoComponent implements OnInit {
  model: string | undefined;
  year: number | undefined;
  engine: string | undefined;
  picture: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.model = params['model'];
      this.year = +params['year'];
      this.engine = params['engine'];
      this.picture = params['picture']; 
    });
  }
}
