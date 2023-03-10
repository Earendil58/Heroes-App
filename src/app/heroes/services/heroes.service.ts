import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../pages/heroe/interface/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl : string = environment.baseUrl;

  constructor( private http: HttpClient) { }


  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId(heroeId: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${heroeId}`);
  }

  getSugerencias( termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${ termino }&_limit=6`);
  }

}
