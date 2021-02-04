<?php

     $con = mysqli_connect("localhost","root","","12_00_7M");
     $str = "select * from users where id='".$_REQUEST['id']."'";
     $result = mysqli_query($con,$str) or die(json_encode(['msg'=>'error']));
     $row=mysqli_fetch_assoc($result);
     echo json_encode($row);
 
?> 