import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApplicationTitleService } from './services/application-title-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.appHeaderTitle.nativeElement.innerHTML = this.titleService.title;
  }

  title = 'shop';

  constructor(private readonly titleService: ApplicationTitleService) {
  }

  @ViewChild('appHeaderTitle', {static: false}) appHeaderTitle: ElementRef;
}
