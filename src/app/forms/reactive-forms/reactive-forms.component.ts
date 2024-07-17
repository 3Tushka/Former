import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  constructor(private fb: FormBuilder) {}

  isAddress: boolean = false;

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    address: this.fb.array([]),
    skills: this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required],
    }),
  });

  onSubmit() {
    const formData: User = this.userForm.value as User;
    console.log('Form Data: ', formData);
  }

  updateProfile() {
    this.userForm.patchValue({
      name: 'Nancy',
      email: 'nancyPeloni@gmail.com',
      password: 'axc123axc',
    });
  }

  get address() {
    return this.userForm.get('address') as FormArray;
  }

  createAddressFormGroup() {
    const addressItem = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
    });
    this.address.push(addressItem);
  }

  addAddress() {
    this.isAddress = !this.isAddress;
    this.createAddressFormGroup();
  }

  removeAddress(index: number) {
    this.address.removeAt(index);
  }
}
