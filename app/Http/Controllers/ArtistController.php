<?php

namespace App\Http\Controllers;

use App\Http\Traits\DeezerTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtistController extends Controller
{
    use DeezerTrait;

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
}
