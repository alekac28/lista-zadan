import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    this.http.get('https://api.mlab.com/api/database?apiKey=IEmQ61zNYXraOnS6BJmPJsMOQWeCsFRN8iR0Oo8RpYsz4wf8gYqRyD0uY9jNsFkl').subscribe(tasks=>{
      console.log(tasks);
    })
  }
}
