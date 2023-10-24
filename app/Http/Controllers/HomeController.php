<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Traits\DeezerTrait;

class HomeController extends Controller
{
    use DeezerTrait;
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $categories = $this->getResultByMethod('genre');

        return Inertia::render('Home/Home', [
            'data' => [
                'categories' => [
                    $categories
                ],
            ]
        ]);
    }

    public function queryFilter($query)
    {
        $results = $this->getResultByMethod('search?q='. $query);

        return Inertia::render('Search/Search', [
            'data' => $results
        ]);
    }
}

