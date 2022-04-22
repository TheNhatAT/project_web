<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Time Validation</title>
</head>
<style>
     body{
        max-width: max-content;
        margin: auto;
        font-family: Sofia;
    
    }
    button {
    background-color: #008CBA;
    color: white;
    padding: 8px;
    border-radius: 5px;
    border: none;
    }
    #button1{
        margin-left: 40%
    }
    h4{
        color: red
    }
</style>
<body>
<?php
    $selected_h = $selected_mi = $selected_s = $selected_d = $selected_m = $selected_y = $dayOfMonth =12;
    $name = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
  }
  

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $selected_h = test_input($_POST["hours"]);
  }
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $selected_mi = test_input($_POST["minute"]);
  }
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $selected_s = test_input($_POST["seconds"]);
  }
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $selected_m = test_input($_POST["month"]);
    }
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $selected_d = test_input($_POST["day"]);
  }
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $selected_y = test_input($_POST["year"]);
  }
  switch ($selected_m) {
    case "1" :
        $dayOfMonth = "31";
      break;
    case "1" :
        $dayOfMonth = "31";
      break;
    case "5":
        $dayOfMonth = "31";
      break;
    case "7":
        $dayOfMonth = "31";
      break;
    case "8":
        $dayOfMonth = "31";
        break;
    case "10":
        $dayOfMonth = "31";
      break;
    case "11":
        $dayOfMonth = "31";
      break;
    case "2":
        if(!($selected_y%4)){
            $dayOfMonth = "29";
        }
        else{
            $dayOfMonth = "28";
        }
      break;
    case "4" :
        $dayOfMonth = "30";
      break; 
    case "6" :
        $dayOfMonth = "30";
      break;
    case "9" :
        $dayOfMonth = "30";
      break;
    case "11" :
        $dayOfMonth = "30";
      break;   
    default:
      $dayOfMonth = "30";
  }

  $date=new DateTime();
  $date->setDate($selected_y, $selected_m, $selected_d);
  $date->setTime($selected_h, $selected_mi, $selected_s);

  $date1 = new DateTime();
  $date1->setDate($selected_y, $selected_m, $selected_d+1/2);
  $date1->setTime($selected_h+12, $selected_mi, $selected_s);
  
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
    <img src = "appointment.jpg"/>
    <h3>Enter your name and select date and time for the appointment</h3>
    <form  method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Họ và tên: <input type="text" name="name" placeholder="Enter your name" value="<?php echo $name;?>"><br><br>
    Ngày: 
    <?php
    $selected_day = date('d'); //current day

    echo '<select id="day" name="day">'."\n";
    for ($i_day = 1; $i_day <= 31; $i_day++) { 
        $selected = ($selected_day == $i_day ? ' selected' : '');
        echo '<option value="'.$i_day.'"'.$selected.'>'.$i_day.'</option>'."\n";
    }
    echo '</select>'."\n";
    ?>
    <?php
    $selected_month = date('m'); //current month

    echo '<select id="month" name="month">'."\n";
    for ($i_month = 1; $i_month <= 12; $i_month++) { 
        $selected = ($selected_month == $i_month ? ' selected' : '');
        echo '<option value="'.$i_month.'"'.$selected.'>'. $i_month.'</option>'."\n";
    }
    echo '</select>'."\n";
    ?>

    <?php 
    $year_start  = 2020;
    $year_end = 2039; // current Year
    $user_selected_year = date('Y'); // user date of birth year

    echo '<select id="year" name="year">'."\n";
    for ($i_year = $year_start; $i_year <= $year_end; $i_year++) {
        $selected = ($user_selected_year == $i_year ? ' selected' : '');
        echo '<option value="'.$i_year.'"'.$selected.'>'.$i_year.'</option>'."\n";
    }
    echo '</select>'."\n";
    ?><br><br>
    Thời gian:
    <?php
    $selected_hours = date('H'); 
    echo '<select id="hours" name="hours">'."\n";
    for ($i_hours = 1; $i_hours <= 24; $i_hours++) { 
        $selected = ($selected_hours == $i_hours ? ' selected' : '');
        echo '<option value="'.$i_hours.'"'.$selected.'>'. $i_hours.'</option>'."\n";
    }
    echo '</select>'."\n";
    ?>
    <?php
    $selected_minute = date('i'); 

    echo '<select id="minute" name="minute">'."\n";
    for ($i_minute = 1; $i_minute <= 60; $i_minute++) { 
        $selected = ($selected_minute == $i_minute ? ' selected' : '');
        echo '<option value="'.$i_minute.'"'.$selected.'>'. $i_minute.'</option>'."\n";
    }
    echo '</select>'."\n";
    ?>
    <?php
    $selected_seconds = date('s'); 

    echo '<select id="seconds" name="seconds">'."\n";
    for ($i_seconds = 1; $i_seconds <= 60; $i_seconds++) { 
        $selected = ($selected_seconds == $i_seconds ? ' selected' : '');
        echo '<option value="'.$i_seconds.'"'.$selected.'>'. $i_seconds.'</option>'."\n";
    }
    echo '</select>'."\n";
    ?><br><br>
    <button id="button1" type="submit" name="submit" value="Submit">Submit</button> <button type = "submit" name="reset">Reset</button>
    </form>
    <?php
    if($_SERVER['REQUEST_METHOD'] == "POST" )
    {
        display($name,$date, $date1,$dayOfMonth );
    }
    function display($name,$date, $date1,$dayOfMonth ){
    echo "<h3>Hi ". $name."</h3>";
    echo "You have choose to have an appointment on "; echo $date->format('H:i:s Y-m-d A');
    echo "<br>";
    echo "<h4>More information</h4>";
    echo "In 12 hours, the time and date is ";
    echo $date1->format('H:i:s Y-m-d A');
    echo "<br>";
    echo "This month has ".$dayOfMonth." days"; }
    
    
    ?>
</body>
</html>