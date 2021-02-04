<?php
    $skip = $_REQUEST['skip'];
    $limit = $_REQUEST['limit'];
    $arr = [];
    $con = mysqli_connect("localhost","root","","12_00_7M");
    $str = "SELECT * from logger limit $skip,$limit";
    $result = mysqli_query($con,$str) or die(json_encode(['msg'=>mysqli_error($con),'code'=>"false",
    "class"=>"danger"]));
    while($row=mysqli_fetch_assoc($result)){
        array_push($arr,$row);
    }
    echo json_encode(['logs'=>$arr,'count'=>count($arr)]);
 ?> 