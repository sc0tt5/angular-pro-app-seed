import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

@Component({
    selector: 'songs-playlist',
    template: `
        <div class="songs">
            <!-- ng-content will render "Playlist" (similar to transclude in ng1) -->
            <songs-list [list]="playlist$ | async" (toggle)="onToggle($event)">
                Playlist
            </songs-list>
        </div>
    `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
    playlist$: Observable<any[]>;
    subscription: Subscription;

    constructor(private store: Store, private songsService: SongsService) {}

    ngOnInit() {
        this.playlist$ = this.store.select('playlist');
        this.subscription = this.songsService.getPlaylist$.subscribe(); // would not need if using ngrx
    }

    onToggle(event) {
        this.songsService.toggle(event);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
