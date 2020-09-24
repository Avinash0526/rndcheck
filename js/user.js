function complaintForm(){
	window.location.replace('../html/Patient_complaint.html');
}
$(document).ready(function(){
	/* let getData = sessionStorage.getItem("data");
	let objData = JSON.parse(getData);
	console.log(objData) */
	$.get('../js/patientdetails.json', function (data, status) {
		data.map((user)=>{
			$('#addData tbody').append("<tr><td><a href='#' data-id="+user.id+">" + user.name + "</a></td><td>" + user.opnum + "</td><td>" + user.mobile + "</td><td><button type='button' class='btn btn-primary' onclick='complaintForm()'>Take Complaint</button></td></tr>")
		})
	})
	/* objData.map(user=>{
		$('#addData tbody').append("<tr><td><a href='#' data-id="+user.id+">" + user.name + "</a></td><td>" + user.opnum + "</td><td>" + user.mobile + "</td><td><button type='button' class='btn btn-primary' id='complaintForm'>Take Complaint</button></td></tr>")
	}); */

	/* $('#complaintForm').click(()=>{
		window.location.replace('../html/Patient_complaint.html');
	}) */
	
	
	$('a').click(e=>{
		e.preventDefault();
		/* console.log('clicked')
		var idData = $(this).attr('data-id');
		objData.map(user=>{
			console.log(idData, user.id)
			if(idData == user.id){
				$('.patient_data').append(`<p>patient:<span>${user.name}</span></p> <p>Mobile: ${user.mobile}</p><p>Opnum: ${user.opnum}</p>`)
			}
		}) */
	})
})