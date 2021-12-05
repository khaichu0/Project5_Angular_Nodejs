import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';

declare var $: any;
@Component({
  selector: 'app-pill-table',
  templateUrl: './pill-table.component.html',
  styleUrls: ['./pill-table.component.css']
})
export class PillTableComponent extends BaseComponent implements OnInit {

  public doneSetup = false;
  public orderdetail: any;
  public items: any;
  public item: any;
  public muc_gia: any;
  public origin_listjson_chitiet:any;   


  public users: any;
  public user: any;
  public totalRecords: any;
  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public formdata: any;
  public doneSetupForm: any;
  public showUpdateModal: any;
  public isCreate: any;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'hoten': [''],
      'diachi': [''],
    });

    this.search();
  }

  loadPage(page) {
    this._api.post('/api/hoadon/search', { page: page, pageSize: this.pageSize, hoten: this.formsearch.get('hoten').value, diachi: this.formsearch.get('diachi').value }).subscribe(res => {
      this.users = res.data;
      this.totalRecords = res.totalItems;
      this.pageSize = res.pageSize;
    });
  }

  onRowExpand(row) {
    this.doneSetup = false;
    this._api.get('/api/hoadon/get-by-id/' + row.data.ma_hoa_don).subscribe((res: any) => {
      this.orderdetail = res;
      this.doneSetup = true;
      debugger;
    });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/hoadon/search', { page: this.page, pageSize: this.pageSize, hoten: this.formsearch.get('hoten').value, diachi: this.formsearch.get('diachi').value }).subscribe(res => {
      this.users = res.data;
      this.totalRecords = res.totalItems;
      this.pageSize = res.pageSize;
    });
  }
 

  pwdCheckValidator(control) {
    var filteredStrings = { search: control.value, select: '@#!$%&*' }
    var result = (filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')) || []).join('');
    if (control.value.length < 6 || !result) {
      return { matkhau: true };
    }
  }

  get f() { return this.formdata.controls; }

  onSubmit(value) {

    this.orderdetail.ho_ten = this.formdata.get('ho_ten').value;
    this.orderdetail.dia_chi = this.formdata.get('dia_chi').value;

    let orderdetail_new =   $.extend(true, {},   this.orderdetail);
    orderdetail_new.listjson_chitiet = this.compare(this.origin_listjson_chitiet, this.orderdetail.listjson_chitiet, 'item_id');
    if(orderdetail_new.listjson_chitiet)
    {
      orderdetail_new.listjson_chitiet.forEach(element => {
        element.muc_gia = element.muc_gia;
      });
    } 
    this._api.post('/api/hoadon/update-hoa-don',  orderdetail_new).subscribe(res => {
      alert('Cập nhật thành công');
    });

  }

  onDelete(row) {
    this._api.post('/api/users/delete-user', { user_id: row.user_id }).subscribe(res => {
      alert('Xóa thành công');
      this.search();
    });
  }

  Reset() {
    this.user = null;
    this.formdata = this.fb.group({
      'hoten': ['', Validators.required],
      'ngaysinh': [this.today, Validators.required],
      'diachi': [''],
      'gioitinh': [this.genders[0].value, Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'taikhoan': ['', Validators.required],
      'matkhau': ['', [this.pwdCheckValidator]],
      'nhaplaimatkhau': ['', Validators.required],
      'role': [this.roles[0].value, Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }
  public Them() {
    let idx = this.items.findIndex(x => x.item_id == this.item.item_id);
    if (idx !== -1) {
      let _item_name = this.items[idx].item_name;
      this.orderdetail.listjson_chitiet.push({ item_name: _item_name, ma_hoa_don: this.orderdetail.ma_hoa_don, item_id: this.item.item_id, muc_gia: this.muc_gia });
    }
  }
  Xoa(item) {
    let idx = this.orderdetail.listjson_chitiet.findIndex(x => x.item_id == item.item_id);
    if (idx !== -1) {
      this.orderdetail.listjson_chitiet.splice(idx, 1);
    }
  }

  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this._api.get('/api/hoadon/get-by-id/' + row.ma_hoa_don).subscribe((res: any) => {
        this.orderdetail = res;
        this.origin_listjson_chitiet =   $.extend(true, [],   this.orderdetail.listjson_chitiet);
        this.formdata = this.fb.group({
          'ho_ten': [this.orderdetail.ho_ten, Validators.required],
          'dia_chi': [this.orderdetail.dia_chi],
          'muc_gia': [this.orderdetail.muc_gia],
          'sanpham': [],
          'abc': [],
        });
        this._api.get('/api/Item/get-all').subscribe((res: any) => {
          this.items = res;
        });
        this.doneSetupForm = true;
      });
    }, 700);
  }

  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}
