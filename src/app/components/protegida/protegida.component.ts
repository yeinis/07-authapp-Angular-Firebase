import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(perfil => {

    });
  }

}
