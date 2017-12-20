import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Configuration } from './../../app.configuration';
import { FoodItem } from './../../models/foodItem';

@Injectable()
export class FoodDataService {

    private actionUrl: string;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.baseUrl + 'api/foods/';
    }

    getAllFood(): Observable<FoodItem[]> {
        return this._http.get(this.actionUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getSingleFood(id: number): Observable<FoodItem> {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <FoodItem>response.json())
            .catch(this.handleError);
    }

    addFood(foodItem: FoodItem): Observable<FoodItem> {
        let toAdd: string = JSON.stringify(
            {
                name: foodItem.name,
                calories: foodItem.calories,
                created: new Date()
            });

        let options = this.prepareOptions(null);

        return this._http.post(this.actionUrl, toAdd, options)
            .map((response: Response) => <FoodItem>response.json())
            // .do(() => this.foodAdded.emit(null))
            .catch(this.handleError);
    }

    updateFood(id: number, foodToUpdate: FoodItem): Observable<FoodItem> {
        let options = this.prepareOptions(null);

        return this._http.put(this.actionUrl + id, JSON.stringify(foodToUpdate), options)
            .map((response: Response) => <FoodItem>response.json())
            .catch(this.handleError);
    }

    deleteFood(id: number): Observable<Response> {
        return this._http.delete(this.actionUrl + id)
            // .do(() => this.foodDeleted.emit(null))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    private prepareOptions = (options: RequestOptionsArgs): RequestOptionsArgs => {
        options = options || {};

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}
