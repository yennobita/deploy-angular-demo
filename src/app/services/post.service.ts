import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../entities/post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://647b45cbd2e5b6101db1113c.mockapi.io/api/v1/post';
  constructor(private httpService: HttpClient) {}

  storePost(postData: IPost) {
    return this.httpService.post(this.url, postData);
  }

  getAllPost() {
    return this.httpService.get(this.url);
  }

  deletePost(id: number) {
    return this.httpService.delete(`${this.url}/${id}`);
  }

  updatePost(id: number, postData: IPost) {
    return this.httpService.put(`${this.url}/${id}`, postData);
  }
}
