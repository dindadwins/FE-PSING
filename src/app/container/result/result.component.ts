import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})

export class ResultComponent implements OnInit{
  @Output() backToHome = new EventEmitter;

  ngOnInit(): void {

  }

  buttonBackToHome(){
    this.backToHome.emit()
  }
}