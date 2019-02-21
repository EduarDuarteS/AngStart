import { NgModule } from '@angular/core';

//imports
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Declarations
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component'
import { ProductDetailComponent } from './product-detail.component';

//Guard
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
    ]),
    SharedModule
  ],

})
export class ProductModule { }
