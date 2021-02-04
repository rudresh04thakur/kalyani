<?php

    $data = json_decode(file_get_contents('php://input'));

    $con = mysqli_connect("localhost","root","","12_00_7M");
    for($i=0;$i<100;$i++){
    $str = "insert into logger (log,type) values('Log $i','info')";
    $result = mysqli_query($con,$str) or die(json_encode(['msg'=>mysqli_error($con),'code'=>"false",
    "class"=>"danger"]));
    }
 ?> 