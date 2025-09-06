import {AfterViewChecked, Component, effect, ElementRef, signal, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgxTypewriterComponent} from '@omnedia/ngx-typewriter';
import {Header} from '../../partials/header/header';
import {Footer} from '../../partials/footer/footer';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-weblog',
  imports: [
    DatePipe,
    NgxTypewriterComponent,
    Header,
    Footer
  ],
  templateUrl: './weblog.html',
  styleUrl: './weblog.css',
})
export class Weblog {
  @ViewChild('weblogList', {static:false}) weblogScroll!: ElementRef;

  entries = signal([
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'password',
    },
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'password',
    },
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'password',
    },
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'password',
    },
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'password',
    },
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'password',
    },
    {
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'rootdsuhf98z23qkdsfsojij',
      password: 'passwordpasswordpasswordpassword',
    }
  ]);

  constructor(private socket: Socket) {
    effect(() => {
      this.entries();
      requestAnimationFrame(() => {
        this.scrollToBottom();
      })
    });

    this.socket.fromEvent<{ session: string, sensor: string, src_ip: string, username: string, password: string }>('login.failed').subscribe((payload) => {
      this.entries.update(values => [...values, {
        date: new Date(),
        session: payload.session,
        server: payload.sensor,
        country: 'DE',
        ip: payload.src_ip,
        username: payload.username,
        password: payload.password,
      }])
    })
  }

  private scrollToBottom() {
    if (this.weblogScroll) {
      this.weblogScroll.nativeElement.scroll({
        top: this.weblogScroll.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
}
