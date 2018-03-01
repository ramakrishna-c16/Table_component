import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import fontawesome from '@fontawesome/fontawesome'

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
direction:number;
isDesc:boolean;
column:string;
showData:any;
pages : number = 4;
pageSize : number = 5;
pageNumber : number = 0;
currentIndex : number = 1;
pagesIndex : Array<number>;
pageStart : number = 1;
inputName : string = ''
filteredItems = [];
items=[];
  constructor() {
    
  }
@Input() headers:any[];
@Input() content:any[];
@Input() setSorting:boolean;
@Input() setClass:boolean;
ngOnInit() {
 
  this.filteredItems=this.content;
  this.init();
 
  // this.headers =Object.keys(this.content[0]);
}
init(){
  this.currentIndex = 1;
  this.pageStart = 1;
  this.pages = 4;

  this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
  if(this.filteredItems.length % this.pageSize != 0){
     this.pageNumber ++;
  }

  if(this.pageNumber  < this.pages){
        this.pages =  this.pageNumber;
  }

  this.refreshItems(); 
  
}
fillArray(): any{
  var obj = new Array();
  for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
              obj.push(index);
  }
  return obj;
}
refreshItems(){
 
  this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
  this.pagesIndex =  this.fillArray();
}
prevPage(){
  if(this.currentIndex>1){
     this.currentIndex --;
  } 
  if(this.currentIndex < this.pageStart){
     this.pageStart = this.currentIndex;
  }
  this.refreshItems();

}
nextPage(){
  if(this.currentIndex < this.pageNumber){
        this.currentIndex ++;
  }
  if(this.currentIndex >= (this.pageStart + this.pages)){
     this.pageStart = this.currentIndex - this.pages + 1;
  }
  this.refreshItems();

}
setPage(index : number){
     this.currentIndex = index;
     this.refreshItems();
}
  sort(property){
    if(this.setSorting){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
    }
}
doFilter(filterText){
  if (filterText == null || filterText == undefined || filterText == ""){
    this.items= this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
    return;
  } 

  var filteredData = [];
  let textRegExp = new RegExp(filterText);

  for( var i =0; i< this.content.length; i++ ){
    var customer = this.content[i];
    var flagRec=false;
    
      for(let i=0;i<this.headers.length;i++){
     
        if(textRegExp.test(customer[this.headers[i]])){
          flagRec=true;
          break;      
        }
      }
    if( flagRec ){
      filteredData.push(customer);
    }
  }
  this.items = filteredData;


}


}
