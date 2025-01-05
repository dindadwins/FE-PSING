import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule, NgFor, NgStyle],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit{

  @Input() dropdownContent: string[] = [];
  @Input() width: string = '300px';
  selectedOption: string = '';

  ngOnInit(): void {
  }

  selectValue(value: string){
    this.selectedOption = value;
  }
}
