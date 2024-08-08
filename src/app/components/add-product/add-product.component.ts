import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

interface DataItem {
  name: string;
  chinese: number;
  math: number;
  english: number;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  deleteConfig:any;
  editIndex: number | null = null;
  constructor(private fb:FormBuilder,private http:HttpClient,private httprequest:HttpRequestService) {
    console.log('constructor')
   }
   
  imagePreview: string | ArrayBuffer | null = null;
  list:any=[];
  value?: string;
  isVisible = false;
  selectedValue = null;

  productForm:any=this.fb.group({

      image: ['', Validators.required],
      productName: ['', Validators.required],
      details: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      createdDate: ['', Validators.required]
    });
    products: any[] = [];
    parentData:any={
      name:'Atul',
      Rollno:'1345'
    }
  ngOnInit(): void {
    this.loadProductList();
    this.productCrud();
    this.getproduct();
    console.log('ngonchanges');
    console.log('select the ',this.selectedValue)
  }
  listOfColumn = [
    {
      title: 'Name',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Chinese Score',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3
    },
    {
      title: 'Math Score',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    },
    {
      title: 'English Score',
      compare: (a: DataItem, b: DataItem) => a.english - b.english,
      priority: 1
    }
  ];
  listOfData: DataItem[]= [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89
    }
  ];

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.productForm.patchValue({
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }}
  productCrud(){
    
    const formData = this.productForm.value;
    console.log('formda',formData)
    formData.totalPrice = formData.price * formData.quantity;
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    this.products.push(formData);

    localStorage.setItem('products', JSON.stringify(products));
    console.log('produc',this.products)
   
    
  }

  loadFormData(): void {
    const savedData = localStorage.getItem('productData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.productForm.setValue(parsedData);
      this.imagePreview = parsedData.image;
    }
  }

  loadProductList(): void {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    console.log('pr',this.products)
  }

  //delete product

  deleteProduct(index:any): void {
   
    console.log('index',index)
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
   
    
   
  }
getproduct(){
   this.http.get('https://onlinetestapi.gerasim.in/api/Teamsync/getAdminDashboard').subscribe((res:any)=>{
    console.log('res',res)
   })
}

send(message:any){
   this.httprequest.commonData(message.value)
   console.log(message.value)
}
 
}
