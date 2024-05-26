import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../auth-firebase.service';
import { MenuService } from '../menu.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  isLoged : any = false;

  constructor(
    private router: Router,
    private authService: AuthFirebaseService,
    private menuService: MenuService,
    private storageService: StorageService
  ) { 
    onAuthStateChanged(this.authService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
    });
  }

  ngOnInit() {
  }

  onLogout(){
    signOut(this.authService.getStateAuth()).then(response=>{
      console.log("Logout!");
      this.menuService.setTitle("login");
      this.router.navigateByUrl('/login');
      console.info('Usuario a borrar:'+this.storageService.getValue('usuario'));
      this.storageService.borrarItem('usuario');
      this.storageService.limpiarStorage();
    }).catch(error=>{

    });
  }
}