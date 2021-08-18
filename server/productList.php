<?php
session_start();
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
require __DIR__ . "/vendor/autoload.php";
require "app/init.php";

$db = new Monolog\app\core\Database();

$db->read();
