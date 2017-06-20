import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css'],
  providers: [FirebaseService],
})
export class MemberCreateComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit()
  { }

  newMember(values) {
    let member = new Member(values);
    this.firebaseService.saveMember(member);
    this.router.navigate(['admin']);
  }

}
