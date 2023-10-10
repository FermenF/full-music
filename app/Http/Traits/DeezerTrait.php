<?php

namespace App\Http\Traits;
use GuzzleHttp\Client;

trait DeezerTrait
{

    protected static $api_url;

    public function __construct()
    {
        self::$api_url = config('services.deezer.api_url');
    }

    protected function getApiRoute($method):string
    {
        $url = self::$api_url;
        return $url.'/'.$method;
    }

    public function getResultByMethod($method)
    {
        $client = new Client();
        $response = $client->request('GET', $this->getApiRoute($method), ['verify' => false]);
        return json_decode($response->getBody(), true);
    }
}
