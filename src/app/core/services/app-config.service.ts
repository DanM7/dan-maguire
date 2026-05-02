import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../app.config';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  get application() {
    return APP_CONFIG;
  }
}
