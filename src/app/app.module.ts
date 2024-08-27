import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentFormComponent } from './components/pages/moment-form/moment-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/edit-moment/edit-moment.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessagesComponent,
    AppComponent,
    MomentComponent,
    EditMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
