import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService,private activatedRoute:ActivatedRoute) { }
ProductId:any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.ProductId=data['id']
    })
    this.productService.deleteProduct(this.ProductId).subscribe((item:any)=>{
      alert('Product  Deleted Successfully')
      this.router.navigateByUrl('products')

    })
  }

}
