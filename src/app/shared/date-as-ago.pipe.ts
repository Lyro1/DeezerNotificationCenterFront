import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateAsAgo'
})
export class DateAsAgoPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (!value) { return 'Il y a longtemps'; }
    let time = (Date.now() - Date.parse(value)) / 1000;
     if (time < 60) {
      return 'A l\'instant';
    }
    const divider = [60, 60, 24, 30, 12];
    const string = [' seconde', ' minute', ' heure', ' jour', ' mois', ' année'];
    let i;
    for (i = 0; Math.floor(time / divider[i]) > 0; i++) {
      time /= divider[i];
    }
    const plural = Math.floor(time) > 1 ? 's' : '';
    return 'Il y a ' + Math.floor(time) + string[i] + (string[i] != ' mois' ? plural : '');
  }
}
