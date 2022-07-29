import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from "@angular/common/http";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://appcompras-1ae04-default-rtdb.firebaseio.com/';
  preURL = 'https://appcompras-1ae04-default-rtdb.firebaseio.com'

  constructor(private http: HttpClient) {
  }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL + 'post.json', newpres, {headers}).subscribe(res => {
      console.log(JSON.stringify(res));
    });

  }

  getPresupuestos() {
    return this.http.get(this.presURL + 'post.json');
  }

  getPresupuesto(id$: string) {
    const url = `${this.preURL}/post/${id$}.json`;
    console.log(url);
    return this.http.get(url);
  }

  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    console.log(newpre);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.preURL}/post/${id$}.json`;
    return this.http.put(url, newpre, {headers}).subscribe(res => {
      console.log(res)
    });
  }
  delPresupuesto(id$:string){
    const url = `${ this.preURL }/post/${ id$ }.json`;
    return this.http.delete( url );
  }
}
