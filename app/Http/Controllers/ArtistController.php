<?php

namespace App\Http\Controllers;

use App\Http\Traits\DeezerTrait;
use App\Http\Traits\MusicBrainzTrait;
use Inertia\Inertia;

class ArtistController extends Controller
{
    use DeezerTrait, MusicBrainzTrait;

    /**
     * Show the artists list on application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index($id, $name)
    {
        $artists = $this->getResultByMethod('genre/'.$id.'/artists');
        return Inertia::render('Artist/Index', [
            'category' => $name,
            'artists' => $artists
        ]);
    }

    public function show($id, $name)
    {
        $artist_method = 'artist/'.$id;

        $artist_dz = $this->getResultByMethod($artist_method);
        $tops = $this->getResultByMethod($artist_method.'/top');
        $albums = $this->getResultByMethod($artist_method.'/albums');

        $artist_data = $this->getResultByMethodMB('artist/?query=artist:'.$name.'%20AND%alias:'.$name.'%20AND%sort-name:'.$name);
        $artist_mb = $artist_data['artists'][0];

        return Inertia::render('Artist/Show', [
            'artist' => [
                'dreezer' => $artist_dz,
                'musicBz' => $artist_mb
            ],
            'albums' => $albums,
            'tops' => $tops
        ]);
    }
}
