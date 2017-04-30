import { 
	Component,
	AfterViewInit
} from '@angular/core';
import {
	Router,
} from "@angular/router";

import { Menu } from './api/menu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
	menulist:any
	constructor(private _router:Router) {
		this.menulist = Menu;
		
		
	}
	ngAfterViewInit(): void {
		document.getElementById('app-loading').className = "hidden";
	}
}
