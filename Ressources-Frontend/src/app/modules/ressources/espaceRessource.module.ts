import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, Route, RouterModule } from '@angular/router';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { AngularFireModule } from '@angular/fire/compat'
import { RessourceListComponent } from './components/ressource-list/ressource-list.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { StarRatingComponent } from './components/ressource-detail/StarRatingComponent';
import { SharedModule } from './SharedModule.module';
import { ListTopicComponent } from './components/list-topic/list-topic.component';
import { EspaceRessourceUserComponent } from './components/espace-ressource-user/espace-ressource-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatPaginatorModule } from '@angular/material/paginator';


const exampleRoute: Route[] = [{
   path: '',
   component: EspaceRessourceUserComponent
    
}];

@NgModule({
    declarations: [
      EspaceRessourceUserComponent,

  
        
    ],
    imports     : [
        SharedModule,    
        RouterModule.forChild(exampleRoute),
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        MatPaginatorModule
    ],
    providers: [
      provideAnimations()
    ]
   
})
export class EspaceRessourceUserModule
{}