import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatListOption } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/ngrx/app.state';
import { EventEmitter } from '@angular/core';
import { IListable } from '../../interfaces/listable.interface';

@Component({
  selector: 'card-list-form',
  templateUrl: './card-list-form.component.html',
  styleUrls: ['./card-list-form.component.scss']
})
export class CardListFormComponent implements OnInit {

  @Input() title:string
  @Input() items:IListable[]
  @Input() action:any
  @Output() newItemEvent = new EventEmitter<number[]>();
  @Output() submitNewItem = new EventEmitter<string>()
  public newItemForm: FormGroup
  inputRequirement:boolean;
  constructor(
    private store:Store<IAppState>
    ) {
    this.inputRequirement=false,
    this.items=[]
    this.title=''
    this.newItemForm = new FormGroup({
      value: new FormControl('',[Validators.required]),
    })

  }

  ngOnInit(): void {

  }
  onGroupsChange(options: MatListOption[]){
    let result:number[]=[];
    options.forEach(item =>{
      result.push(item.value)
    })
    this.newItemEvent.emit(result)
  }
  onNewItemSubmit(){
    this.submitNewItem.emit(this.newItemForm.value["value"])
  }
  public get value():AbstractControl|null{
    return this.newItemForm.get("value");
  }
}
