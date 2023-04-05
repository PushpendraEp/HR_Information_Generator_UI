import { Component, ViewChild } from '@angular/core';
// import { MatInput, MatInputModule } from '@angular/material/input';
// import { MatTableDataSource } from '@angular/material/table'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
  providers: [DatePipe],

})

export class EmpDetailsComponent {

  showLoader: boolean = false;
  loaderArray: any = [];
  searchtext: any;
  itemsPerPage = 10;
  page = 1;
 
  // <!-- @ kirti soni ( 7/03/23 ) function for year and month selecter   -->
  constructor(private user: UserService, private dialogService: DialogService) { }
  searchQuery: any
  searchText:any='';
  year: string | any;
  month: number | any;
  monthyear: any
  splitmonthyear: any
  header: string[] |any| undefined
  selectedOption: string = 'month';
  yearList = [2020, 2021, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  currentYear: any
  yeardata: any
  res: any

  monthToString(month: number) {
    const date = new Date(Date.UTC(2023, month - 1, 1));
    return this.datePipe.transform(date, 'MMMM');
  }
 
  filterData(search: any, column: any) {
  
    console.log(search)
    if (!search) {
      search=''
    } 

      this.res = this.res.filter((row :any)=>{
        // const date = new Date(Date.UTC(2023, row.month - 1, 1));
        // row.month= this.datePipe.transform(date, 'MMMM');
      //  row.month=this.monthToString(row.month)
      console.log(row[column])
       return row[column].toLowerCase().match(search.toLowerCase())}

      );
    }
  
  

  
  
  datePipe = new DatePipe('en-US');

  ngOnInit() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const current = currentYear - 1;
    this.user.getData(currentYear).pipe(
      catchError(error => {
        this.res = [];
        console.log(error.error.message);
        return of(null);
      })
    ).subscribe((data: any) => {

      if (data && data.status) {
        this.res = data.results
     
        if (this.res && this.res.length > 1) {
          this.header = Object.keys(this.res[0])
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
        console.log(error.error.message);
        return of(null);
      })
    )
    .subscribe((result: any) => {
      if (result && result.status) {
        this.showLoader = false;
        // console.warn(result);
        this.res = result.results;
        if (this.res && this.res.length > 1) {
          this.header = Object.keys(this.res[0])
        }
        this.addLoaderData();
      } else {
        this.showLoader = false;
        this.res = [];
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
        console.log(error.error.message);
        return of(null);
      })
    )
    .subscribe(
      (data: any) => {
        if (data && data.status) {
          this.showLoader = false;
          this.res = data.results;
          if (this.res && this.res.length > 1) {
            this.header = Object.keys(this.res[0])
          }
          this.addLoaderData();
          // console.log(this.res)
        } else {
          this.showLoader = false;
          this.res = [];
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
      if(data){
        const message = 'Are you sure you want to download?';
    const title = 'Download Confirmation';
    this.dialogService.open(message, title).subscribe(result => {
    if(result){
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