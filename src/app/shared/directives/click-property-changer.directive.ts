import { Directive, HostListener, ElementRef } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator/generator.service';

@Directive({
  selector: '[appClickPropertyChanger]'
})
export class ClickPropertyChangerDirective {

  private readonly _colors: Array<string> = [null, 'yellow', 'red', 'green', 'blue'];

  constructor(
    private readonly _element: ElementRef
  ) { }

  @HostListener('click') onClick(): void {
    this._element.nativeElement.style.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    // TODO: use a function from GeneratorService
    return this._colors[Math.floor(Math.random() * this._colors.length)];
  }
}
