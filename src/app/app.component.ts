import { Component } from '@angular/core';
import {TranslationService} from "./shared/translation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private translationService : TranslationService) {
    // console.log(this.translationService.getMessage('core.generic.id'));
  }
}
