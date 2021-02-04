<?php
     //$skip = $_REQUEST['skip'];
     //$limit = $_REQUEST['limit'];
     $con = mysqli_connect("localhost","root","","12_00_7M");
     $str = "select * from users"; //limit $skip,$limit";
     $arr=[];
     $result = mysqli_query($con,$str) or die(json_encode(['msg'=>'error']));
     while($row=mysqli_fetch_assoc($result)){
         array_push($arr,$row);
     }
     echo json_encode($arr);
 
?> 