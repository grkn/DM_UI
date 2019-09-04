import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OracleQueryService {

  constructor(private httpClient: HttpClient) { }

  query(query:string) {
    this.httpClient.post<any>*('https://localhost:4200/execute/query',{query: query});
  }
}
