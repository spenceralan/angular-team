import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  saveMember(newMember) {
    this.members.push(newMember);
  }

  deleteMember(member) {
    let dbMember = this.getMemberByID(member.$key);
    dbMember.remove();
  }

  updateMember(member) {
    let dbMember = this.getMemberByID(member.$key);
    dbMember.update({
      name: member.name,
      age: member.age,
      specialty: member.specialty,
    });
  }

  getMemberByID(id) {
    return this.database.object(`members/${id}`);
  }
}