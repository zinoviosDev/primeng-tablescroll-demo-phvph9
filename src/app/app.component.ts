import {Component} from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';
import { FilterUtils } from 'primeng/utils';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent { 
    cars1: Car[];

    cars2: Car[];

    cols: any[];

    frozenCars: Car[];

    frozenCols: any[];

    scrollableCols: any[];
    
    dialogVisible: boolean;

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars1 = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    addCar() {
      const newCar = {
            vin: 'x',
            year: 2001,
            brand: 'Renault',
            color: 'purple',
            price: '750',
            saleDate: '2018-10-14'
          };
          this.cars1 = [...this.cars1, newCar];
    }

    showDialog() {
        this.dialogVisible = true;
    }
}
