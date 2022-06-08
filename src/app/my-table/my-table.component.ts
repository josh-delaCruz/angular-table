import { Component, OnInit } from '@angular/core';
import { Employee } from '../type/Employee';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {


  displayedColumns: string[] = ['id', 'birthDate', 'firstName', 'lastName'];
  
  dataSource :Employee[] = [
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25",
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20",
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27",
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30",
  
    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11",
  
    },
    {
    "id": 10006,
    "birthDate": "1968-012-22",
    "firstName": "Adolfo",
    "lastName": "Guidobaldi",
    "gender": "M",
    "hireDate": "1989-09-22",
   },
   {
    "id": 10007,
    "birthDate": "1955-01-20",
    "firstName": "Don",
    "lastName": "Massimiliano",
    "gender": "M",
    "hireDate": "1989-09-11",
   },
   {
    "id": 10008,
    "birthDate": "1985-05-07",
    "firstName": "Kyoichi",
    "lastName": "Maliniak",
    "gender": "M",
    "hireDate": "1989-09-12",
   },
   {
    "id": 10009,
    "birthDate": "1958-01-30",
    "firstName": "Marco",
    "lastName": "Carta",
    "gender": "M",
    "hireDate": "1989-09-16",
   },
   {
    "id": 10010,
    "birthDate": "1955-01-20",
    "firstName": "Crobo",
    "lastName": "Rolex",
    "gender": "F",
    "hireDate": "1989-09-26",
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
