import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

constructor(private sqlite: SQLite){
  this.sqlite.create({
    name: 'data.db',
    location: 'default'
  })
    .then((db: SQLiteObject) => {
      db.executeSql('create table users(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
}
