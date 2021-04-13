import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() data:number
  constructor() { console.log('constructor')}

  ngOnInit(): void { console.log('onInit') }

  ngDoCheck(){console.log('ngDoCheck')}
  ngAfterConentInit(){console.log('ng after c init')}
  ngOnChanges(){console.log('ng on changes')}
  ngAfterContentChecked(){console.log('ng after c checked')}
  ngAfterViewInit(){console.log('ng after view init')}
  ngAfterViewChecked(){console.log('ng after view checked')}
  ngOnDestroy(){console.log('ng on destroy')}
}
