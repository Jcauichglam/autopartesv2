import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalstorageService } from './shared/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  supportedLanguages = ['es', 'en'];
  defaultLanguage = 'en';

  constructor(private translate: TranslateService,
    private localStorageServices: LocalstorageService) {   
  }

  ngOnInit() {
    this.setAppLanguage();
  }
  
  setAppLanguage(){
    var language = this.localStorageServices.getItem('language');

    if(language != null){
      this.translate.setDefaultLang(language);
      this.translate.use(language);
    }else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
    
  }
}
