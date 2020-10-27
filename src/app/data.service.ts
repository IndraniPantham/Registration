import { Injectable } from '@angular/core';
import { Interface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private details: Interface;

  constructor() { }

  addItem(data) {
    this.details = data;
  }

  getItem() {
    return this.details;
  }

}
