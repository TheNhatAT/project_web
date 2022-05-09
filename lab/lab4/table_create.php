<html>
    <head>
        <title>Create table</title>
    </head>
    <body>
    <?php
    $server = 'localhost';
    $user = 'root';
    $pass = 'nhat';
    $mydb = 'mydatabase';
    $table_name = 'Products';
    $connect = new mysqli($server, $user, $pass, $mydb);

    if ($connect->connect_error) {
        die("Cannot connect to $server using $user");
    } else {
        $SQLcmd = "CREATE TABLE $table_name(
                        ProductionID INT UNSIGNED NOT NULL AUTO_INCREMENT
                                        PRIMARY KEY,
                        Produc_desc VARCHAR(50),
                        Cost INT,
                        Weight INT,
                        Numb INT 
                    )";
        $DBcmd  = "create table $mydb";

        if ($connect->query($DBcmd) === TRUE) {
            if ($connect->query($SQLcmd) === TRUE){
                print '<font size="4" color="blue" >Created Table';
                print "<i>$table_name</i> in database<i>$mydb</i><br></font>";
                print "<br>SQLcmd=$SQLcmd";
            } else {
                die ("Table Create Creation Failed SQLcmd=$SQLcmd");
            }
            $connect->close();
        }
    }
     ?>
    </body>
</html>