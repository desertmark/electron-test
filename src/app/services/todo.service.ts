import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public dbService: DbService;
  constructor(dbService: DbService) { 
    this.dbService = dbService;
  }
  public getStubTasks() {
    return [
      {name: 'Run smoke tests'},
      {name: 'Run smoke tests'},
      {name: 'Run smoke tests'},
    ];
  }

  public getTasks() {
    console.log('TodoService.getTasks');
    return this.dbService.db.tasks;
  }
}
