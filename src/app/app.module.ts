import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import {
  TranslateModule, TranslateLoader, MissingTranslationHandlerParams,
  MissingTranslationHandler
} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://localhost:9000/api/messages');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'some value';
  }
}


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'busines',
        loadChildren: './busines-sample/busines-sample.module#BusinesSampleModule'
      }
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
