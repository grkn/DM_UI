import { Component, OnInit } from '@angular/core';
import { OracleQueryService } from './service/oracle-query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  query: string;

  constructor(private oracleQuery: OracleQueryService) { }

  ngOnInit() {

  }

  query() {
    this.oracleQuery.query(this.query);
  }

}
