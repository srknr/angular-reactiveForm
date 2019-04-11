import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(5)]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  loadConsole(){
    console.info(this);
  }
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   })
  // });

  constructor(private fb: FormBuilder) {}

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'John',
      address: {
        street: '123 Drew Street',
        city: 'ABC'
      }
    });
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
}