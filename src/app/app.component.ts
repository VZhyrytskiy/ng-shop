import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApplicationTitleService } from './services/application-title-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.appHeaderTitle.nativeElement.innerHTML = 'Application title';
  }

  title = 'shop';

  constructor(private readonly titleService: ApplicationTitleService) {
  }

  // https://stackoverflow.com/a/56829906 - we should use static:true to have access in OnInit()
  @ViewChild('appHeaderTitle', {static: true, read: ElementRef}) appHeaderTitle: ElementRef;
}
