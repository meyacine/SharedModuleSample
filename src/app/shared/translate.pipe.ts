import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from './translation.service';
import {AsyncSubject} from 'rxjs/AsyncSubject';

@Pipe({
  name: 'translate',
  pure: true
})
export class TranslatePipe implements PipeTransform {


  constructor(private translationService: TranslationService) {
    console.log('TranslationPipe instance');
  }

  transform(value: any, args?: any): string {
    this.translationService.resolvedMessages$.subscribe(messages => {
      console.log(messages);
    });
    return this.translationService.getMessage(value);
  }

}
