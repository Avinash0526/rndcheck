
function dataLoad() {
    /* $.ajax({
        url: '../assets/fetch.php',
        method: "POST",
        success: function (result) {
            result.map(user => {
                console.log(user)
                if (user.name == '') {
                    return false
                }
                else {
                    $('#showpages table tbody').append("<tr><td class='opnum' align='center'>" + user.opnum + "</td><td>" + user.name + "</td><td>" + user.mobile + "</td><td><button type='button' onclick='currentRow(this)' class='btn btn-primary' data-id =" + user.id + ">Assign doctor</button></td></tr>")
                }
            });
        }

    }); */
	$.get('../js/patientdetails.json', function (data, status) {
		data.map(user => {
                console.log(user)
                if (user.name == '') {
                    return false
                }
                else {
                    $('#showpages table tbody').append("<tr><td class='opnum' align='center'>" + user.opnum + "</td><td>" + user.name + "</td><td>" + user.mobile + "</td><td><button type='button' onclick='currentRow(this)' class='btn btn-primary' data-id =" + user.id + ">Assign doctor</button></td></tr>")
                }
            });
	})
};


function getDta() {
    dataLoad()
}

function currentRow(ele) {
    $('.totalPage').addClass('blur')
    let id = $(ele).attr('data-id');
    $('.popForm').addClass('moveUp');
    console.log(id);
    /* $.ajax({
        url: '../assets/fetch.php',
        method: "POST",
        success: function (result) {
            $.each(result, function (i, element) {
                if (id == element.id) {
                    console.log(element.name);
                    $(".subForm input[name='opnum']").val(element.opnum);
                    $(".subForm input[name='pname']").val(element.name);
                    $(".subForm input[name='mobile']").val(element.mobile);
                }
            });
        }

    }); */
	$.get('../js/patientdetails.json', function (data, status) {
		 $.each(data, function (i, element) {
                if (id == element.id) {
                    console.log(element.name);
                    $(".subForm input[name='opnum']").val(element.opnum);
                    $(".subForm input[name='pname']").val(element.name);
                    $(".subForm input[name='mobile']").val(element.mobile);
                }
            });
	})
}

$('#closeAssign').click(() => {
    $('.popForm').removeClass('moveUp');
    $('.totalPage').removeClass('blur')
})

/***********  logout session **************/
$('#logout').click(() => {
    sessionStorage.removeItem('Islogin')
    window.location.replace('../index.html');
})
$('#closeForm').click(() => {
    window.location.replace('../html/login.html');
})
/***********  Search patient **************/
$('#txt_searchall').keyup(function () {
    var search = $(this).val();
    $('#showpages table tbody tr').hide();
    var len = $('#showpages table tbody tr td:contains("' + search + '")').length;
    if (len > 0) {
        $('#showpages table tbody tr td:contains("' + search + '")').each(function () {
            $(this).closest('tr').show();
            $('#showpages table tbody tr.notfound').remove()
        });
    }
    else {
        $('#showpages table tbody').append("<tr class='notfound'><td colspan=4 align='center'> Data Not found</td></tr>")
    }

});

/***********  Add patient **************/
$('#addPatient').click(function () {
    window.location.replace('../html/newregistration.html');
    $('#vid-controls').hide();
})
