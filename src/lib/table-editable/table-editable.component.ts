import {ChangeDetectorRef, AfterViewChecked, ViewChild, ElementRef, Component, HostListener, Input, Output, EventEmitter} from '@angular/core';

import { MdInputDirective } from '@angular/material';

// TODO(fringd): support multiple types of data and custom input widgets
@Component({
  selector: 'th[editable], td[editable]',
  template: `
    <div class=editor *ngIf="editing">
      <div [style.width.px]="width">
        <md-input-container>
          <input mdInput
                 (change)=onValueChange()
                 (keypress)="onKeyPress($event)"
                 (blur)="close()"
                 [(ngModel)]="value">
        </md-input-container>
      </div>
    </div>
    <ng-content></ng-content>
  `,
  styles: [`
    :host.editing {
      overflow: visible;
      position: relative;
    }
    .editor {
    }
    .editor > div {
      top: -1px; /* TODO(fringd): choose corner depending on which will not escape table bounds */
      left: 0;
      position: absolute;
      will-change: transform;
      z-index: 1;
      background: #fafafa;
      border: 1px solid #ddd;
      padding-left: 24px;
      padding-right: 24px;
      box-shadow: 2px 2px 3px rgba(0,0,0,0.25);
      box-sizing: border-box;
    }
  `],
  host: {
    '[class.editing]': 'editing',
  },
})
export class FringdTableEditable implements AfterViewChecked {
  private value: string;
  public editing: boolean;
  private needsFocus = false;
  private width: number;
  @ViewChild(MdInputDirective) textbox: MdInputDirective;
  @Input() set editable(editable: string) {
    this.value = editable;
  }
  @Output() editableChange = new EventEmitter<string>();

  constructor(private changeDetectorRef: ChangeDetectorRef, private element: ElementRef) {}

  onKeyPress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.editing = false;
      this.editableChange.emit(this.value);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    this.editing = true;
    this.changeDetectorRef.detectChanges(); // cause textbox to be created
    this.textbox.focus();
    this.updateSizing();
  }

  updateSizing() {
    let tr: HTMLElement = this.element.nativeElement;
    this.width = tr.getBoundingClientRect().width;
  }

  close() { this.editing = false; }

  onValueChange() {
    this.editableChange.emit(this.value);
  }

  ngAfterViewChecked() {
  }
}
