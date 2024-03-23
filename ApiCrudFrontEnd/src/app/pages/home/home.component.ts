import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employee: Employee[] = [];
  genEmployee: Employee[] = [];

  columns = ['Active','Name', 'LastName', 'Department', 'Actions', 'Delete' ]
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.GetEmployees().subscribe((data) => {
      const datas = data.data;
      datas.map((item) => {
        item.createdDate = new Date(item.createdDate!).toLocaleDateString(
          'pt-BR'
        );
        item.modifiedDate = new Date(item.modifiedDate!).toLocaleDateString(
          'pt-BR'
        );
      });
      //console.log(datas)
      this.employee = data.data;
      this.genEmployee = data.data;

      //console.log(this.employee)
      // console.log(this.genEmployee)
    });
  }
  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    console.log(value)
    this.employee =this.genEmployee.filter(employee => {
      return employee.name.toLowerCase().includes(value);
    })
  }
}
