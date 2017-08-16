import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { FriendService } from './friend.service';
import { Router } from '@angular/router';


@Component({
    selector : 'my-friends',
    templateUrl : './friends.component.html',
    styleUrls: [ './friends.component.css' ]
})

export class FriendsComponent implements OnInit {

    constructor(private friendService : FriendService, private router: Router)
    {}

    ngOnInit(): void {
        this.getFriends();
    }

    friends : Friend[];

    selectedFriend : Friend;

    onSelect(friend: Friend): void {
        this.selectedFriend = friend;
    };

    gotoFriendDetail(): void {
        this.router.navigate(['/friendDetail', this.selectedFriend.id]);
    }

    getFriends() : void {
        this.friendService.getFriends().subscribe(
            data1 => {
                this.friends = data1
            },
            error => {
                        alert(error);
                    }
        );
    }

    deleteFriend(friend: Friend, event: any): void {
        event.stopPropagation();
        this.friendService
            .delete(friend.id)
            .subscribe(
                () =>
                {
                    this.friends = this.friends.filter( f => f !== friend);
                },
                error => {
                    
                }
            )
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.friendService.create(name).subscribe(
            data => 
            {
                this.friends.push(data);
            },
            error => 
            {

            }
        )
    }
}