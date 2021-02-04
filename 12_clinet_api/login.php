<?php

    $data = json_decode(file_get_contents('php://input'));
    //name,email,"contact,contact1,contact2",password
    if($data->email!=''){
        $con = mysqli_connect("localhost","root","","12_00_7M");
        $str = "select * from users where email='$data->email' and password='$data->password'";
        $result = mysqli_query($con,$str) or die(json_encode(['msg'=>mysqli_error($con),'code'=>"false",
        "class"=>"danger"]));
        if(mysqli_num_rows($result)>0){
            echo json_encode(['msg'=>'success','code'=>"true","class"=>"success",'data'=>mysqli_fetch_assoc($result)]);
        }else{
            echo json_encode(['msg'=>'error','code'=>"false","class"=>"danger",'data'=>'']);
        } 
    }else{
        echo json_encode(['msg'=>'error','code'=>"false","class"=>"danger",'data'=>'']);
    }
 ?> 