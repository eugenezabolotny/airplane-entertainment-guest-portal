import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.scss']
})
export class FlightStatusComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient) {
    this.showData();
  }

  ngOnInit() {
  }

  getData() {
    return this.http.get(environment.serverUrl + 'flightStatusData');
  }

  showData(){
    this.getData().subscribe(data => this.data = data);
  }
}
