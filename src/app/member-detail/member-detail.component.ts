import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Member } from '../member.model';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [FirebaseService],
})
export class MemberDetailComponent implements OnInit {
  memberID;
  member;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.memberID = this.route.params['_value']['id'];
    this.firebaseService.getMemberByID(this.memberID).subscribe(data => { this.member = data });
  }

}
