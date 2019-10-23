import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../../models/foodItem';
import { Configuration } from '../../app.configuration';

@Injectable()
export class ItemDataService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.baseUrl + 'api/foods/';
  }

  getAllFood(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(this.actionUrl);
  }

  getSingleFood(id: number): Observable<FoodItem> {
    return this.http.get<FoodItem>(this.actionUrl + id);
  }

  addFood(foodItem: FoodItem): Observable<FoodItem> {
    const toAdd = {
      name: foodItem.name,
      calories: foodItem.calories,
      created: new Date()
    };

    return this.http.post<FoodItem>(this.actionUrl, toAdd);
  }

  updateFood(id: number, foodToUpdate: FoodItem): Observable<FoodItem> {
    return this.http.put<FoodItem>(this.actionUrl + id, foodToUpdate);
  }

  deleteFood(id: number): Observable<Object> {
    return this.http.delete(this.actionUrl + id);
  }
}
