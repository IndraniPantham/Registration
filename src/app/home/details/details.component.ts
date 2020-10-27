import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(public dataService: DataService) { }
  details;
  ngOnInit() {
    this.details = this.dataService.getItem();
  }

}
