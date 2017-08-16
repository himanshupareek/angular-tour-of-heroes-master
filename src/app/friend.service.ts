import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Friend } from './friend';

@Injectable()

export class FriendService
{
    private friendsUrl = 'app/friends';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getFriends() {
        return this.http.get(this.friendsUrl).map(res => res.json().data);
                    
    }
    
    delete(id: number) {
        const url = `${this.friendsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).map( () => null);
    }

    create(name: string) {
        return this.http
            .post(this.friendsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .map( res => res.json().data);
    }

    getFriend(id: number) {
        const url = this.friendsUrl + '/' + id;
        return this.http.get(url).map(res => res.json().data);
    }

    update(friend: Friend) {
        const url = `${this.friendsUrl}/${friend.id}`;
        return this.http
            .put(url, JSON.stringify(friend), {headers: this.headers}).map( () => friend);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
}