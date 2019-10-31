import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})

export class UserComponentComponent implements OnInit {

  arregloPersonas: any [] = [];

  constructor(private servicio: UserServiceService) { }

  ngOnInit() {

    this.servicio.getUser().subscribe((datos: any) => {

      console.log(datos.results[1]);
      // tslint:disable-next-line: prefer-for-of
      for (let a = 0; a < datos.results.length; a++) {

        // console.log(datos.results[a]['picture']['large']);
        this.arregloPersonas.push(datos.results[a]);

      }

    });

  }

}
