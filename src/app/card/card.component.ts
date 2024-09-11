import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AlertifyService } from '../service/alertify.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var bootstrap: any;
export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  model: any = {};
  posts: Post[] = [];
  public tableData: any[] = [];
  values: any;
  selectedPost: any;

  constructor(private dataService: DataService, private alertify:AlertifyService, private http:HttpClient) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((data: Post[]) => {
  
      this.posts = data && data.length > 0 ? data : [];
      this.tableData = data;
    });
    this.getValues();
    
    // alert(this.values.title);
    
  }
  

  submit() {
    // alert(
    //   'fullname:' +
    //     this.model.fullname +
    //     ' ' +
    //     'email:' +
    //     this.model.email +
    //     ' ' +
    //     'phone:' +
    //     this.model.phone
    // );
    this.alertify.success('the registration is successful');
  }

  clearField(form: any) {
    form.reset();
  }

  getPostById(id: number): void {
    this.dataService.getPost(id).subscribe(data => {
      this.selectedPost = data;
      // console.log('this.selectedPost.id');
      this.openModal();
      // this.alertify.success(this.selectedPost);
    });  
  }
  openModal() {
    const modalElement = document.getElementById('dataModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  // modalData:( 
  //   const userId  = this.selectedPost.id;
  //   const userTitle  = this.selectedPost.title;
  //   const userCompleted = this.selectedPost.completed;
  // ); 

  getValues() {
    this.dataService.getPost(1).subscribe((data) => {
  
      this.values = data;
      
    });
    }
    receiverMode(data: boolean) {
      alert(data);
    }
  }

