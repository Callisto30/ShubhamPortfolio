import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home-page/home-page.component';  // Ensure the correct path

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Only RouterModule should be imported here
  exports: [RouterModule],
})
export class AppRoutingModule {}

