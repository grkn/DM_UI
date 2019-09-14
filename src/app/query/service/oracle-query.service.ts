import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OracleQueryService {

  constructor(private httpClient: HttpClient) { }

  query(query: string) {
    return this.httpClient.post<any>('https://localhost:4200/tanistan/query', { query, serviceName: 'PAINTPLDG', databaseAddress: '10.40.65.103:1521', username: 'PRIMEIT', password: 'Pit2014' }).pipe(map(res => res));
  }
}
