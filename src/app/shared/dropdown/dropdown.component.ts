import { NgFor, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() emitSelected = new EventEmitter;
  selectedOption: string = '';
  selected: boolean = false;

  ngOnInit(): void {
  }

  selectValue(value: string){
    this.selected = true;
    this.selectedOption = value;
    this.emitSelected.emit(this.selectedOption);
  }
}
