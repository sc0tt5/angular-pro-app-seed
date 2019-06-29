import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Store } from '../../store';

export interface Song {
    id: number;
    artist: string;
    track: string;
    name: string;
    listened: boolean;
    favourite: boolean;
}
@Injectable()
export class SongsService {
    api = 'http://localhost:3000/playlist';

    getPlaylist$ = this.http.get<Song[]>(this.api).pipe(
        map(res => res),
        tap(next => this.store.set('playlist', next))
    );

    constructor(private http: HttpClient, private store: Store) {}

    toggle(event: any) {
        this.http
            .put<Song>(`${this.api}/${event.track.id}`, event.track)
            .pipe(map(res => res))
            .subscribe(() => {
                const value = this.store.value.playlist;

                const playlist = value.map((song: Song) => {
                    if (event.track.id === song.id) {
                        return { ...song, ...event.track };
                    } else {
                        return song;
                    }
                });

                this.store.set('playlist', playlist);
            });
    }
}
