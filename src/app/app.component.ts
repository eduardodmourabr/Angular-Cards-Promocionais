import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto03';

  cardConteudo:string = 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsut amet, consectetur adipLorem ietur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consecteip'

  alertar() {
    alert('Você contratou este plano!')
  }
}
