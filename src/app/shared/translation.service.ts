import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const SERVER_URL = 'http://localhost:9000/api/messages';

@Injectable()
export class TranslationService {
  messages: Object;

  resolvedMessages$: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    console.log('TranslationService instance');
    this.initMessages();
  }

  initMessages() {
    this.messages = JSON.parse(sessionStorage.getItem('messages')) || {};
    if (!Object.keys(this.messages).length) {
      this.http.get(SERVER_URL).subscribe(messages => {
        this.messages = messages;
        sessionStorage.setItem('messages', JSON.stringify(this.messages));
        this.resolvedMessages$.emit(messages);
      });
    }
  }

  getMessage(key: string): string {
    return this.messages[key] || '?' + key + '?';
  }

}
