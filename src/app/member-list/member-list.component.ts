import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { SpecialtyPipe } from '../specialty.pipe'

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [FirebaseService, SpecialtyPipe],
})
export class MemberListComponent implements OnInit {

  members;
  specialtyFilter: string = 'All';

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private specialtyPipe: SpecialtyPipe,
  ) { }

  ngOnInit() {
    this.members = this.firebaseService.getMembers();
  }

  memberPage(member) {
    if (this.router.url.match(/admin/)) {
      this.router.navigate(['admin/member', member.$key]);
    } else {
      this.router.navigate(['member', member.$key]);
    }
  }

}
