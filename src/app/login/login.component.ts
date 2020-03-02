import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../services/userStore.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  hide: boolean = true;
  constructor(private userStore: UserStoreService, private formBuilder: FormBuilder) { }

  login(e){
    e.preventDefault();
    if(this.loginForm.valid){
      this.userStore.login(this.loginForm.value.username, this.loginForm.value.password);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(128), Validators.minLength(8)])]
  
    });
  }

}