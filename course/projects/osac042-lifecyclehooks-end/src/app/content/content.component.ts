import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @ViewChild('scrollMe', { static: true })
  private scrollTextArea: ElementRef;
  @Input()
  textForOnChanges: string;

  textAreaValue = '';

  constructor() {}

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    this.addLine(`OnChanges ${JSON.stringify(changes)}`);
  }

  ngOnInit() {
    console.log('OnInit');
    this.addLine('OnInit');
  }

  // ACHTUNG!!!
  ngDoCheck() {
    console.log('DoCheck');
    // this.addLine('DoCheck');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
    // this.addLine('AfterContentInit');
  }

  // ACHTUNG!!!
  ngAfterContentChecked() {
    console.log('AfterContentChecked');
    // this.addLine('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    // this.addLine('AfterViewInit');
  }

  // ACHTUNG!!!
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
    // this.addLine('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    this.addLine('OnDestroy');
  }

  clearConsole() {
    this.textAreaValue = ``;
  }

  private addLine(message: string) {
    setTimeout(() => {
      this.textAreaValue += `${this.getFormattedDate()} - ${message}\r\n`;
    });
    this.scrollTextArea.nativeElement.scrollTop = this.scrollTextArea.nativeElement.scrollHeight;
  }

  private getFormattedDate() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()} ${date.getMinutes()} ${date.getSeconds()} ${date.getMilliseconds()}`;
  }
}
