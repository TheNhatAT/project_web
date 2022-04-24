<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Personal Information</title>
</head>
<body>
    <div class="leading-loose flex flex-row justify-center">
        <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl basis-6/12 flex flex-col gap-4">
            <p class="text-3xl">Your personal information</p>
            <p class="text-xl">Name: <?php echo $_GET["per_name"]; ?></p>
            <p class="text-xl">University: <?php echo $_GET["per_university"]; ?></p>
            <p class="text-xl">Class: <?php echo $_GET["per_class"]; ?></p>
            <div>
                <p class="text-2xl">Hobby:</p>
                <ul class="list-decimal ml-10">
                    <?php
                    if(isset($_GET['per_hobbies'])){
                        if(!empty($_GET['per_hobbies'])){
                            foreach($_GET['per_hobbies'] as $selected){
                                echo "<li class='text-xl'>$selected.</li>";
                            }
                        }
                    }
                    ?>
                </ul>
            </div>
    </div>
    </div>
</body>
</html>