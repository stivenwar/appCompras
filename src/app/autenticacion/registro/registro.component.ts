import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from
    '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  userdata: any;

  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
 Validators.minLength(6)
  ]
  ]
  });
    }


  onSubmit() {
    this.userdata = this.saveUserdata();
    console.log(this.userdata);
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.registroForm.get('email')?.value,
      password: this.registroForm.get('password')?.value,
    };

    return saveUserdata;
  }

}
