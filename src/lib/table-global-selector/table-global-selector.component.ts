import {ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MdCheckbox} from '@angular/material';
import {SelectionService} from '../selection-service';

@Component({
  selector: 'th[selector]:not([item])',
  template:
    '<md-checkbox [checked]="selected" (change)="selected = $event.checked"></md-checkbox>',
  styles: [`
    md-checkbox {
      display: inline-block;
    }

    :host {
      line-height: 0px;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      overflow: hidden;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdTableGlobalSelector {
  @Output() selectAll = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef, private selectionService: SelectionService) {
    this.selectionService.allSelectedObserver().subscribe(
      () => this.cdr.markForCheck());
  }

  get selected() {
    return this.selectionService.allSelected();
  }

  set selected (checked: boolean) {
    this.selectAll.emit(checked);
  }
}
