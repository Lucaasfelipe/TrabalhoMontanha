import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { EventEmitter } from 'events';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  email:any;
  senha:any;

  constructor(private fire: AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }

  signInUser() {
        this.fire.auth.signInWithEmailAndPassword(this.email, this.senha).then((user) => {

          
          this.router.navigate(['home']);
        }) .catch(error => {
          console.log('got an error',error);
          alert('Email ou Senha incorreto!')
        
      });

  }

}
