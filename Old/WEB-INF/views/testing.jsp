

<jsp:include page="partials/header.jsp"/>



		
<div id="homepage-welcome">
	<h1>Welcome To Natural Healing Reviews</h1>
	<h2>Explore Natural Alternatives for Common Health Problems</h2>
</div>

<img class="green-grass" src="${pageContext.request.contextPath}/resources/img/grass.jpg" alt="Green Grass">




<!-- Used to include the footer and add a custom script if needed for this JSP page -->
<jsp:include page="partials/footer.jsp">
	<jsp:param name="customScript" value="custom-global.js"/>
</jsp:include>