import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';

const routes: Routes = [
  {
    component: ReactiveFormsComponent,
    path: 'reactive-forms',
  },
  {
    component: TemplateFormsComponent,
    path: 'template-forms',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
