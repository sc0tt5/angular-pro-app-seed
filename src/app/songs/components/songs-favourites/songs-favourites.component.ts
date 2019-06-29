import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '../../../store';
import { SongsService } from './../../services/songs.service';

@Component({
    selector: 'songs-favourites',
    template: `
        <div class="songs">
            <!-- ng-content will render "Played" (similar to transclude in ng1) -->
            <songs-list [list]="favourites$ | async" (toggle)="onToggle($event)"
                >Favourites</songs-list
            >
        </div>
    `
})
export class SongsFavouritesComponent implements OnInit {
    favourites$: Observable<any[]>;

    constructor(private store: Store, private songsService: SongsService) {}

    ngOnInit() {
        this.favourites$ = this.store.select('playlist').pipe(
            filter(Boolean), // only run this if there is data
            map(playlist => playlist.filter(track => track.favourite))
        );
    }

    onToggle(event) {
        this.songsService.toggle(event);
    }
}
