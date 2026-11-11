import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoRest {
  
  private http = inject(HttpClient);

  private url = 'https://sturdy-space-waffle-r746vgr55pgjhwj65-8080.app.github.dev';
  
  getParams(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/params');
  }

  postParam(): Observable<any[]> {
    return this.http.post<any[]>(this.url+'/param/nuevo',{id:'EJEMPLO',valor:'Valor de ejemplo'});
  }
}