import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { RecomendationService } from 'src/app/services/recomendations.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user-recommendation',
  templateUrl: './add-user-recommendation.component.html',
  styleUrls: ['./add-user-recommendation.component.css'],
})
export class AddUserRecommendationComponent implements OnInit {
  name = localStorage.getItem("admin-username");
  isLoading: boolean = false;
  showSidebar: boolean = true;
  activityList: string[] = [];
  users: any;
  userId: any;
  names: any;
  arr: any;
  selectedAll: any;
  searchText = '';
  myForm: any;
  characters = [];
  constructor(
    private formBuilder: FormBuilder,
    private act: ActivityService,
    private recomend: RecomendationService,
    private user: UsersService,
    private _fb: FormBuilder,
    private router:Router,

  ) {
    this.run();
    this.runs();

  }
  onShowSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  run() {
    this.isLoading = true;
    this.act.getAllActivities().subscribe((data) => {
      this.arr = data;
      console.log(this.arr);
      this.isLoading = false;
    },(error) => {
      this.isLoading = false;
    });
  }

  runs() {
    this.isLoading = true;
    this.user.getallusers().subscribe((data) => {
      this.users = data;
      this.isLoading = false;
      console.log(this.users);
    },(error) => {
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      myChoices: new FormArray([]),
    });
  }

  run1(id: string) {
    console.log(id);
    // if(this.activityList.length > 0){
    // for (let i = 0; i < this.activityList.length;) {
    //   const element = this.activityList[i];
    if (!this.activityList.includes(id)) {
      //     i++
      this.activityList.push(id);
          console.log('element added.');
    }


    console.log(this.activityList);
  }

  firstname = "";
  email = "";

  activity(id: any) {
    this.userId = id.id;
    this.firstname = id.firstname;
    this.email = id.email;
    
    console.log(this.userId);
  }
  initModelForm(): FormGroup {
    return this._fb.group({
      myChoices: new FormArray([]),
    });
  }
  onCheckChange(event: any) {
    console.log(event);

    console.log(event.target.defaultValue);
    // console.log(event.target);

    const formArray: FormArray = this.myForm.get('myChoices') as FormArray;

    /* Selected */
    if (event.target) {
      // Add a new control in the arrayForm
      // formArray.push(new FormControl(event.target.value));
    } else {
    /* unselected */
      // find the unselected element
      let i: number = 0;

      i++;
      // });
    }
  }
  done() {
    // let cb = document.querySelector('input[type="checkbox"]:checked');
    console.log(this.activityList);
  }
  submit() {
    console.log('id :' + this.userId + '  ' + this.activityList);
    let recObj = {
      active: 1,
      activity: this.activityList,
      // RecomendationFK: this.userId,
      UserRecomendationFK: this.userId,
    };
    this.isLoading =true;
    this.recomend.addRecomendation(recObj).subscribe({
      next:(data)=>{
        this.alert('Activity added successful');
      // console.log('activity added successful'+data);
      this.isLoading = false;
      },
      error:(err)=>{
        console.log('error adding activity');
        console.log(err);
        this.isLoading = false;
      }
    })
    console.log(recObj);
  }
  alert(error: any){
    Swal.fire({
      text: error,
      width: 300,
      showConfirmButton: false,
      timer: 2000
    })
  }
}
