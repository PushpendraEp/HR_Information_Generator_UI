import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /*

  @ Kirti ( 05/04/23 )
  Function Name - changeMonthType
  req_param - row_data, type ( number to month || month to number )
  expected_outcome - it will filter according to search string

*/


  changeMonthType(resData: any, type: string) {

    let data = [...resData];

    if (type == 'number to month') {
      for (let i = 0; i < data.length; i++) {
        switch (true) {
          case data[i].month == 1:
            data[i].month = 'January';
            break;
          case data[i].month == 2:
            data[i].month = 'February';
            break;
          case data[i].month == 3:
            data[i].month = 'March';
            break;
          case data[i].month == 4:
            data[i].month = 'April';
            break;
          case data[i].month == 5:
            data[i].month = 'May';
            break;
          case data[i].month == 6:
            data[i].month = 'June';
            break;
          case data[i].month == 7:
            data[i].month = 'July';
            break;
          case data[i].month == 8:
            data[i].month = 'August';
            break;
          case data[i].month == 9:
            data[i].month = 'September';
            break;
          case data[i].month == 10:
            data[i].month = 'October';
            break;
          case data[i].month == 11:
            data[i].month = 'November';
            break;
          case data[i].month == 12:
            data[i].month = 'December';
            break;
          default:
            data[i].month = '-';
            break;
        }
      }
    }
    else {
      for (let i = 0; i < data.length; i++) {
        switch (true) {
          case data[i].month == 'January':
            data[i].month = 1;
            break;
          case data[i].month == 'February':
            data[i].month = 2;
            break;
          case data[i].month == 'March':
            data[i].month = 3;
            break;
          case data[i].month == 'April':
            data[i].month = 4;
            break;
          case data[i].month == 'May':
            data[i].month = 5;
            break;
          case data[i].month == 'June':
            data[i].month = 6;
            break;
          case data[i].month == 'July':
            data[i].month = 7;
            break;
          case data[i].month == 'August':
            data[i].month = 8;
            break;
          case data[i].month == 'September':
            data[i].month = 9;
            break;
          case data[i].month == 'October':
            data[i].month = 10;
            break;
          case data[i].month == 'November':
            data[i].month = 11;
            break;
          case data[i].month == 'December':
            data[i].month = 12;
            break;
          default:
            data[i].month = 0;
            break;
        }
      }
    }

    return data;

  }


}
