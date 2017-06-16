import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [FirebaseService],
})
export class MemberListComponent implements OnInit {

  members;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.members = this.firebaseService.getMembers();
  }

  memberPage(member) {
    this.router.navigate(['member', member.$key])
  }

}
