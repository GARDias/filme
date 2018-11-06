import { Injectable } from '@angular/core';
import { filme } from './filme/filme';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  URL_API = 'http://www.omdbapi.com/?t=';
  key = '&apikey=1ec17c22';
    constructor(public http: HttpClient){}
   getFilme(nome : String):Observable<filme>{
     console.log(this.URL_API + nome + this.key);
      return this.http.get<filme>(this.URL_API + nome +this.key);
   }
  

}