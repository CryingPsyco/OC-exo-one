import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDontLove: number;
  @Input() postDate: any;

  constructor() { }

  ngOnInit() {
  }

  showLove = () => this.postLove = this.postLove + 1;
  hateMe = () => this.postDontLove = this.postDontLove + 1;

}
