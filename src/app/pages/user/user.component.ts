import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public user?: User;
  public posts: Array<Post> = [];
  public loaded: boolean = false; // Has the user been loaded

  constructor(
    private route: ActivatedRoute,
    private usersvc: UserService,
    private postsvc: PostService
  ) { }

  ngOnInit(): void {


    this.route.params.subscribe( params => {
      this.loadPosts(params['userID']);
    });

  }




  loadPosts(userID: string) {
    this.loaded = false;
    this.posts = [];


    this.postsvc.getPostsByUserID(userID).then( posts => {
      this.posts = posts || [];
      this.loaded = true;
    })

  }


  showComments(postID: number) {}


}
