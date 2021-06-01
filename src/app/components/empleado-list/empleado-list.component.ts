import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpledo: Empleado [] = [
    {legajo: 1, nombre: 'Arturo', apellido: 'Venegas', sexo: 'Masculino', salario: 35000},
    {legajo: 2, nombre: 'Marisol', apellido: 'Rivas', sexo: 'Femenino', salario: 25000},
    {legajo: 3, nombre: 'Alfonso', apellido: 'Sosa', sexo: 'Masculino', salario: 72000},
    {legajo: 4, nombre: 'Noel', apellido: 'Alvarado', sexo: 'Masculino', salario: 22000},
    {legajo: 5, nombre: 'Karen', apellido: 'Rodriguez', sexo: 'Femenino', salario: 15000},
    {legajo: 6, nombre: 'Monica', apellido: 'Ramirez', sexo: 'Femenino', salario: 42000},
    {legajo: 7, nombre: 'Carlos', apellido: 'Jaquez', sexo: 'Masculino', salario: 5000}
  ]

  radioButtonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTodosEmpleados(): number{
    return this.listEmpledo.length;
  }

  obtenerTodosFemeninos(): number{
    return this.listEmpledo.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTodosMasculinos(): number{
    return this.listEmpledo.filter(list => list.sexo === 'Masculino').length;
  }
}
