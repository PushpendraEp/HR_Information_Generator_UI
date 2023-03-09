import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  constructor(private user:UserService){}

  selectmonth:any
  selectedOption: string = 'month';
  yearList=[2020, 2021, 2023,2024,2025,2026,2027,2028,2029,2030] 
  currentYear :any
  yeardata:any 
  res:any
  onChange(selectedValue: any) {
    this.selectedOption = selectedValue.target.value;
    console.log(this.selectedOption)
  }
  change(data:any){
this.selectmonth=data
console.log(this.selectmonth)

  }
  header:string[]|undefined
  selectyear(data:any){
    this.yeardata=data.target.value
    console.warn( this.yeardata)
    this.user.getData(this.yeardata).subscribe(data => {
      this.res = data;
      this.header=Object.keys(data[0])
      console.log(this.res)

  }


  )}}