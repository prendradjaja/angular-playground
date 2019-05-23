import { Component, OnInit } from "@angular/core";
import { Observable, from, Subscriber, Subject } from "rxjs";

@Component({
  selector: "app-sandbox5",
  templateUrl: "./sandbox5.component.html",
  styleUrls: ["./sandbox5.component.scss"]
})
export class Sandbox5Component implements OnInit {
  constructor() {}

  ngOnInit() {
    const someService = new SomeService();

    // console.log("observable cannot be multicast");
    // const observable = someService.getObservable();
    // observable.subscribe(console.log);
    // observable.subscribe(console.log);
    // observable.subscribe(console.log);
    // ...however, calling .subscribe multiple times WILL speed up this loop

    console.log("subject can be multicast");
    const subject = someService.getSubject();
    setTimeout(() => {
      subject.subscribe(console.log);
      subject.subscribe(console.log);
      subject.subscribe(console.log);
    }, 1000);
  }
}

class SomeService {
  private o: Observable<number>;
  private i = 0;
  private j = 100;
  private subject: Subject<number>;
  constructor() {
    this.o = new Observable(subscriber => {
      setInterval(() => {
        subscriber.next(this.i);
        this.i++;
      }, 200);
    });
    this.subject = new Subject();
    setInterval(() => {
      this.subject.next(this.j);
      this.j++;
    }, 200);
  }
  getObservable(): Observable<number> {
    return this.o;
  }
  getSubject(): Subject<number> {
    return this.subject;
  }
}
