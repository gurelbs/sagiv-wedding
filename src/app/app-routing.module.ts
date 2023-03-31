import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGuestsComponent } from './all-guests/all-guests.component';
import { InviteFormComponent } from './invite-form/invite-form.component';
import { MainComponent } from './main/main.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path:  'invitation', component:  InviteFormComponent },
  { path: 'save', component: SaveComponent },
  { path: 'all', component: AllGuestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
