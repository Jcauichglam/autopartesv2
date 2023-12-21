import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  addStorageJson(name, data){
    localStorage.setItem(name, JSON.stringify(data));
  }

  addStorage(name, data){
    localStorage.setItem(name, data);
  }

  getItem(name: string){
    return localStorage.getItem(name);
  }
  removeItem(name: string){
    return localStorage.removeItem(name);
  }

  removeAllData(){
    localStorage.clear();
  }
}
