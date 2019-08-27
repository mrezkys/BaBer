import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get( `${API_URL}/${url}?apiKey=$API_KEY`);
  }
}
