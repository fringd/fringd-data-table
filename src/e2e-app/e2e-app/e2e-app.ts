import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'e2e-app',
  templateUrl: 'e2e-app.html',
})
export class E2EApp {
  items = [
    {'name': 'Wolverine', 'id': 1, 'power': 'super healing'},
    {'name': 'Mystique', 'id': 2, 'power': 'shapeshifting'},
    {'name': 'Magneto', 'id': 3, 'power': 'knows how magnets work'},
    {'name': 'Professor X', 'id': 4, 'power': 'telepathy'},
    {'name': 'Beast', 'id': 5, 'power': 'blue'},
    {'name': 'Cyclops', 'id': 6, 'power': 'laser eyes'},
    {'name': 'Gambit', 'id': 7, 'power': 'throws cards'},
    {'name': 'Jean Grey', 'id': 8, 'power': 'drains powers'},
    {'name': 'Iceman', 'id': 9, 'power': 'ice'},
    {'name': 'Nightcrawler', 'id': 10, 'power': 'teleportation'},
    {'name': 'Jubilee', 'id': 11, 'power': 'breaks stuff'},
    {'name': 'Kitty Pryde', 'id': 12, 'power': 'walks through walls'},
    {'name': 'Storm', 'id': 13, 'power': 'controls weather'},
  ];
}
