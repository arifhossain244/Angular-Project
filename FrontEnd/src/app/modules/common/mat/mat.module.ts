import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

const modules =[
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...modules
  ],
  exports:modules
})
export class MatModule { }
