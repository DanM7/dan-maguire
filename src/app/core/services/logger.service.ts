import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  info(message: string, payload: unknown = null) {
    console.info('[Portfolio]', message, payload);
  }

  error(message: string, payload: unknown = null) {
    console.error('[Portfolio]', message, payload);
  }
}
