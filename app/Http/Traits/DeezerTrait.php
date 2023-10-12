<?php

namespace App\Http\Traits;
use GuzzleHttp\Client;

trait DeezerTrait
{
    protected function getApiRoute($method):string
    {
        $url = config('services.deezer.api_url');
        return $url.'/'.$method;
    }

    public function getResultByMethod($method)
    {
        $client = new Client();
        $response = $client->request('GET', $this->getApiRoute($method), ['verify' => false]);
        return json_decode($response->getBody(), true);
    }
}
