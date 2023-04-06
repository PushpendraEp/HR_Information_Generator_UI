import { Component, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { catchError, debounce, debounceTime } from 'rxjs/operators';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user.service';

import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],


})

export class EmpDetailsComponent {

  showLoader: boolean = false;
  loaderArray: any = [];
  searchtext: any;
  itemsPerPage = 10;
  page = 1;
  searchFilterColumns: string[] = [];
  searchFilterValues: string[] = [];
  

  // <!-- @ kirti soni ( 7/03/23 ) function for year and month selecter   -->
  constructor(private user: UserService, private dialogService: DialogService, private commonService: CommonService) {  
}


  searchQuery: any
  searchText: any = '';
  year: string | any;
  month: number | any;
  monthyear: any
  splitmonthyear: any
  header: string[] | any | undefined
  selectedOption: string = 'month';
  yearList = [2020, 2021, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  currentYear: any
  yeardata: any
  res: any;
  resTableDataCopy: any;
  s:any;
  c:any;


  /*

    @ Kirti ( 05/04/23 )
    Function Name - filterData
    req_param - search string, column name
    expected_outcome - it will filter according to search string

  */
   
 timer:any

  filterData(search: any, column: any) : void {
 
    if(this.timer)  clearTimeout(this.timer);
     // Clear the previous timer if there is any
    this.timer = setTimeout(() => { 
    let isColumExists = this.searchFilterColumns.includes(column);
    

    if (isColumExists) { // ( 05/04/12 ) If column exists then we will not push it and also update column value
      let indexOfCurrentCol = this.searchFilterColumns.findIndex(element => element == column);

      this.searchFilterValues[indexOfCurrentCol] = search;
    }
    else {   // ( 05/04/12 ) If column exists then we will push it and also push column value in ${searchFilterValues}
      this.searchFilterColumns.push(column);
      this.searchFilterValues.push(search);
 
    }

    this.res = [];
    let shouldNotPush: number = 0;
    for (let resIndex = 0; resIndex < this.resTableDataCopy.length; resIndex++) {
      for (let searchColumnIndex = 0; searchColumnIndex < this.searchFilterColumns.length; searchColumnIndex++) { // ( 05/04/23 ) Will search each and every column with key
    
        let searchString = this.resTableDataCopy[resIndex][this.searchFilterColumns[searchColumnIndex]];
        console.log(searchColumnIndex)

       
        if (this.searchFilterColumns[searchColumnIndex] == "emp_id") {
          console.log(this.searchFilterColumns )
       
          searchString = String(this.resTableDataCopy[resIndex][this.searchFilterColumns[searchColumnIndex]]);
        }
        let isValueExists = searchString.toUpperCase().indexOf(this.searchFilterValues[searchColumnIndex].toUpperCase()) > -1;
  
     
        if (!isValueExists) {
          shouldNotPush++;
        }
      }
      if (shouldNotPush == 0) {
     
        this.res.push(this.resTableDataCopy[resIndex]);

      }
      shouldNotPush = 0;
    }  }, 2000);
  

  }

  ngOnInit() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const current = currentYear - 1;
    this.user.getData(currentYear).pipe(
      catchError(error => {
        this.res = [];
        this.resTableDataCopy = [];
        console.log(error.error.message);
        return of(null);
      })
    ).subscribe((data: any) => {

      if (data && data.status) {
        this.res = data.results;
        this.res = this.commonService.changeMonthType(this.res, 'number to month');
        this.resTableDataCopy = this.res;
        if (this.res && this.res.length > 1) {
          this.header = Object.keys(this.res[0]);
        }
        this.addLoaderData();
      }
    })
  }

  addLoaderData() {
    let temp_length = this.res.length;
    this.loaderArray = [];
    for (let i = 0; i < temp_length; i++) {
      this.loaderArray.push(false);
    }
  }

  onChange(selectedValue: any) {

    this.selectedOption = selectedValue.target.value;
  }

  // <!-- @ kirti soni ( 9/03/23 ) get data form api based on year&month and diplay it on table    -->

  change(data: any) {
    this.monthyear = data.target.value
    this.splitmonthyear = this.monthyear.split('-')
    this.year = this.splitmonthyear[0]
    this.month = this.splitmonthyear[1]
    this.showLoader = true;
    this.user.getmonthyeardata(this.year, this.month).pipe(
      catchError(error => {
        this.showLoader = false;
        this.res = [];
        this.resTableDataCopy = [];
        console.log(error.error.message);
        return of(null);
      })
    )
      .subscribe((result: any) => {
        if (result && result.status) {
          this.showLoader = false;
          // console.warn(result);
          this.res = result.results;
          this.res = this.commonService.changeMonthType(this.res, 'number to month');
          this.resTableDataCopy = this.res;
          if (this.res && this.res.length > 1) {
            this.header = Object.keys(this.res[0])
          }
          this.addLoaderData();
        } else {
          this.showLoader = false;
          this.res = [];
          this.resTableDataCopy = [];
        }
      })
  }

  // <!-- @ kirti soni ( 9/03/23 )  get employee data from api bbased on year-->

  selectyear(data: any) {
    this.yeardata = data.target.value
    // console.warn(this.yeardata)
    this.showLoader = true;
    this.user.getData(this.yeardata).pipe(
      catchError(error => {
        this.showLoader = false;
        this.res = [];
        this.resTableDataCopy = [];
        console.log(error.error.message);
        return of(null);
      })
    )
      .subscribe(
        (data: any) => {
          if (data && data.status) {
            this.showLoader = false;
            this.res = data.results;
            this.res = this.commonService.changeMonthType(this.res, 'number to month');
            this.resTableDataCopy = this.res;
            if (this.res && this.res.length > 1) {
              this.header = Object.keys(this.res[0])
            }
            this.addLoaderData();
            // console.log(this.res)
          } else {
            this.showLoader = false;
            this.res = [];
            this.resTableDataCopy = [];
          }
        })
  };

  // <!-- @ kirti soni ( 7/03/23 ) generate payslip   -->

  download(data: string, i: number) {
    this.loaderArray[i] = true;
    this.user.downloadfile(data).pipe(
      catchError(error => {
        console.log(error.error.message);
        return of(null);
      })
    ).subscribe((data: any) => {
      if (data) {
        const message = 'Are you sure you want to download?';
        const title = 'Download Confirmation';
        this.dialogService.open(message, title).subscribe(result => {
          if (result) {
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
          }

        });
      }

      this.loaderArray[i] = false;
    })
  }

  // openDialogBox(value:any, i:number) {
  //   const data:any='';
  //   const message = 'Are you sure you want to download?';
  //   const title = 'Download Confirmation';
  //   this.dialogService.open(message, title).subscribe(result => {
  //     if (result) {
  //       this.download(value,i);
  //     }

  //   });
  // }


  }












