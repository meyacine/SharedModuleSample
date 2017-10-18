import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../shared/translation.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private translationService: TranslationService) {
    // console.log(this.translationService.getMessage('core.generic.id'));
  }

  ngOnInit() {
  }

}
