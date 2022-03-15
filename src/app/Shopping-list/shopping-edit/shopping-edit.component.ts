import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameinput') nameInputRef:ElementRef;


  @ViewChild('amountinput') amountInputRef:ElementRef;

  @Output() ingredientadded = new EventEmitter<Ingredient>();



  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName,ingAmount);
    this.ingredientadded.emit(newIngredient);
  }
}