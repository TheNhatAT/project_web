<html>
<header>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
  body {
    max-width: max-content;
    margin: auto;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg)}

  button {
    background-color: #008CBA;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    border-radius: 8px;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: 45%
  }
  input{
    width: 100%;
    border: 4px  blue;
    border-radius: 4px;
    height: 7%;
    background-color: #f1f1f1;
    text-indent: 10px;
  }
</style>
<script type="text/javascript">

  function valueChanged() {
    if (document.getElementById('advancecheck').checked) {
        document.getElementById("hobbies").style.display = 'block';
    } else {
      document.getElementById("hobbies").style.display = 'none';
    }
  }

</script>
</header>
<body>
  <img src="code4fun.png"/>
  <h2>Điền thông tin của bạn vào form dưới đây</h2>
    <form action="display.php" method="get">
    Họ và tên:<br> <input type="text" name="name" placeholder="Enter your name"><br>
    Trường: <br><input type="text" name="school" placeholder="Enter your school's name"><br>
    Lớp: <br><input type="text" name="class" placeholder="Enter your class's name"><br>
    Sở thích:
    <label class="container">Đọc sách
      <input type="checkbox" name="hobbies[]" value="Đọc sách" checked="checked">
      <span class="checkmark"></span>
    </label>
    <label class="container">Nghe nhạc
      <input type="checkbox" name="hobbies[]" value="Nghe nhạc">
      <span class="checkmark"></span>
    </label>
    <label class="container">Xem phim
      <input type="checkbox" name="hobbies[]" value="Xem phim">
      <span class="checkmark"></span>
    </label>
    <label class="container">Du lịch
      <input type="checkbox" name="hobbies[]" value="Du lịch">
      <span class="checkmark"></span>
    </label>
    <label class="container">Thêm sở thích khác
      <input type="checkbox" name="advancecheck" id="advancecheck" onChange="valueChanged()"/>
      <span class="checkmark"></span>  
    </label>
    <div id="hobbies" style="display:none;">
      <input type="text" name="hobby" id="subnetmask"><br>
    </div>
  <button type="submit">Đăng ký</button>
  <br>
</form>
</body>
</html>