import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  uploadLoader: boolean = false;
  constructor(private user: UserService) { }

  selectmonth: any
  selectedOption: string = 'month';
  yearList = [2020, 2021, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  currentYear: any
  yeardata: any
  res: any
  onChange(selectedValue: any) {
    this.uploadLoader = false;
    this.selectedOption = selectedValue.target.value;
    console.log(this.selectedOption)
  }
  change(data: any) {
    this.uploadLoader = false;
    this.selectmonth = data
    console.log(this.selectmonth)

  }
  header: string[] | undefined
  selectyear(data: any) {
    
    this.yeardata = data.target.value
    // console.warn(this.yeardata)
    this.uploadLoader = true;
    setTimeout(() => {
    this.user.getData(this.yeardata).subscribe((data:any=[]) => {
      if (typeof data !== 'undefined' && data !== null) {
      if (data.status) {
        this.uploadLoader = false;
        this.res = data.results;
        this.header = Object.keys(data.results[0])
        console.log(this.res);
      }
    }
    }
    )
  }, 500);
  }
  ab(value: any) {
    console.log(value);

  }
}