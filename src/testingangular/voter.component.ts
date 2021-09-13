import { Input } from '@angular/core';

export class VoterComponent {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  upVote() {
    if (this.myVote === 1) {
      return;
    }

    this.myVote++;
  }

  downVote() {
    if (this.myVote === -1) {
      return;
    }

    this.myVote--;
  }

  get totalVotes(): number {
    return this.othersVote + this.myVote;
  }
}
