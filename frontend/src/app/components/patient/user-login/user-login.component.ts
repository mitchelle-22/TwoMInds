import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  key : any;

  userObj: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private users: UsersService
  ) {}

  ngOnInit(): void {
    console.log('**');
    this.auth.run();
    console.log('**');
    this.auth.run();
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  errorMessage: string = '';

  isLoading: boolean = false;


  login() {
    this.isLoading = true;
    let res = this.loginForm.value;
    this.auth.login(res).subscribe(
     {
      next: (res: any)=> {
        console.log(res.msg.email);
        let email = res.msg.email;
        if(res.status == 200){
          localStorage.setItem("patient",JSON.stringify(res.msg));
          console.log(res.msg);


         this.key =  localStorage.getItem('pateint');
         let name = ""
          this.users.getUserByUUId(res.msg.id).subscribe({
            next: (res: any) => {
              console.log(res);
              name = res.firstname
              console.log(name);
              
              this.isLoading = false;
              this.router.navigateByUrl("/home-page", {state: {email: email}});
            }, error: (error)=> {
              this.isLoading = false;
              this.errorMessage = "*Internal server error."
            }

          })
        }
        else{
          this.isLoading = false;
          this.errorMessage = "*"+res.msg;
        }

      },
      error: (error)=> {
        this.isLoading = false;
        this.errorMessage = "*Internal server error."
      }
     }
    )
  }

}
