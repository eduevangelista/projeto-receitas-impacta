import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesagesService {

  message: string = ''

  constructor() { }

  add(message: string){
    this.message = message

    setTimeout(()=>{
      this.clear()
    }, 4000)
  }

  clear(){
    this.message = ''
  }
}
