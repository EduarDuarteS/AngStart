import { NgModule } from '@angular/core';

//imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Declarations
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductListComponent } from './product-list.component'
import { ProductDetailComponent } from './product-detail.component';

//Guard
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
    ])
  ],

})
export class ProductModule { }
