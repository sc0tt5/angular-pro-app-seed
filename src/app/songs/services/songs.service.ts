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
    getPlaylist$ = this.http.get<Song[]>('http://localhost:3000/playlist').pipe(
        map(res => res),
        tap(next => this.store.set('playlist', next))
    );

    constructor(private http: HttpClient, private store: Store) {}
}
