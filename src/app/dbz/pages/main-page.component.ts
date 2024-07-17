import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service.ts.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService: DbzService){
        this.dbzService.characters
    }
    get characters():Character[]{
        return [...this.dbzService.characters];
    }
    onDeleterCharacter(id: string):void{
        this.dbzService.deleteCharacter(id);
    }
    onNewCharacter(character: Character):void{
        this.dbzService.addCharacter(character);
    }
}