import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(private router: Router, private logService: LogService) {}

  ngOnInit(): void {}

  public logOut() {
    this.logService.logOut().subscribe(
      (t) => {
        localStorage.clear;
        console.log(t);
        alert('You are logged out, thanks and goodbye!');
      },
      (e) => {
        alert('logged out failed.');
        console.dir(e);
      }
    );
  }
}
