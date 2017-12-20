import { FoodItem } from './../../models/foodItem';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class FoodDataService {

    public actionUrl: string;

    constructor(private _http: Http) {
        this.actionUrl = 'http://foodapi4demo.azurewebsites.net/api/food/';
    }

    public GetAllFood = (): Observable<FoodItem[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <FoodItem[]>response.json())
            .catch(this.handleError);
    }

    public GetSingleFood = (id: number): Observable<FoodItem> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <FoodItem>response.json())
            .catch(this.handleError);
    }

    public AddFood = (foodItem: FoodItem): Observable<FoodItem> => {
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

    public UpdateFood = (id: number, foodToUpdate: FoodItem): Observable<FoodItem> => {
        let options = this.prepareOptions(null);

        return this._http.put(this.actionUrl + id, JSON.stringify(foodToUpdate), options)
            .map((response: Response) => <FoodItem>response.json())
            .catch(this.handleError);
    }

    public DeleteFood = (id: number): Observable<Response> => {
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
