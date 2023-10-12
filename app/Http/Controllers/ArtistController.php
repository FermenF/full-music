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
        $result = $this->getResultByMethodMB('artist/?query=artist:'.$name.'%20AND%alias:'.$name.'%20AND%sort-name:'.$name);
        return Inertia::render('Artist/Show', [
            'artist' => $result['artists'][0]
        ]);
    }
}
