import {Component, effect, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgxTypewriterComponent} from '@omnedia/ngx-typewriter';
import {Header} from '../../partials/header/header';
import {Footer} from '../../partials/footer/footer';
import {Socket} from 'ngx-socket-io';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-weblog',
  imports: [DatePipe, NgxTypewriterComponent, Header, Footer],
  templateUrl: './weblog.html',
  styleUrl: './weblog.css',
})
export class Weblog {
  @ViewChild('weblogList', {static: false}) weblogScroll!: ElementRef;

  entries = signal<LoginEvent[]>([]);

  constructor(private socket: Socket) {
    effect(() => {
      this.entries();
      requestAnimationFrame(() => {
        this.scrollToBottom();
      })
    });

    // listen to new login attempts
    this.socket.fromEvent<LoginEvent>('login.failed')
      .pipe(takeUntilDestroyed())
      .subscribe((payload: LoginEvent) => {
        this.entries.update(values => [...values, {
          date: new Date(),
          session: payload.session,
          sensor: payload.sensor,
          country: payload.country,
          src_ip: payload.src_ip,
          username: payload.username,
          password: payload.password,
        }])
      });

    // get initial data
    this.socket.once('initial-data', (data: LoginEvent[]) => {
      this.entries.set(data);
    });
  }

  private scrollToBottom() {
    if (this.weblogScroll) {
      this.weblogScroll.nativeElement.scroll({
        top: this.weblogScroll.nativeElement.scrollHeight, left: 0, behavior: 'smooth',
      });
    }
  }
}
