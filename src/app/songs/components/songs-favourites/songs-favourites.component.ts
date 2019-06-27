import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '../../../store';

@Component({
    selector: 'songs-favourites',
    template: `
        <div class="songs">
            <div *ngFor="let item of favourites$ | async">
                {{ item.artist }}
                {{ item.track }}
            </div>
        </div>
    `
})
export class SongsFavouritesComponent implements OnInit {
    favourites$: Observable<any[]>;

    constructor(private store: Store) {}

    ngOnInit() {
        this.favourites$ = this.store.select('playlist').pipe(
            filter(Boolean), // only run this if there is data
            map(playlist => playlist.filter(track => track.favourite))
        );
    }
}
