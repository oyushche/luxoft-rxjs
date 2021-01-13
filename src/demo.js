import $ from 'jquery';
import {concat, from, fromEvent, interval, merge, Observable, of, range, Subject, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, mergeMap, pluck, switchMap, take, tap} from "rxjs/operators";

var btn = $('#btn');

var input = $('#in');

var data = $('#data');

// -----------------------------------------------
// Events
// -----------------------------------------------

    // fromEvent(btn, 'click')
    //     .subscribe(event => console.log(event));

    // .fromEvent(btn, 'click')
    //     .scan(count => count + 1, 0)
    //     .subscribe(count => console.log('count of clicks: ' + count));

    // fromEvent(input, 'keyup')
    //     .subscribe(event =>
    //     {
    //         data.text(event.target.value)
    //     });

// -----------------------------------------------
// Numbers
// -----------------------------------------------
// next(), error(), complete()
//
// var numbers$ = from([0, 1, 2, 3, 4, 5]);
//
// numbers$.subscribe(n => console.log(n), err => {}, () => console.log('done'));
//
// var names$ = from(new Set(['Oleg', 'Anna', 'Nikita']));
//
// names$.subscribe(name => console.log(name));

// -----------------------------------------------
// New Observer
// -----------------------------------------------
//
//
// var generator$ = new Observable(obs => {
//
//     let counter = 0;
//
//     setInterval(() => {
//         obs.next(counter++);
//
//     }, 500);
//
//     setTimeout(() => {
//         obs.complete()
//     }, 5000);
// });
//
// generator$.subscribe(n => console.log(n), err => console.log(err), () => console.log("done"));

// -----------------------------------------------
// interval, timer, range
// -----------------------------------------------

// var delay = 400;
// var counter$ = interval(delay);
//
// counter$.subscribe(n => console.log(n));

// var startAfter = 2000;
// var timer$ = timer(startAfter, delay)
//     .pipe(
//         take(10)
//     );
//
// timer$.subscribe(n => console.log(n));
//
// var range$ = range(0, 9);
//
// range$.subscribe(n => console.log(n));

// -----------------------------------------------
// map, pluck
// -----------------------------------------------

    // range(0, 9)
    //     .pipe(
    //         map(n => n * 10)
    //     )
    // .subscribe(n => console.log(n));


// var people = [
//     {name: 'Oleg', age: 18},
//     {name: 'Irina', age: 22},
//     {name: 'Lena', age: 38}
// ];
//
// var peopleObs$ = from(people)
//     .pipe(
//         // map(p => p.name)
//         pluck('name')
//     )
//
// peopleObs$.subscribe(n => console.log(n));
// peopleObs$.subscribe(n => console.log(n));

// -----------------------------------------------
// merge, concat
// -----------------------------------------------

// var smalls$ = interval(250)
//     .pipe(
//         take(5),
//         map(v => 's ' + v)
//     );
//
// var bigs$ = interval(500)
//     .pipe(
//         map(v => 'b ' + (v * 10))
//     );
//
//     concat(smalls$, bigs$)
//     // merge(smalls$, bigs$)
//         .pipe(
//             take(10)
//         )
//         .subscribe(n => console.log(n));
//
// -----------------------------------------------
// mergeMap
// -----------------------------------------------
//
//     of([['Hello', 'Hi2', 'Hi3'], 'H1', [1, 2, 3]])
//         .pipe(
//             mergeMap(greeting => of(greeting + " another"))
//         )
//         .subscribe(res => console.log(res));

// -----------------------------------------------
// switchMap
// -----------------------------------------------
//
// var clicks = fromEvent(document, 'click');
//
// var result = clicks.pipe(
//     switchMap((ev) => interval(1000))
// );
// result.subscribe(x => console.log(x));

// -----------------------------------------------
// do
// -----------------------------------------------

    // interval(100)
    // .pipe(
    //     tap(value => {
    //         if (value % 5 == 0)
    //         {
    //             console.log('do trace --> ' + value)
    //         }
    //     }),
    //     filter(value => value % 10 == 0)
    // )
    // .subscribe(value => console.log(value));

// -----------------------------------------------
// just for fun
// -----------------------------------------------
//     fromEvent(input, 'keyup')
//         .pipe(
//             map(event => event.target.value),
//             filter(value => value.length > 2),
//             debounceTime(300),
//             distinctUntilChanged()
//         )
//         .forEach(value => console.log(value));

// -----------------------------------------------
// Subject
// -----------------------------------------------

// var subject = new Subject();
//
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// });
//
// var observable = from([1, 2, 3]);
// observable.subscribe(subject); // You can subscribe providing a Subject

