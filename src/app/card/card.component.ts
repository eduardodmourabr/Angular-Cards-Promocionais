import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo:string = 'título'
  @Input()
  subtitulo:string = 'subtitulo'
  @Input()
  preco:string = '99,99'
  @Input()
  conteudo:string = 'conteudo'
  @Input()
  conteudo1:string = 'conteudo'
  @Input()
  conteudo2:string = 'conteudo'
  @Input()
  conteudo3:string = 'conteudo'
  @Input()
  background:string = ''
  @Input()
  color:string = '#3b3b3b;'


  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()
  emitirEvento(): void{
    this.btnClickEvent.emit()
  }

}
