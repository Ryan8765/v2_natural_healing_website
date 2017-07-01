<jsp:include page="partials/header.jsp">
	<jsp:param name="title" value="New Account"/>
</jsp:include>

				<h1 class="centered">Create a New Account</h1>
					
				<div class="row">
					<div class="col-md-2 col-md-offset-5">
						<div class="form-group">
							<h3 class="centered">Select Type of Account</h3>
							<select class="form-control" name="selectType" id="show-form">
								<option value="">Select Type</option>
								<option value="doctor">Doctor</option>
								<option value="user">General User</option>
							</select>
						</div>
					</div>
				</div>		
		

				<!-- doctor signup -->
				<div id="doctor-signup" class="margin-top">
					<h4 class="centered">Create New Doctor Account</h4>					
					<form action="">
						<div class="margin-top">
							<div class="row">	
								<div class="col-md-2 col-md-offset-4">
									<div class="form-group">
										<label for="">First Name</label>
										<input class="form-control" type="text" placeholder="First Name">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label for="">Last Name</label>
										<input class="form-control" type="text" placeholder="Last Name">
									</div>
								</div>
							</div>
						</div>
						<div class="row">	
							<div class="col-md-2 col-md-offset-4">
								<div class="form-group">
									<label for="">User Name</label>
									<input class="form-control" type="text" placeholder="User Name">
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for="">Email</label>
									<input class="form-control" type="email" placeholder="Email">
								</div>
							</div>
						</div>
						<div class="row">	
							<div class="col-md-2 col-md-offset-4">
								<div class="form-group">
									<label for="">Type of Practitioner</label>
									<input class="form-control" type="text" placeholder="Practitioner Type">
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for="">License Number</label>
									<input class="form-control" type="text" placeholder="License Number">
								</div>
							</div>
						</div>
						<div class="row">	
							<div class="col-md-2 col-md-offset-4">
								<div class="form-group">
									<label for="">Password</label>
									<input class="form-control" type="password" placeholder="Password">
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for="">Re-enter Password</label>
									<input class="form-control" type="password" placeholder="Re-enter Password">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2 col-md-offset-5 margin-top">
								<input type="submit" class="form-control styled-button" value="Submit" name="submit-doctor">
							</div>
						</div>
					</form>
				</div>
				<!-- doctor signup -->
				
				<!-- genearl user signup -->
				<div id="general-user-signup" class="margin-top">
					<h4 class="centered">Create New General User Account</h4>
					<form action="">
						<div class="margin-top">
							<div class="row">	
								<div class="col-md-2 col-md-offset-5">
									<div class="form-group">
										<label for="">Username</label>
										<input class="form-control" type="text" placeholder="Username">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-2 col-md-offset-5">
									<div class="form-group">
										<label for="">Email</label>
										<input class="form-control" type="email" placeholder="Email">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-2 col-md-offset-5">
									<div class="form-group">
										<label for="">Password</label>
										<input class="form-control" type="password" placeholder="Password">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-2 col-md-offset-5">
									<div class="form-group">
										<label for="">Re-enter Password</label>
										<input class="form-control" type="text" placeholder="Re-enter Password">
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-2 col-md-offset-5 margin-top">
									<input type="submit" class="form-control styled-button" value="Submit" name="submit-general-user">
								</div>
							</div>

						</div>
					</form>
				</div>
				<!-- general user signup -->


				
<jsp:include page="partials/footer.jsp">
	<jsp:param name="customScript" value="custom-create-account.js"/>
</jsp:include>