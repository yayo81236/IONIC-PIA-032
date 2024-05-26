import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { AuthFirebaseService } from '../auth-firebase.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
<<<<<<< HEAD
import { MenuService } from '../menu.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { StorageService } from '../service/storage.service';
=======
import { MenuService } from '../service/menu.service';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
>>>>>>> 0b7b3347c9e134bb90e467f76d80366081b95b33

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  ionicForm: any;
<<<<<<< HEAD
  usuario: any = {};

=======
>>>>>>> 0b7b3347c9e134bb90e467f76d80366081b95b33
  constructor(
    private router: Router,
    private autSvc: AuthFirebaseService,
    private menuService: MenuService,
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    private loadingController: LoadingController,
    private storage : StorageService
=======
    private loadingController: LoadingController
>>>>>>> 0b7b3347c9e134bb90e467f76d80366081b95b33
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }    


  buildForm(){
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }   

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('Successfully logged in!');
        this.loadingController.dismiss();
        setTimeout(() => {
<<<<<<< HEAD
          this.storage.setValue('usuario',
            {nombre:'bgr nombre', direccion:'Jose Silvestre aramberri'});
          this.getUsuario();
=======
>>>>>>> 0b7b3347c9e134bb90e467f76d80366081b95b33
          this.menuService.setTitle("presupuesto");
          this.router.navigate(['main/presupuesto']);
        }, 650);
      }
      else{
        if(user.code){
          this.loadingController.dismiss();
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            console.error(user);
          }
        }
      }
    }).catch((error: any)=>{
      console.error(error);
    })
  }

  onRegister(){
    this.menuService.setTitle("register")
    this.router.navigate(['/register']);
  }
  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid &&
      this.ionicForm.controls[controlName].hasError(errorName) &&
      this.ionicForm.controls[controlName].touched;
  } 

  notZero(control: AbstractControl) {
    if (control.value && control.value <= 0) {
      return { 'notZero': true };
    }
    return null;
  }

  submitForm(){
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.presentLoadingWithOptions();
      this.onLogin();
    }
  } 
  ionViewWillEnter(){
    this.ionicForm.reset();
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
       duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      backdropDismiss: true
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }   

  getUsuario(){
    this.storage.getValue('usuario').
    then(user=>{
      this.usuario = user;
      console.info(this.usuario);
    }).
    catch(error=>{
      console.error(error);
    });
  }


  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid &&
      this.ionicForm.controls[controlName].hasError(errorName) &&
      this.ionicForm.controls[controlName].touched;
  } 

  notZero(control: AbstractControl) {
    if (control.value && control.value <= 0) {
      return { 'notZero': true };
    }
    return null;
  } 

  submitForm(){
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.presentLoadingWithOptions();
      this.onLogin();
    }
  } 

  ionViewWillEnter(){
    this.ionicForm.reset();
  }
  
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      backdropDismiss: true
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }   
}