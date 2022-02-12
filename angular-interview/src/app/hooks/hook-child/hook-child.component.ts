import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../hooks.model';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.scss']
})
export class HookChildComponent implements OnInit, OnChanges, DoCheck{
  @Input() dataBoundProp = '';
  @Input()
  itemData!: Product;
  constructor() {
    console.log('Constructor is invoked in hook-child component');
   }


  ngOnInit(): void {
    console.log('ngOnInit is invoked in hook-child component');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges is invoked: ', changes)
  }

  ngDoCheck(): void {
   console.log('ngDoCheck is invoked: ', this.itemData)
  }

}
