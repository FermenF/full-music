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
        $categories = $this->getResultByMethod('editorial');

        return Inertia::render('Home/Home', [
            'data' => [
                'categories' => [
                    $categories
                ],
            ]
        ]);
    }
}

