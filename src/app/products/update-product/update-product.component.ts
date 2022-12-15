import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
productId:any;
productDetails:any;
  constructor(private activateRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data:any)=>{
    this.productId =data['id']
    })
    this.productService.viewProduct(this.productId).subscribe((item:any)=>{
      this.productDetails =item
    })
  }
  updateProduct(data:any){
    
  }

}
