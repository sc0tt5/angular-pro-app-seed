import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '../../../store';

@Component({
    selector: 'songs-listened',
    template: `
        <div class="songs">
            <div *ngFor="let item of listened$ | async">
                {{ item.artist }}
                {{ item.track }}
            </div>
        </div>
    `
})
export class SongsListenedComponent implements OnInit {
    listened$: Observable<any[]>;

    constructor(private store: Store) {}

    ngOnInit() {
        this.listened$ = this.store.select('playlist').pipe(
            filter(Boolean),
            map(playlist => playlist.filter(track => track.listened))
        );
    }
}
