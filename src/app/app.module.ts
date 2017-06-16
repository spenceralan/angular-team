import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Member } from './member.model'
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AboutComponent } from './about/about.component';
import { SpecialtyPipe } from './specialty.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberCreateComponent,
    MemberUpdateComponent,
    MemberDetailComponent,
    MemberListComponent,
    AboutComponent,
    SpecialtyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
