import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table Component';

  constructor(
  ){}
  
  custHeader=['Employee ID','Designation','Mobile no','Address'];
  contents=[
    {
      'Employee ID':'153','Designation':'ASE','Mobile no':'9999999999','Address':'Hyderabad'
    },
    {
      'Employee ID':'101','Designation':'System Engineer','Mobile no':'9999988888','Address':'Chennai'
    },
    {
      'Employee ID':'102','Designation':'Tech-Lead','Mobile no':'8888899999','Address':'Banglore'
    },
    {
      'Employee ID':'133','Designation':'ASE','Mobile no':'9999999999','Address':'Hyderabad'
    },
    {
      'Employee ID':'178','Designation':'System Engineer','Mobile no':'9999988888','Address':'Chennai'
    },
    {
      'Employee ID':'146','Designation':'Tech-Lead','Mobile no':'8888899999','Address':'Banglore'
    },
    {
      'Employee ID':'128','Designation':'ASE','Mobile no':'9999999999','Address':'Hyderabad'
    },
    {
      'Employee ID':'185','Designation':'System Engineer','Mobile no':'9999988888','Address':'Chennai'
    },
    {
      'Employee ID':'174','Designation':'Tech-Lead','Mobile no':'8888899999','Address':'Banglore'
    },
    {
      'Employee ID':'177','Designation':'ASE','Mobile no':'9999999999','Address':'Hyderabad'
    },
    {
      'Employee ID':'101','Designation':'System Engineer','Mobile no':'9999988888','Address':'Chennai'
    },
    {
      'Employee ID':'132','Designation':'Tech-Lead','Mobile no':'8888899999','Address':'Banglore'
    },
    {
      'Employee ID':'100','Designation':'ASE','Mobile no':'9999999999','Address':'Hyderabad'
    },
    {
      'Employee ID':'121','Designation':'System Engineer','Mobile no':'9999988888','Address':'Chennai'
    },
    {
      'Employee ID':'126','Designation':'Tech-Lead','Mobile no':'8888899999','Address':'Banglore'
    }
  ];
}
