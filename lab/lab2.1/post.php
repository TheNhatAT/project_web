<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Personal Information</title>
</head>
<body>
<div class="leading-loose flex flex-row justify-center">
    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl basis-6/12 " action="get.php" method="get">
        <p class="text-gray-800 font-medium">Personal information</p>
        <div class="">
            <label class="block text-sm text-gray-00" for="per_name">Name</label>
            <input class="w-full px-2 py-2  text-gray-700 bg-gray-200 rounded" id="per_name" name="per_name" type="text" required="true" placeholder="Your Name" aria-label="Name">
        </div>
        <div class="mt-2">
            <label class="block text-sm text-gray-600" for="per_email">Class</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="per_class" name="per_class" type="text" required="true" placeholder="Your Class" aria-label="Class">
        </div>
        <div class="my-2">
            <label class=" block text-sm text-gray-600" for="per_university">University</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="per_university" name="per_university" type="text" required="true" placeholder="University" aria-label="University">
        </div>
        <div class="flex flex-col">
            <label class=" block text-sm text-gray-600" for="per_university">Hobbies</label>
            <div class="flex flex-col">
                <label class="inline-flex items-center mt-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" name="per_hobbies[]" value="Cycle"><span class="ml-2 text-gray-700">Cycle</span>
                </label>

                <label class="inline-flex items-center mt-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" name="per_hobbies[]"  value="Running"><span class="ml-2 text-gray-700">Running</span>
                </label>

                <label class="inline-flex items-center mt-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600" name="per_hobbies[]" value="Swimming"><span class="ml-2 text-gray-700">Swimming</span>
                </label>

                <label class="inline-flex items-center mt-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600" name="per_hobbies[]" value="Reading"><span class="ml-2 text-gray-700">Reading</span>
                </label>
            </div>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-32 py-3 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300">Registry</button>
    </form>
</div>
</body>
</html>