import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: 'output-component', component: OutputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
