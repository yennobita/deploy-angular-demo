import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  posts: any[];
  post: any = {};
  isFetching: boolean = false;
  error: string = '';
  pages: any[] = [];
  currentPageIndex: number = 1;

  constructor(private postService: PostService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.isFetching = true;
    this.postService.getAllPost().subscribe(
      (data: any) => {
        this.isFetching = false;
        this.posts = data;
        console.log(this.posts);
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe(
      (response) => {
        console.log(response);
        this.getAllPost();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addPost() {
    this.postService.storePost(this.post).subscribe(() => {
      alert('thêm thành công!');
      this.getAllPost(); // Cập nhật danh sách sau khi thêm bài viết
      this.post = {}; // Xóa dữ liệu sau khi thêm thành công
    });
  }

  onDelete(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      this.postService.deletePost(id).subscribe(
        (p) => {
          alert('Xóa thành công!');
          console.log(p);
          this.getAllPost();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  updatePost(postId: number) {
    this.postService.updatePost(postId, this.post).subscribe(() => {
      alert('cập nhật thành công!');
      this.getAllPost();
      this.post = {};
    });
  }
  onEdit(postId: number) {
    const editedPost = this.posts.find((post) => post.id === postId);
    if (editedPost) {
      this.post = { ...editedPost };
    }
  }

  onCancelEdit() {
    this.post = {};
  }

  parseId(id: string): number {
    return parseInt(id, 10);
  }

  onPageIndexClicked(pageIndex: number) {
    this.currentPageIndex = pageIndex;
    this.getAllPost(); // Gọi lại phương thức getAllPost() để lấy dữ liệu mới cho trang được chọn
  }
}
