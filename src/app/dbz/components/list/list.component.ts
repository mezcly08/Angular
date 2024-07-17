import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  //public onDeleteId: EventEmitter<number> = new EventEmitter(); 
  public onDeleteIdText: EventEmitter<string> = new EventEmitter(); 

  @Input()
  public characterList: Character[] = [{
    id: '1',
    name: 'Trunks',
    power: 10
  }]


  //onDelete(id: number): void {
    //todo: Emitir el id del personaje
  //  console.log(id);
    //this.onDeleteId.emit(id);
  //}

  deleteCharacter(id: string): void {
    //todo: verificar si el id existe
    if(!id) return;
  
    this.onDeleteIdText.emit(id);
  }

}
