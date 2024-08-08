import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnChanges {

  constructor() { }
 
  inputValue:any;
  @Input() childData!:any
  ngOnInit(): void {
    console.log('childData',this.childData)
  }

  onSubmit(){
    console.log('inputvalue',this.inputValue)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('is called')
    console.log('changes',changes)
  }
  handlenotification(message:any){
     console.log('received msm',message)
  }
}
