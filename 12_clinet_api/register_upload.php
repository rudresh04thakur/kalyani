<?php

    //$data = json_decode(file_get_contents('php://input'));
    $data = (object)$_POST;
    //name,email,"contact,contact1,contact2",password
    if($data->email!=''){
        $contactStr = "";
        foreach($data->contact as $c){
            $contactStr.=$c->mobile.',';
        }
        $contactStr = substr($contactStr,0, -1); 

        $con = mysqli_connect("localhost","root","","12_00_7M");

        $target_dir = "uploads/";
        $target_file = $target_dir .date('ymdhis');
        print_r(pathinfo($_FILES['proFile']['name'],PATHINFO_BASENAME));
        //print_r($imageFileType);

        if (move_uploaded_file($_FILES["proFile"]["tmp_name"], $target_file)) {
            $str = "insert into users (name,contact,email,password)values('$data->name','$contactStr','$data->email','$data->password')";
            // //$result = mysqli_query($con,$str) or die(json_encode(['msg'=>mysqli_error($con),'code'=>"false",
            // "class"=>"danger"]));
            echo json_encode(['msg'=>'success','code'=>"true","class"=>"success"]);
        }else{
            echo json_encode(['msg'=>'error','code'=>"false","class"=>"danger"]);
        }
    }else{
        echo json_encode(['msg'=>'error','code'=>"false","class"=>"danger"]);
    }
 ?> 