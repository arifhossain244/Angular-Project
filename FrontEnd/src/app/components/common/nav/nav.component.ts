import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppConstants } from 'src/app/settings/app-constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    appTitle = AppConstants.APP_TITLE;
    config = {
      paddingAtStart: true,
      interfaceWithRoute: true,
      
      
      fontColor: `rgb(8, 54, 71)`,
      
      selectedListFontColor: `red`,
      highlightOnSelect: true,
      collapseOnSelect: true,
      useDividers: true,
      rtlLayout: false
  };
  items = AppConstants.navItems;
  constructor(private breakpointObserver: BreakpointObserver) {}
  
}
