import { Input } from '@angular/core';

export class LikeComponent {
  @Input() totalLikes = 0;
  @Input() iLike = false;

  click() {
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }
}
