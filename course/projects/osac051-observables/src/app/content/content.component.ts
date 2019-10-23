import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  name$: Observable<any>;

  constructor(private http: HttpClient) {
    const data$ = new Observable((observer: Observer<number>) => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);

      setTimeout(() => {
        // observer.error(new Error());
        observer.next(43);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    const subscription = data$
      .pipe(
        // map(x => <number>x + 1),
        finalize(() => console.log('finally, if error or not'))
      )
      .subscribe(
        (value: number) => {
          console.log(value);
        },
        (error: number) => {
          console.log(error);
        },
        () => console.log('finished')
      );

    // subscription.unsubscribe();

    this.name$ = this.getNameAsync();
  }

  getNameAsync(): Observable<any> {
    return this.http.get<any>('https://swapi.co/api/people/1/');
  }
}
