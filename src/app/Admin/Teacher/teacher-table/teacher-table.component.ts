import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SharedataService } from 'src/app/share/sharedata.service';
import { Teacher } from '../teacher';
@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {

  
  
  productDialog!: boolean;

  products!: Teacher[];

  product!:Teacher[];

  selectedProducts!: Teacher[];

  submitted!: boolean;

  statuses!: any[];

  constructor(private sharedataservice: SharedataService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      // this.sharedataservice.getTeacher().then(data => this.products = data);

      this.statuses = [
          {label: 'INSTOCK', value: 'instock'},
          {label: 'LOWSTOCK', value: 'lowstock'},
          {label: 'OUTOFSTOCK', value: 'outofstock'}
      ];
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


}
