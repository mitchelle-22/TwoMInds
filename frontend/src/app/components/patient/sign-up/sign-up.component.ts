import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  date =  Date();
  obj : any;
  constructor(private formbuilder: FormBuilder, private router: Router,private auth : AuthService) { }

  ngOnInit(): void {
  }

  signUpForm = this.formbuilder.group({
    fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    gender: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  })
  get gender () { return this.signUpForm.get('gender')}

  get email () { return this.signUpForm.get('email')}

  get fullname () { return this.signUpForm.get('fullname')}

  get password () { return this.signUpForm.get('password')}

  get confirmPassword () { return this.signUpForm.get('confirmPassword')}

  errorMessage: string = "";

  isLoading: boolean = false;

  onSubmit(){

    this.isLoading = true;
    let res = this.signUpForm.value;
    var regObj = {
      user_role_id: 10,
      email: res.email,
      firstname: res.fullname,
      phone: 0,
      gender:res.gender,
      emailVerified: "0",
      password: res.password,
      profileComplete: "0",
      last_login: "2022-03-29",
      created_at: "2020-03-29",
      active:'1'
    }

    // this.auth.register(regObj).subscribe((res) => {
    //   this.obj = res;

    //   //based on constant from a server return Key if user exist
    //   if(this.obj.detail.slice(0,3) == 'Key'){
    //     this.errorMessage = "*Email is already taken."
    //   }
    // });
    // setTimeout(()=> { error:{}
    //   console.log(this.obj.detail);
    // },2000)


    this.auth.register(regObj).subscribe(
      {
       next: (res: any)=> {
         console.log(res);
         if(res.uuid){
           this.isLoading = false;
           console.log(res);


          this.router.navigateByUrl("\signin", {state: {email: res.email}});
         }
         this.obj = res;

        //based on constant from a server return Key if user exist
        if(this.obj.detail.slice(0,3) == 'Key'){
          this.errorMessage = "*Email is already taken."
          this.isLoading = false;
        }
       },
       error: (error)=> {
         this.isLoading = false;
         this.errorMessage = "*Internal server error."
       }
      }
     );

    //this.router.navigateByUrl('/home-page')
  }

}
