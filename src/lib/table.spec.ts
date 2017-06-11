
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdTable
} from './table.component';
import {
  FringdTableModule
} from './table.module';

describe(`${MdTable}`, function () {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FringdTableModule,
        FormsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        FringdTableWithSort,
      ],
    });

    TestBed.compileComponents();
  }));

  it('should sort', async(() => {
    let fixture = TestBed.createComponent(FringdTableWithSort);
    fixture.detectChanges();

    function getNames() {
      // There's a deficiency in DebugElement, it doesn't update the order of
      // children that are moved, and so can't be relied upon to test sort.
      // See https://github.com/angular/angular/issues/13066
      let nodeList = fixture.debugElement.nativeElement.querySelectorAll('tbody tr td:first-child');
      let els : Array<any> = Array.from(nodeList);
      return els.map((el) => el.innerText);
    }

    expect(getNames()).toEqual(['Wolverine', 'Mystique', 'Professor X']);

    let nameHeader =
      fixture.debugElement.query((el) => By.css('th')(el) && el.nativeElement.innerText == 'Name');
    nameHeader.triggerEventHandler('click', {target: nameHeader.nativeElement});
    fixture.detectChanges();

    expect(getNames()).toEqual(['Wolverine', 'Professor X', 'Mystique']);

    nameHeader.triggerEventHandler('click', {target: nameHeader.nativeElement});
    fixture.detectChanges();

    expect(getNames()).toEqual(['Mystique', 'Professor X', 'Wolverine']);
  }));
});

@Component({
  template: `
    <fringd-table>
      <thead>
        <tr>
          <th sort="name">Name</th>
          <th sort="id">ID</th>
          <th sort="power">Power</th>
        </tr>
      </thead>
      <tbody>
        <tr *for="let hero of heroes">
          <td>{{hero.name}}</td>
          <td>{{hero.id}}</td>
          <td>{{hero.power}}</td>
        </tr>
      </tbody>
    </fringd-table>`
})
class FringdTableWithSort {
  heroes = [
    {name: 'Wolverine', id: 1, power: "super healing"},
    {name: 'Mystique', id: 2, power: "shapeshifting"},
    {name: 'Professor X', id: 3, power: "Telepathy"},
  ];
}
