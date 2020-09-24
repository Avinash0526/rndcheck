
let username = 'doctoradmin';
let frntname = 'frontdeskadmin'
let password = 'admin123';
let data;
let num;
var islogin = undefined;
console.log(window.location.origin);
var path = window.location.origin;
path = window.location.origin + '/frontdesk';
/* $('#addpages').attr('src', path+'/html/loginpage.html') */
function filterByID(data) {
    if (data.id == num) {
        console.log(data.name, data.email)
    }
    return false;
}

function currentRow(ele) {
    num = $(ele).closest('.closest').find('.opnum')[0].innerText;
    let chk = data.filter(filterByID)
}

$('#clicktocheck').click(() => {
    window.location.replace('./html/complaintform.html');
})


window.addEventListener('load', function () {
    if (sessionStorage.getItem('Islogin') == 'true') {
        islogin = sessionStorage.getItem('Islogin');
    }
    if (localStorage.getItem('stopLoad') == 'stop') {
        islogin = 'false'
    }
    switch (islogin) {
        case 'true':
            window.location.replace('./html/login.html');
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem('stopLoad', 'stop');
            }
            break;
        case 'false':
            localStorage.clear();
            break;
        case undefined:
            /* window.location.replace('./index.html'); 
			$('#addpages').attr('src', path+'/html/loginpage.html')*/
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem('stopLoad', 'stop');
            }
            break;

    }
})
function addData(ele) {
    let html = $(ele).attr('data-path')
    $.get(html, function (pathCode) {
        $('.afterLogin').html(pathCode);
        dataLoad();
    })
}



function logFun(roleVal, inuname, inpassword) {
    switch (roleVal) {

        case 'frontdesk':
            $('.loader').css('display', 'block');
            $('.showhide').css('visibility', 'hidden');
            /* if (frntname == inuname && password == inpassword) {

                if (typeof (Storage) !== 'undefined') {
                    sessionStorage.setItem('Islogin', 'true');
                    localStorage.setItem('stopLoad', 'stop');
                }
                setTimeout(() => {
                    $('.loader').css('display', 'none');
                    window.location.replace('../html/login.html');
                }, 1000);

            }
            else {
                $('.loader').css('display', 'none');
                $('.showhide').css('visibility', 'visible');
            } */
			 setTimeout(() => {
				$('.loader').css('display', 'none');
				window.location.replace('../html/login.html');
               }, 1000);
            break;
        case 'doctor':
            $('.loader').css('display', 'block');
            $('.showhide').css('visibility', 'hidden');
            /* $.ajax({
                method: "GET",
                url: "./assets/login.php",
                data: { "uname": inuname, "upsw": inpassword },
                success: function (result) {
                    if (typeof (Storage) !== "undefined") {
                        sessionStorage.setItem("data", JSON.stringify(result));
                    }
                    setTimeout(() => {
                        $('.loader').css('display', 'none');
                        window.location.replace('../html/doctorprofile.html');
                    }, 1000)

                },
                error: function () {

                    $('.loader').css('display', 'none');
                    $('.showhide').css('visibility', 'visible');
                }
            }) */
			setTimeout(() => {
				$('.loader').css('display', 'none');
				window.location.replace('../html/doctorprofile.html');
            }, 1000)
            break;
        default:
            $('.showhide').css('visibility', 'visible');
    }
}

$('input[name="getpassword"]').keypress(function (event) {
    if (event.keyCode === 13) {
        $('#mainLogin').click()
    }
});
/***********  Login user **************/
$('#mainLogin').click(function () {
    let inuname = $('input[name="getuname"]').val();
    let inpassword = $('input[name="getpassword"]').val();
    let roleVal = $(this).parent().find('input:checked').attr('data-role');
	/* $('.container input').attr('disabled', true) */
	$.get('../js/loginroles.json', function (data, status) {
		data.map((checkVal)=>{
			if(inuname == checkVal.username && inpassword == checkVal.userpsw && roleVal == checkVal.role){
				logFun(roleVal);
			}
		})
	})
    
})
