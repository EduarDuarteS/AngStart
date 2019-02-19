import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List Ed';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;
  showImage: boolean = false;
  //listFiltrado: string = 'cart';
  _listFilter: string;

  get listFiltrado():string{
    return this._listFilter
  }
  set listFiltrado(value:string){
    this._listFilter = value
    this.filteredProducts = this.listFiltrado ? this.performFilter(value) : this.listProducts
  }

  //lista de elementos ya filtrados
  filteredProducts: IProduct [];

  listProducts: IProduct [];

  constructor(private productService : ProductService){
  }

  togleImage():void{
    this.showImage = !this.showImage;
  }
  ngOnInit():void{
    this.productService.getProducts().subscribe(
      listProducts => {
        this.listProducts = listProducts;
        this.filteredProducts = this.listProducts;
      },
      error => this.errorMessage = <any>error
    );
    console.log('OnInit execute')
  }

  performFilter(valueFilter: string): IProduct[]{
    valueFilter = valueFilter.toLowerCase()
    return this.listProducts.filter((productWithFilter:IProduct)=>
    productWithFilter.productName.toLowerCase().indexOf(valueFilter) !== -1 )
  }
  onClickDesplegaInfo(message: string):void{
    this.pageTitle = 'Product List: '+ message;
  }
}
