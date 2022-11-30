import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessagesComponent } from './components/messages/messages.component';

const MODULES = [MessagesComponent];

@NgModule({
  imports: [CommonModule],
  declarations: MODULES,
  exports: MODULES,
})
export class SharedModule {}
