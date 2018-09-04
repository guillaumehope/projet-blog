import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() PostTitle: string;
  @Input() PostContent: string;
  @Input() PostLoveIts: number;
  @Input() PostCreated_at: string;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.PostLoveIts++;
  }

  onNotLove() {
    this.PostLoveIts--;
  }

}
