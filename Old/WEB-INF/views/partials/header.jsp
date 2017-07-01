<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1">
	<title>${ param.title }</title>
	<!-- bootstrap styles -->
	<link type="text/css" 
		  rel="stylesheet" 
		  href="${pageContext.request.contextPath}/resources/styles/css/bootstrap/bootstrap.min.css">
	<link type="text/css" 
		  rel="stylesheet" 
		  href="${pageContext.request.contextPath}/resources/styles/css/bootstrap/bootstrap-theme.min.css">
	<!-- sidr - responive menu -->
	<link type="text/css" 
		  rel="stylesheet" 
		  href="${pageContext.request.contextPath}/resources/styles/css/sidr/jquery.sidr.dark.css">
	<!-- DataTables Integration -->
	<link type="text/css"
		  rel="stylesheet"
		  href="${pageContext.request.contextPath }/resources/styles/css/dataTables.bootstrap.min.css">
	<!-- custom styles -->
	<link type="text/css" 
		  rel="stylesheet" 
		  href="${pageContext.request.contextPath}/resources/styles/css/application.css">
	

	<!-- google fonts -->
	<link href="https://fonts.googleapis.com/css?family=Croissant+One|PT+Sans" rel="stylesheet">

	<!-- font-awesome -->
	<script src="https://use.fontawesome.com/7f95b8e67a.js"></script>

</head>
<body>

	<div id="main">
		<div id="main-container">
			<!-- title header -->
			<div id="header">

				<!-- logout -->
				<div id="logout-button">
					<a href="#logout"><span title="Logout"><i class="fa fa-sign-out" aria-hidden="true"></i></span></a>
				</div>
				<!-- logout -->
				
				<!-- login -->
				<div id="login-button">
					<a href="${pageContext.request.contextPath}/account/login-form"><span title="Login"><i class="fa fa-sign-in" aria-hidden="true"></i></span></a>
				</div>
				<!-- login -->

				<!-- my account -->
				<div id="my-account">
					<a href="${ pageContext.request.contextPath }/account/create-account" title="My Account"><i class="fa fa-user" aria-hidden="true"></i></a>
				</div>
				<!-- my account -->

				

				<div class="row">
					<div id="assorted-colors">
						<div class="assorted-colors assorted-light"></div>
						<div class="assorted-colors assorted-md-light"></div>
						<div class="assorted-colors assorted-md-dark"></div>
						<div class="assorted-colors assorted-dark"></div>
						<div class="assorted-colors assorted-long"></div>
					</div>
				</div>

				<div class="row">
					<div class="title-text">
						<img class="healing-leaves" src="${pageContext.request.contextPath}/resources/img/leaves.png" alt="Healing Leaves">
						<span>Natural Healing Reviews</span>
					</div>
				</div>
			</div>
			<!-- title header -->

			<!-- navigation -->
			<div class="row desktop-nav">
				<nav>
					<ul class="nav nav-tabs nav-justified">
						<li><a class="active-tab" href="${pageContext.request.contextPath}/test">Home</a></li>
						<li><a href="${ pageContext.request.contextPath }">About</a></li>
						<li><a href="${pageContext.request.contextPath }/conditions/find-conditions">Find Conditions</a></li>
						<li><a href="${pageContext.request.contextPath }/treatments/create-treatment">Submit Treatment</a></li>
						<li><a href="${pageContext.request.contextPath }/conditions/create-condition">Submit Condition</a></li>
					</ul>
				</nav>
			</div>
			<!-- navigation -->
			


			<!-- mobile nav -->
			<div class="mobile-nav mobile-nav-btn">
				<a id="simple-menu" href="#sidr"><span><i class="fa fa-bars" aria-hidden="true"></i></span></a>
			</div>
			<div id="sidr" class="mobile-nav">
				<ul>
					<li><a class="active-tab" href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Find Conditions</a></li>
					<li><a href="#">Submit Treatment</a></li>
					<li><a href="#">Submit Condition</a></li>
				</ul>
			</div>
			<!-- mobile nav -->

			<!-- content -->
			<div id="content">