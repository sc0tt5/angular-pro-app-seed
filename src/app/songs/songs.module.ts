import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [
        SongsFavouritesComponent,
        SongsListenedComponent,
        SongsPlaylistComponent
    ],
    exports: [SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent]
})
export class SongsModule {}
