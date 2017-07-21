import $ from 'jquery';
import Rx from 'rxjs/Rx';

var btn = $('#btn');

var input = $('#in');

var data = $('#data');

// -----------------------------------------------
// Events
// -----------------------------------------------

// Rx.Observable.fromEvent(btn, 'click')
//     .subscribe(event => console.log(event));
//
//
// Rx.Observable.fromEvent(btn, 'click')
//     .scan(count => count + 1, 0)
//     .subscribe(count => console.log('count of clicks: ' + count));


// Rx.Observable.fromEvent(input, 'keyup')
//     .subscribe(event => {data.text(event.target.value)}); // replace with set value



// -----------------------------------------------
// Numbers
// -----------------------------------------------

// var numbers$ = Rx.Observable.from([0, 1, 2, 3, 4, 5]);
//
// numbers$.subscribe(n => console.log(n), err => {}, () => console.log('done'));
//
// var names$ = Rx.Observable.from(new Set(['Oleg', 'Anna', 'Nikita']));
//
// names$.subscribe(name => console.log(name));

// -----------------------------------------------
// New Observer
// -----------------------------------------------

// var generator$ = new Rx.Observable(obs => {
//
//     let counter = 0;
//
//     setInterval(() => {obs.next(counter++)}, 500);
//
// });
//
// generator$.subscribe(n => console.log(n));

// -----------------------------------------------
// interval, timer, range
// -----------------------------------------------

// var delay = 400;
// var counter$ = Rx.Observable.interval(delay);
//
// counter$.subscribe(n => console.log(n));

// var startAfter = 3000;
// var timer$ = Rx.Observable.timer(startAfter, delay).take(10);
//
// timer$.subscribe(n => console.log(n));

// var range$ = Rx.Observable.range(0, 9);
//
// range$.subscribe(n => console.log(n));

// -----------------------------------------------
// map, pluck
// -----------------------------------------------

// Rx.Observable.range(0, 9)
//     .map(n => n * 10)
//     .subscribe(n => console.log(n));
//
// var people = [
//     {name: 'Oleg', age: 18},
//     {name: 'Irina', age: 22},
//     {name: 'Lena', age: 38}
// ];
//
// Rx.Observable.from(people)
//     .pluck('name')
//     .subscribe(n => console.log(n));

// -----------------------------------------------
// merge, concat
// -----------------------------------------------

// var smalls$ = Rx.Observable.interval(250).map(v => 's ' + v);
// var bigs$ = Rx.Observable.interval(500).map(v => 'b ' + (v * 10));
//
// Rx.Observable
//     .merge(smalls$, bigs$)
//     .take(10)
//     .subscribe(n => console.log(n));

// -----------------------------------------------
// mergeMap
// -----------------------------------------------

// Rx.Observable.of('Hello')
//     .mergeMap(greeting =>
//         Rx.Observable.of(greeting + ' Class')
//     )
//     .subscribe(res => console.log(res));

// -----------------------------------------------
// switchMap
// -----------------------------------------------

// var clicks = Rx.Observable.fromEvent(document, 'click');
// var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
// result.subscribe(x => console.log(x));

// -----------------------------------------------
// do
// -----------------------------------------------

// Rx.Observable.interval(100)
//     .scan(count => count + 1, 0)
//     .do(value => {
//         if (value % 10 == 0)
//         {
//             console.log('do trace --> ' + value)
//         }
//     })
//     .filter(value => value % 100 == 0)
//     .subscribe(value => console.log(value));

// -----------------------------------------------
// just for fun
// -----------------------------------------------

// Rx.Observable.fromEvent(input, 'keyup')
//     .map(event => event.target.value)
//     .filter(value => value.length > 2)
//     .distinctUntilChanged()
//     .debounceTime(300)
//     .forEach(value => console.log(value));

