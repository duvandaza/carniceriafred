import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel;
  recordarme = false;

  constructor(private fb: FormBuilder,
              private router: Router){}


  ngOnInit() {
  }


    login(){
    }
}
