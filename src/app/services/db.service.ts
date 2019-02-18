import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
const electron = (window as any).require('electron');

@Injectable({
  providedIn: 'root'
})
export class DbService {
  public sequelize;
  public ipc = electron.ipcRenderer;
  public db = null;
  private readyEmitter = new EventEmitter();
  constructor() {
    this.ipc.on("db", (event, db) => {
      this.db = db;
      this.readyEmitter.emit();
      console.log('db ready');
    });
  }

  public onReady(cb) {
    this.readyEmitter.subscribe(cb);
  }
}
