<?php

namespace App\Http\Traits;
use GuzzleHttp\Client;

trait MusicBrainzTrait
{
    protected function getApiRouteMB($method):string
    {
        $url = config('services.music_brainz.api_url');
        return $url.'/'.$method;
    }

    public function getResultByMethodMB($method)
    {
        $client = new Client();
        $response = $client->request('GET', $this->getApiRouteMB($method),
            [
                'verify' => true,
                'headers' => [
                    'Accept' => 'application/json',
                ]
            ]
        );
        return json_decode($response->getBody()->getContents(), true);
    }
}

