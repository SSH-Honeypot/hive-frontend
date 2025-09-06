import {Component, signal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgxTypewriterComponent} from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-weblog',
  imports: [
    DatePipe,
    NgxTypewriterComponent
  ],
  templateUrl: './weblog.html',
  styleUrl: './weblog.css',
})
export class Weblog {
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

  test() {
    this.entries().push({
      date: new Date(),
      session: '9678e7334ae3',
      server: 'srv01',
      country: 'DE',
      ip: '49.53.XX.XXX',
      username: 'root',
      password: 'passwordpasswordpasswordpassword',
    })
  }
}
