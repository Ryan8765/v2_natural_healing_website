<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="partials/header.jsp">
	<jsp:param name="title" value="Login"/>
</jsp:include>

				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<h3 class="centered">Login</h3>
						<div class="row">
							<div class="col-md-6 col-md-offset-3 margin-top-sm">
								<form action="">
									<label for="email">Email</label>
									<input type="email" class="form-control">
									<label for="password">Password</label>
									<input type="password" class="form-control">
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<p class="centered"><a href="">Forgot Password?</a></p>
						<div class="row">
							<div class="row">
								<div class="col-md-4 col-md-offset-4">
									<input class="form-control styled-button" type="submit" value="Submit" name="submit">
								</div>
							</div>
							
							<div class="row">
								<div class="centered margin-top-sm">
									OR
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-4 col-md-offset-4 margin-top-sm">
									<input class="form-control styled-button" type="submit" value="Create Account" name="account">
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				
				//testing things with 
				<ul>
					<c:forEach var="tempUser" items="${users}">
						
						<li>${ tempUser.firstName }</li>
						<li>${ tempUser.lastName }</li>
						<li>${ tempUser.dateCreated }</li>					
					</c:forEach>
					
					<li>id - ${ id }</li>
				
				</ul>
				
				


<jsp:include page="partials/footer.jsp"/>
