import { Component } from '@angular/core';

import { FINAL2020 } from './interface991512290';
import final2020 from '../assets/data/examJSON.json';
import { FINALQUIZ } from './interface991512290';
import finalQuiz from '../assets/data/examJSON.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exam24368wantenaw';

  final: FINAL2020 = final2020.final2020;
  quiz: FINALQUIZ[] = finalQuiz.finalQuiz;

}
