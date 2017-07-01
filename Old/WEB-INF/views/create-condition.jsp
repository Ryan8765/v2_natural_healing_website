<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<jsp:include page="partials/header.jsp">
	<jsp:param name="title" value="New Condition"/>
</jsp:include>
				


				<div class="row">	

						<h3 class="centered">Submit New Condition</h3>
						

						<div class="col-md-4 col-md-offset-4">
							<div class="row">
								<p>Haven't found the condition you're looking for?  Submit a new one!  If the condition hasn't been listed yet, it will be added.</p>
							</div>
							
							<form:form cssClass="margin-top" action="create-condition" modelAttribute="condition" method="POST">
								<div class="form-group">	
									<label for="name">Condition Name</label>
									<form:input path="name" cssClass="form-control" placeholder="Enter condition name..." required="required" />
								</div>
								<div class="form-group">	
									<label for="name">Condition Description</label>
									<form:textarea path="description" cssClass="form-control" placeholder="Enter condition description..." cols="30" rows="10" required="required" />
								</div>
								<div class="row">	
									<input type="submit" class="form-control styled-button" value="Submit" name="submit-doctor">
								</div>
							</form:form>		
										
	
						</div>

				</div>
				
				
<jsp:include page="partials/footer.jsp" />