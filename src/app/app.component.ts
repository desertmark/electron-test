import { Component, ChangeDetectorRef } from '@angular/core';
import { DbService } from './services/db.service';
const electron = (window as any).require('electron');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public appReady = false;
  public title = 'elec-test';
  public ipc = electron.ipcRenderer;
  public changeDetector: ChangeDetectorRef;
  public dbService: DbService;

  constructor(changeDetector: ChangeDetectorRef, dbService: DbService) {
    this.changeDetector = changeDetector;
    this.dbService = dbService;
    this.dbService.onReady(() => {
      this.appReady = true;
      this.changeDetector.detectChanges();
    });
  }

  ngOnInit() {
    this.ipc.send("mainWindowLoaded");
  }
}
