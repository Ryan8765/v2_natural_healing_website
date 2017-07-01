<jsp:include page="partials/header.jsp">
	<jsp:param name="title" value="New Treatment"/>
</jsp:include>
				


				<div class="row">	
					<h3 class="centered">Create Treatment</h3>

					<div class="col-md-4 col-md-offset-4">
						<div class="form-group">
							<h4>Description of Treatment</h4>
							<textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
						</div>
						<div class="form-group">
							<h4>Precautions/Side Effects Noted</h4>
							<textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
						</div>
						<div class="form-group">
							<h4 class="margin-top">Add Treatment Items</h4>
							<div class="row">
								<div class="col-md-6">
									<label for="">Name</label>
									<input class="form-control treatment-item" type="text" placeholder="Name">
								</div>
								<div class="col-md-6">
									<label for="">Brand Name</label>
									<input class="form-control treatment-item" type="text" placeholder="Brand Name">
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<label for="">Dosage/Frequency</label>
									<input class="form-control treatment-item" type="text" placeholder="Dosage/Frequency">
								</div>
								<div class="col-md-6">
									<label for="">Cost</label>
									<input class="form-control treatment-item" type="number" placeholder="Cost" min="0">
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<label for="">Miscellaneous Notes</label>
									<input class="form-control treatment-item" type="text" placeholder="Misc">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-2 col-md-offset-5 margin-top-sm">
						<input id="add-item" type="submit" class="form-control styled-button" value="Add Item" name="submit-doctor">
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<h4 class="centered margin-top">Treatment Items</h4>
						<table id="treatment-item-table" class="table table-bordered table-style">
							<thead>
								<tr>
									<th>Name</th>
									<th>Brand Name</th>
									<th>Dosage/Frequency</th>
									<th>Misc Notes</th>
									<th>Cost</th>
								</tr>
							</thead>
							
							<tbody id="append">
								<tr>
									<td>Charcoal</td>
									<td>Natures Way</td>
									<td>3/day</td>
									<td>Write something</td>
									<td>256$</td>
									<td><span title="Remove" class="delete-treatment-item"><i class="fa fa-times-circle" aria-hidden="true"></i></span></td>
								</tr>
								<tr>
									<td>Charcoal</td>
									<td>Natures Way</td>
									<td>3/day</td>
									<td>Write something</td>
									<td>256$</td>
									<td><span title="Remove" class="delete-treatment-item"><i class="fa fa-times-circle" aria-hidden="true"></i></span></td>
								</tr>
								<tr>
									<td>Charcoal</td>
									<td>Natures Way</td>
									<td>3/day</td>
									<td>Write something</td>
									<td>256$</td>
									<td><span title="Remove" class="delete-treatment-item"><i class="fa fa-times-circle" aria-hidden="true"></i></span></td>
								</tr>
								<tr>
									<td>Charcoal</td>
									<td>Natures Way</td>
									<td>3/day</td>
									<td>Write something</td>
									<td>256$</td>
									<td><span title="Remove" class="delete-treatment-item"><i class="fa fa-times-circle" aria-hidden="true"></i></span></td>
								</tr>

							</tbody>
						</table>
					</div>
					<div class="row">
						<div class="col-md-2 col-md-offset-5">
							
							<input type="submit" class="form-control styled-button" value="Submit Treatment">
							
						</div>
					</div>

				</div>
				
				

<jsp:include page="partials/footer.jsp">
	<jsp:param name="customScript" value="custom-create-condition.js"/>
</jsp:include>


