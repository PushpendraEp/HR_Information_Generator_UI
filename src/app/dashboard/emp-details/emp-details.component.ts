import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, throttleTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { Ng2SearchPipe } from 'ng2-search-filter';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']

})


export class EmpDetailsComponent {



  searchtext: any;
  itemsPerPage = 10;
  page = 1;
  transformedData: any;
  downloadLaoder: boolean = false;

  // <!-- @ kirti soni ( 7/03/23 ) function for year and month selecter   -->


  constructor(private user: UserService
  ) { }
  searchQuery: any

  year: string | any;
  month: string | any;
  monthyear: any
  splitmonthyear: any
  selectedOption: string = 'month';
  yearList = [2020, 2021, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  currentYear: any
  yeardata: any
  res: any
  tdata: any


  onChange(selectedValue: any) {

    this.selectedOption = selectedValue.target.value;

    this.year = null;
    this.yeardata = null;
    this.month = null;
    this.tdata = null;
    this.res = null;

  }

  // <!-- @ kirti soni ( 9/03/23 ) get data form api based on year&month and diplay it on table    -->
  Header: string[] | undefined
  change(data: any) {
    this.monthyear = data.target.value
    this.splitmonthyear = this.monthyear.split('-')
    this.year = this.splitmonthyear[0]
    this.month = this.splitmonthyear[1]
    console.warn(this.year)
    console.warn(this.month)
    this.user.getmonthyeardata(this.year, this.month).subscribe(res => {
      console.warn(res)
      this.tdata = res;
      this.Header = Object.keys(res[0])
      console.warn(this.tdata)
    })
  }

  // <!-- @ kirti soni ( 9/03/23 )  get employee data from api bbased on year-->
  header: string[] | undefined
  selectyear(data: any) {
    this.yeardata = data.target.value
    console.warn(this.yeardata)

    this.user.getData(this.yeardata).subscribe(
      (data: any) => {
        this.res = data.results;
        // const id= this.res.forEach((element :any)=> {
        //   console.log(element.emp_id)

        // });
        this.header = Object.keys(this.res[0])
        console.log(this.res)
      }, error => {
        console.log(error.error.message)
      })
  };

  // <!-- @ kirti soni ( 7/03/23 ) generate payslip   -->

  download(data: string) {
    this.downloadLaoder = true;
    console.log(data)
    this.user.downloadfile(data).subscribe((data: any) => {
      // if (data.status) {
        this.downloadLaoder = false;
        console.log(data)
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      // }
      // else {
      //   this.downloadLaoder = false;
      // }
    }, err => {
      // this.downloadLaoder = false;
    })
  }
}









