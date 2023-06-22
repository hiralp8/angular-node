import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/shared/service/pagination.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userData: any;
  responseData: any;
  numbers: any;
  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.paginationService.getPaginateData(1).subscribe(
      (res: any) => {
        console.log(res);
        this.responseData = res;
        this.userData = res.data;
        const totalPage = this.responseData?.total_pages;
        this.numbers = Array(totalPage).fill(1).map((_,i) => i+1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onPageClick(page: number) {
    this.paginationService.getPaginateData(page).subscribe((res: any) => {
      this.userData = res.data;
    }, (err) => {
      console.log(err);
    })
  }
}
