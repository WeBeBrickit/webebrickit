import { Component, OnInit } from '@angular/core';
import { BLOGPOSTS } from '../hardcoded-posts';

@Component({
  selector: 'app-post-holder',
  templateUrl: './post-holder.component.html',
  styleUrls: ['./post-holder.component.scss']
})
export class PostHolderComponent implements OnInit {

  blogPosts = BLOGPOSTS;

  constructor() { }

  ngOnInit(): void {
  }

}
