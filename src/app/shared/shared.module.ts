import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslationService} from './translation.service';
import {HttpClientModule} from '@angular/common/http';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [TranslationService],
  declarations: [TranslatePipe],
  exports : [TranslatePipe]
})
export class SharedModule { }
