import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CloudantService } from 'src/app/cloudant.service';

@Component({
  selector: 'consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  angForm: FormGroup;
  selectedStore: string = "0";
  selectedStoreControl = new FormControl();

  constructor(private cloundantService: CloudantService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  stores: any = [
    {
      full: "Store 1",
      id: "1"
    },
    {
      full: "Store 2",
      id: "2"
    },
    {
      full: "Store 3",
      id: "3"
    }
  ];

  createForm() {
    this.angForm = this.fb.group({
      storeName: [{ value: '0' }, Validators.required],
      productName: ['', Validators.required],
      address: ['', Validators.required]
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
    // this.cloundantService.getDoc("community-db", "fruit:apple").subscribe(data => {
    //   console.log(data);
    // });
    // console.log("Document Created!!");    
  }
}
