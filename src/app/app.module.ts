import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './shared/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './shared/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service.service';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { ChaildComponent } from './chaild/chaild.component';
import { VersionChaildComponent } from './version-chaild/version-chaild.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChaildComponentComponent } from './chaild-component/chaild-component.component';
import { HostDirective } from './shared/host.directive';
import { TestModalComponent } from './test-modal/test-modal.component';
import { SimpleHostComponent } from './simple-host/simple-host.component';
import { HighliteDirective } from './highlite.directive';
import { TextareExtendComponent } from './textare-extend/textare-extend.component';
import { CostomTextAreaComponent } from './costom-text-area/costom-text-area.component';
import { SelectModule } from './select/select.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    SearchHeroComponent,
    ChaildComponent,
    VersionChaildComponent,
    ParentComponentComponent,
    ChaildComponentComponent,
    HostDirective,
    TestModalComponent,
    SimpleHostComponent,
    HighliteDirective,
    TextareExtendComponent,
    CostomTextAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    SelectModule

  ],
  providers: [
    HeroService,
    MessageService
  ],
  entryComponents: [
    TestModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
