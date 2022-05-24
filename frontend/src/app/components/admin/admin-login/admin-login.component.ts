import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,private auth : AuthService) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });


  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password')}


  errorMessage: string = "";

  isLoading: boolean = false;

  login() {
    this.isLoading = true;

    let res = this.loginForm.value;
    console.log(res);

    this.auth.login(res).subscribe(
      {
       next: (res: any)=> {
         console.log(res);
         if(res.status == 200){
          localStorage.setItem("admin-token", "admin-exist");
          localStorage.setItem("admin-username", res.msg.email)
          this.isLoading = false;
          this.router.navigateByUrl("\admin-dashboard", {state: {email: res.msg.email}});
         }
         else{
           this.isLoading = false;
           this.errorMessage = "*"+res.msg;
         }

       },
       error: (error)=> {
        this.isLoading = false;
        this.errorMessage = "*Internal server error.";
       }
      }
     );
  }
}
