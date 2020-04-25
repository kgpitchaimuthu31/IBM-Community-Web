import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
      storename: ['', Validators.required],
      address: ['', Validators.required],
      productname:['', Validators.required],
      price:[''],
      quantity:['']
    });
  }

  createDocument() {
    // const doc = {
    //   "_id": "fruit:apple",
    //   "item": "Malus domestica",
    //   "prices": {
    //     "Fresh Mart": 1.59,
    //     "Price Max": 5.99,
    //     "Apples Express": 0.79
    //   }
    // };
    // this.cloundantService.createDoc("community-db", doc);
    // this.cloundantService.createDB("Test-27");
    this.cloundantService.getDoc("community-db", "fruit:apple").subscribe(data => {
      console.log(data);
    });
    console.log("Document Created!!");    
  }
}