<?php

$errors = array();    // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ======================================================
// if any of these variables don't exist, add an error to our $errors array

$data = (object)$_REQUEST;
var_dump($data);

if (empty($data->fullname))
    $errors['fullname'] = 'Name is required.';

if (empty($data->email))
    $errors['email'] = 'Email is required.';


// return a response ===========================================================

// if there are any errors in our errors array, return a success boolean of false
if (!empty($errors)) {

    // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    // DO ALL YOUR FORM PROCESSING HERE
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "BD_db";



    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

        $fullname =strip_tags($data->fullname);
        $email =strip_tags($data->email);
        $phone =strip_tags($data->telephone);
        $dob =strip_tags($data->dob);

        $sector =strip_tags($data->sector);
        $org = trip_tags($data->org);
        $position =strip_tags($data->position);
        $size =strip_tags($data->size);
        $url =strip_tags($data->url);

        $qualify =strip_tags($data->qualify);
        $achievement =strip_tags($data->achievement);
        $capacity =strip_tags($data->capacity);
        $specify =strip_tags($data->specify);
        $self =strip_tags($data->self);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO `BD_db`.`nominees` (`id`, `fullanme`, `email`, `phone`, `dob`, `sector`, `org`, `position`, `size`, `url`, `qualify`, `achievement`, `capacity`, `specify`, `isSelf`)
         VALUES (NULL, '$fullname', '$email', '$phone', '$dob', '$sector', '$org', '$position', '$size', '$url', '$qualify', '$achievement', '$capacity', '$specify', '$self');";
        // use exec() because no results are returned
        $conn->exec($sql);
        //echo "New record created successfully";
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;

    // show a message of success and provide a true success variable
    $data['success'] = true;
    $data['message'] = 'Success!';
}

// return all our data to an AJAX call
echo json_encode($data);