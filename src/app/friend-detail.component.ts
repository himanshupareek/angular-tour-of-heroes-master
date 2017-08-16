import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Friend } from './friend';
import { FriendService } from './friend.service';

import 'rxjs/add/operator/switchMap';

@Component(
    {
        selector : 'friend-detail',
        templateUrl: './friend-detail.component.html',
        styleUrls: [ './friend-detail.component.css' ]
    }
)

export class FriendDetailComponent implements OnInit
{
    constructor(private friendService: FriendService,private route: ActivatedRoute,private location: Location)
    {

    }

    ngOnInit(): void
    {
        this.route.paramMap.switchMap((params: ParamMap) =>
            this.friendService.getFriend(+params.get('id'))).subscribe(friendObj => this.friend = friendObj);
    }
    
    @Input() friend : Friend;

    goBack(): void {
        this.location.back();
    }

    save(): void {
    this.friendService.update(this.friend).subscribe( () => this.goBack());
    }
}
