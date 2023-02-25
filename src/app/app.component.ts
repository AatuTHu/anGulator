import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anGulator';
  expression = "";
  errorMSG = "There was an error with the expression";
  error = false
  procentCalc = false;

  buttons = [
  {name : '(',value: '('},{name : ')',value: ')'},{name : '%',value: '%'},{name : '<-',value: '<'},
  {name : '7',value: 7},{name : '8',value: 8},{name : '9',value: 9},{name : '/',value: '/'},
  {name : '4',value: 4},{name : '5',value: 5},{name : '6',value: 6},{name : '*',value: '*'},
  {name : '1',value: 1},{name : '2',value: 2},{name : '3',value: 3},{name : '-',value: '-'},
  {name : '0',value: 0},{name : '.',value: '.'},{name : '=',value: '='},{name : '+',value: '+'},
  {name : 'CE', value: 'CE'}];

  onEventClick = (value : any) => {
    this.error = false;
    if (value === '<') {
      this.onRemoveLastChar();
    } else if (value === '=') {
      this.onCalculate();
    } else if ( value === 'CE' ) {
      this.onClear()
    } else {
      this.onAddToString(String(value));
    }
  };

  onAddToString = (value : string) => {
    if ( value === '%' ) {
      this.procentCalc = true;
      this.expression += value;
    } else {
      this.expression += value;
    }
  };

  onRemoveLastChar = () => {
    this.expression = this.expression.slice(0, -1)
  };

  onCalculate = () => {
    try {
      if (this.procentCalc) {
        this.expression = eval(this.expression.replace(/%/g, '/100'));
        this.procentCalc = false;       
      } else {
        this.expression = eval(this.expression) 
      }
    } catch (e) {
      this.error = true;
    } 
  };

  onClear = () => {
      this.expression = '';
  };
}
