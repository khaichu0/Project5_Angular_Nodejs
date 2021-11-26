import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
declare var paypal;
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SharedataService } from 'src/app/share/sharedata.service';
import { Teacher } from '../teacher';
import { FileUpload } from '../../../models/fileupload.model';
import { AngularFireStorage } from "@angular/fire/storage";
import { SharedataUploadImageService } from 'src/app/share/sharedata-upload-image.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {
  @ViewChild('paypal',{static:true}) paypalElement: ElementRef;  
  product1={
    price:77,
    description:'User checkout',
    img:'assets/img/boy.png'
  };
  paidFor=false;
  planId: any;  
  subcripId: any;  
  basicAuth = 'Basic QWNWUTBIX05QTVlWMDIzSDhMM3Y2alhNcDRVdaUN2V0M4Mmo4a19hodjdkdS14M3F4dFJ6Y2pNTnRPcGN6OUpPdjU1TW9jTllsEV1p5WURWNm46RUZJRWtJd0dYdDFJSTdFRmlEdVQ3UWExV2ZXWDZnYmw3Z2w5ajgwZVlsVjI1ODdfUTRHSUxCSWxZfOGg1SzRRZTFhMZU1yVgFZGRThIWXAyRjA='; 
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  
  productDialog!: boolean;

  products!: Teacher[];

  product!:Teacher[];

  selectedProducts!: Teacher[];

  submitted!: boolean;

  statuses!: any[];

  constructor( private storage: AngularFireStorage,private sharedataservice: SharedataService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      // this.sharedataservice.getTeacher().then(data => this.products = data);

      this.statuses = [
          {label: 'INSTOCK', value: 'instock'},
          {label: 'LOWSTOCK', value: 'lowstock'},
          {label: 'OUTOFSTOCK', value: 'outofstock'}
      ];
      const self = this;  
      this.planId = 'P-20D52460DL479523BLV56M5Y';  //Default Plan Id
      paypal.Buttons({  
        createSubscription: function (data, actions) {  
          return actions.order.create({  
           purchase_units:[{
             description:this.product1.description,
             amount:{
               currency_code:'USD',
               value:this.product1.price

             }
           }]  
          });  
        },  
        onApprove: function (data, actions) {  
          console.log(data);  
          alert('You have successfully created subscription ' + data.subscriptionID);  
          self.getSubcriptionDetails(data.subscriptionID);  
        },  
        onCancel: function (data) {  
          // Show a cancel page, or return to cart  
          console.log(data);  
        },  
        onError: function (err) {  
          // Show an error page here, when an error occurs  
          console.log(err);  
        }  
    
      }).render(this.paypalElement.nativeElement); 
  }
  getSubcriptionDetails(subcriptionId) {  
    const xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = function () {  
      if (this.readyState === 4 && this.status === 200) {  
        console.log(JSON.parse(this.responseText));  
        alert(JSON.stringify(this.responseText));  
      }  
    };  
    xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);  
    xhttp.setRequestHeader('Authorization', this.basicAuth);  
  
    xhttp.send();  
  }  
  openNew() {
      this.product = [];
      this.submitted = false;
      this.productDialog = true;
  }

  deleteSelectedProducts() {
    //   this.confirmationService.confirm({
    //       message: 'Are you sure you want to delete the selected products?',
    //       header: 'Confirm',
    //       icon: 'pi pi-exclamation-triangle',
    //       accept: () => {
    //           this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    //           this.selectedProducts = [];
    //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    //       }
    //   });
  }

  editProduct(product: Teacher) {
    //   this.product = {...product};
    //   this.productDialog = true;
  }

  deleteProduct(product: Teacher) {
    //   this.confirmationService.confirm({
    //       message: 'Are you sure you want to delete ' + product.name + '?',
    //       header: 'Confirm',
    //       icon: 'pi pi-exclamation-triangle',
    //       accept: () => {
    //           this.products = this.products.filter(val => val.id !== product.id);
    //           this.product = {};
    //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    //       }
    //   });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
    //   this.submitted = true;

    //   if (this.product.name.trim()) {
    //       if (this.product.id) {
    //           this.products[this.findIndexById(this.product.id)] = this.product;
    //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
    //       }
    //       else {
    //           this.product.id = this.createId();
    //           this.product.image = 'product-placeholder.svg';
    //           this.products.push(this.product);
    //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
    //       }

    //       this.products = [...this.products];
    //       this.productDialog = false;
    //       this.product = {};
    //   }
  }

  findIndexById(id: string): number {
    //   let index = -1;
    //   for (let i = 0; i < this.products.length; i++) {
    //       if (this.products[i].id === id) {
    //           index = i;
    //           break;
    //       }
    //   }

       return 1;
  }

  createId(): string {
    //   let id = '';
    //   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //   for ( var i = 0; i < 5; i++ ) {
    //       id += chars.charAt(Math.floor(Math.random() * chars.length));
    //   }
       return "123";
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }





}
