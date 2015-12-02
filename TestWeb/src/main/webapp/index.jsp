<html>
<head>
<title>Web App Test</title>
<link rel="stylesheet" type="text/css" href="css/vendor/bootstrap.css">
</head>
<body>
	
	<nav>
	  <li><a href="#main"> Main Page </a></li>
      <li><a href="#second"> Second Page </a></li>
	</nav>
	
	<div ng-app="mainApp">
		<div ng-view></div>	
	</div>
	
	<script src="js/vendor/angular.js"></script>
	<script src="js/controllers/main.js"></script>
	<script src="js/controllers/one.js"></script>
	<script src="js/controllers/two.js"></script>
	<script src="js/vendor/angular-route.js"></script>
	<script src="js/vendor/jquery-2.1.4.js"></script>
	<script src="js/vendor/bootstrap.js"></script>
	
</body>
</html>
