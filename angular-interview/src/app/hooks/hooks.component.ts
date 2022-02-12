import { Component, OnInit } from '@angular/core';
import { Product } from './hooks.model';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {
  name = '';
  price = 0;
  data = new Product();
  inputText = '';
  constructor() {
    console.log('Constructor is invoked in Hooks Component');
   }

  ngOnInit(): void {
    console.log('ngOnInit is invoked Hooks Component');
  }

  onChange(event: any){
    console.log('onFocusOut', event.target.value);
    this.inputText = event.target.value;
  }

  onUpdate(){
    //this.data = new Product();
    // to detect changes in child component,remove new instance creation and implement ngDoChekc LC since ngOnChange will not detect the changes in case of reference types
    // but ngDoCheck will get called as and when inut propery changes
    this.data.name = this.name;
    this.data.price = this.price;
  }

}
