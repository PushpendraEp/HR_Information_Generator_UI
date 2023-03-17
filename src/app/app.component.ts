import { Component } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HR_Information_Generator_UI';
  showLoader$=this.loaderService.lodingAction$;
  constructor(private loaderService:LoaderService){}
}
