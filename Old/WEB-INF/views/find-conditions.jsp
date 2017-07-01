<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="partials/header.jsp">
	<jsp:param name="title" value="Conditions"/>
</jsp:include>

				<div>
					<div class="row">
						<h3 class="centered">Search Conditions</h3>
						<div class="col-md-2 col-md-offset-5">
							<div id="search-conditions">
							    <input class="search form-control" placeholder="Search" />
							    <ul class="pagination"></ul>
							    <ul class="list centered">
							    	<c:forEach var="tempCondition" items="${conditions}">
										<li><p class="search-item"><a href="${ pageContext.request.contextPath }/treatments/treatment/${ tempCondition.id }">${ tempCondition.name }</a></p></li>					
									</c:forEach>
							    </ul>
							</div>
						</div>
					</div>
				</div>

				
				

<jsp:include page="partials/footer.jsp">
	<jsp:param name="customScript" value="custom-find-conditions.js"/>
</jsp:include>		





