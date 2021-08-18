<?php

namespace Monolog\app\core;

use mysqli;

class Database
{
  public $db_host = DB_HOST;
  public $db_user = DB_USER;
  public $db_pass = DB_PASS;
  public $db_name = DB_NAME;

  public $sku;
  public $name;
  public $price;
  public $typeSwitcher;
  public $size;
  public $weight;
  public $height;
  public $width;
  public $length;
  
  public function connect(){
    $conn = new mysqli($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
    return $conn;
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
  }
  public function set($name, $value){
    if($value == ''){
      $this->$name = 0;
    }else{
      $this->$name = $value;
    }
  }
  public function get($name){
    return $this->$name;
  }
  public function write($request){
    $arrayKeys = array_keys($request);
    $arrayValues = array_values($request);

    for ($i=0; $i < count($request) ; $i++) { 
      $this->set($arrayKeys[$i], $arrayValues[$i]);
    }
    for ($i=0; $i < count($request) ; $i++) { 
      ${$arrayKeys[$i]} = $this->get($arrayKeys[$i]);
    }
      $conn = $this->connect(); 
      $sql = "INSERT INTO `products`(`id`, `sku`, `name`, `price`, `type`, `size`, `weight`, `height`, `width`, `length`) 
            VALUES (null,'$sku','$name','$price','$typeSwitcher','$size','$weight','$height','$width','$length')";
      if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }
      $conn->close();
  }
  public function read(){ 
    $products = [];
    $query = "SELECT * FROM products";
    if($result = mysqli_query($this->connect(),  $query))
    {
      $cr = 0;
      while( $row = mysqli_fetch_assoc($result))
     {
       $products[$cr]['id'] = $row['id'];
       $products[$cr]['sku'] = $row['sku'];
       $products[$cr]['name'] = $row['name'];
       $products[$cr]['price'] = $row['price'];
       $products[$cr]['type'] = $row['type'];
       $products[$cr]['size'] = $row['size'];
       $products[$cr]['weight'] = $row['weight'];
       $products[$cr]['height'] = $row['height'];
       $products[$cr]['width'] = $row['width'];
       $products[$cr]['length'] = $row['length'];
       $cr++;
     }
      echo json_encode($products);
    }
   
  }
  public function delete($request){
    $idList = implode(",", $request);
    echo "php file delete" . $idList;

    $query = "DELETE FROM `products` WHERE id IN ($idList)";
      $deleteProducts = mysqli_query($this->connect(), $query);
        if(!$deleteProducts){
            echo "Cannot delete from database";
        }
        mysqli_close($this->connect());
  }
}

