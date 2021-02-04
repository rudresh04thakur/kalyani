<?php

    $data = json_decode(file_get_contents('php://input'));
    //name,email,"contact,contact1,contact2",password
    if($data->email!=''){
        // $contactStr = "";
        // foreach($data->contact as $c){
        //     $contactStr.=$c->mobile.',';
        // }
        // $contactStr = substr($contactStr,0, -1); 

        $con = mysqli_connect("localhost","root","","12_00_7M");
        $str = "update users set name ='$data->name',
        mobile='$data->mobile',email='$data->email',password='$data->password',status='$data->status' where id ='$data->id'";
        $result = mysqli_query($con,$str) or die(json_encode(['msg'=>mysqli_error($con),'code'=>"false",
        "class"=>"danger"]));
        echo json_encode(['msg'=>'success','code'=>"true","class"=>"success"]);
    }else{
        echo json_encode(['msg'=>'error','code'=>"false","class"=>"danger"]);
    }
 ?> 