import { Component } from '@angular/core';
import { Product } from './product';
import { OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  productForm: FormGroup;
  products: Product[];

  //Form Controls
  title = new FormControl("", [Validators.required]);
  description = new FormControl(); 

  ngOnInit(): void {
    this.loadProducts();
    this.setupProductForm();
  }

  loadProducts(): void {
    this.products = [
      new Product("Apple iPhone", "It's a smartest phone on the earth!"),
      new Product("Samsung Note", "Best camera phone in the market!")
    ];
  }

  setupProductForm(): void {
    this.productForm = new FormGroup({
      title: this.title,
      description: this.description
    });
  }

  onSubmit(): void {
    console.log('submit called!');

    if (this.productForm.valid) {
      this.products.push(this.productForm.value);
      this.productForm.reset();
    }
  }

  delete(index: number): void {
    this.products.splice(index, 1);
  }

  edit(index: number) {
    let p = this.products[index];
    this.productForm.setValue(p);
  }

}
