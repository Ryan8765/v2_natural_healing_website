<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
			</div>
			<!-- content -->


		</div>

	</div>
	<!-- end main -->



<!-- *************Scripts************* -->	

<!-- jquery -->
<script src="${pageContext.request.contextPath}/resources/js/jquery/jquery-3.1.1.min.js"></script>
<!-- sidr - reponsive menu-->
<script src="${pageContext.request.contextPath}/resources/js/sidr/jquery.sidr.min.js"></script>
<!-- bootstrap -->
<script src="${pageContext.request.contextPath}/resources/js/bootstrap/bootstrap.min.js"></script>
<!-- listjs -->
<script src="${pageContext.request.contextPath}/resources/js/listjs/listjs.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/listjs/pagination.js"></script>
<!-- dataTables -->
<script src="${pageContext.request.contextPath }/resources/js/datatables/dataTables.min.js"></script>
<script src="${pageContext.request.contextPath }/resources/js/datatables/dataTables.bootstrap.min.js"></script>
<!-- Custom Scripts -->
<script src="${pageContext.request.contextPath}/resources/js/custom-global.js"></script>
	<!-- This only adds a script if provided by the user in the view in the include statement -->
<c:if test="${not empty param.customScript}">
	<script src="${pageContext.request.contextPath}/resources/js/${ param.customScript }"></script>
</c:if>



</body>
</html>