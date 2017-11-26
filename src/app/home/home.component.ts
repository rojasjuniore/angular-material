import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logros: ILogro[];
  titulo: 'Bienvenidos';

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros();
    console.log(this.logros);
  }

  getLogros(): ILogro[] {
    return [{
      id: 1,
      title: 'Logré algo muy interesante',
      description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 2 Lorem ipsum dolor sit amet 3 Lorem ipsum dolor sit amet 5'
    }, {
      id: 2,
      title: 'Logré otra cosa muy interesante',
      description: 'Lorem ipsum dolor sit amet'
    }, {
      id: 3,
      title: 'Logré algo aún mas interesante',
      description: 'Lorem ipsum dolor sit amet'
    }
    ]

  }

}

interface ILogro {
  id: number;
  title: string;
  description?: string;
}
