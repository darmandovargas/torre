import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  private REST_API_SERVER = "https://search.torre.co/opportunities/_search";

  constructor(private httpClient: HttpClient) { }

  public getOpportunities(){
    return this.httpClient.post<any>(this.REST_API_SERVER, {offset:0, size:100, aggregate:0});
  }
}
