# fringd-table

This is a table component I made. It tries to follow the material design spec
for tables. It currently supports local sorting, in place edit, and infinite
scroll at 60fps with 100ks of rows.

I tried very hard to make using it as easy as writing an html table. The API is
very similar to writing a normal table, except with the tag fringd-table
instead. here's an example:

```html
<fringd-table>
  <thead>
    <tr>
      <th sort="name">Hero</th>
      <th sort="power">Power</th>
    </tr>
  </thead>
  <tbody>
    <tr *for="let hero of heroes">
      <td>{{hero.name}}</td>
      <td>{{hero.power}}</td>
    </tr>
  </tbody>
</fringd-table>
```

Notice that it uses `*for` instead of `*ngFor` so that sort and infinite scroll 
can work automatically.

The table is very beta right now, and everything, including the name might 
change.

## Getting started

this component depends on material components and is meant to be used alongside 
them.

add this to your package.json depndencies

```
  "fringd-table": "^1.0.0",
  "@angular/material": "^2.0.0-beta.6",
  "@angular/material": "^2.0.0-beta.6",
```

you'll need a few more @angular packages as well if you're not already using 
them... look at `peerDependencies` in src/lib/package.json.

then `yarn install`


Then add `FringdTableModule` to your app:

``` typescript
import FringdTableModule from 'fringd-table';

...

@NgModule({
  imports: [FringdTableModule],
  ...
})
export class MyModule {}
``` 

## API

### Infinite scroll

```html
<fringd-table scrollable="true">
  ...
</fringd-table>
```

### Right aligned numeric columns

```html
<fringd-table>
  <thead>
    <tr>
      ...
      <th numeric>ID</th>
      ...
    </tr>
  </thead>
  ...
</fringd-table>
```

### Sort

just add `sort="member"` to the column tag. member should be a field on your 
objects that is a string or numeric. I'm planning to add support for arbitrary 
comparators soon.

```html
<fringd-table>
  <thead>
    <tr>
      ...
      <th sort="id">ID</th>
      ...
    </tr>
  </thead>
  ...
</fringd-table>
```

### Editable

Just add [(editable)]="item.field" to your td. When the user clicks on the cell 
a text popup will appear.

```html
<tr *for="let item of editableItems">
  <td [(editable)]="item.name">{{item.name}}</td>
  ...
</tr>
```

### Fixed width

Just add [width]="100" to your th. The width should be in pixels. This is 
important for infinite scroll, since the width will be fixed by necessity,
and based on the first 10 rows by default. It's probably better to set them 
yourself.

```html
<fringd-table>
  ...
  <th width=300>Notes</td>
  ...
</fringd-table>
```

## Running the demo

Run `yarn run demo-app` to try out the demo. Navigate to http://localhost:4200/ 
and the app will automatically reload if you change any of the source files.

## Contributing

TODO

## License

This project is licensed under the MIT License - see the 
[LICENSE.md](LICENSE.md) file for details
