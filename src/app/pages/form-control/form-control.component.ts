import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-control',
  imports: [CommonModule, MatCheckboxModule, MatButtonModule, MatInputModule, MatSelectModule, SelectDropDownModule, MatIconModule, ReactiveFormsModule, MatChipsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  toppingsControl = new FormControl<string[]>([]);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  dropdownOptions : string[] = ["option1" , "option2" ,"option3" ]
}
