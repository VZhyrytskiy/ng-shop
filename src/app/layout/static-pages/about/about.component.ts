import { Component, OnInit, Optional } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public randomString: string = null;

  constructor(
    @Optional() private readonly _generatorService: GeneratorService
  ) {
    this.regenerateString();
   }

  ngOnInit() {
  }

  public regenerateString(): void {
    this.randomString = this._generatorService.makeRandomString(this._generatorService.getRandomNumber(20));
  }
}
