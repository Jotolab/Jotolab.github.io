// Get parameters from Url
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}

// example.com?param1=name&param2=&id=6
$.urlParam('param1'); // name
//            $.urlParam('id');        // 6
//            $.urlParam('param2');   // null
var pnValue = decodeURIComponent($.urlParam('pn')).replace(/\+/g, ' ');
var inValue = decodeURIComponent($.urlParam('in')).replace(/\+/g, ' ');
var isValue = decodeURIComponent($.urlParam('is')).replace(/\+/g, ' ');
var qtyValue = decodeURIComponent($.urlParam('qty')).replace(/\+/g, ' ');
var totalValue = decodeURIComponent($.urlParam('total')).replace(/\+/g, ' ');

$("input[name='pn']").attr('value', pnValue);
$("input[name='in']").attr('value', inValue);
$("input[name='is']").attr('value', isValue);
$("input[name='qty']").attr('value', qtyValue);
$("input[name='total']").attr('value', totalValue);

if (pnValue === "Custome Order") {
    $(".shippingFee").show();
}
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBasVDeO5TNFnFX-wB0MBr_Fh_vRCKYbOM",
    authDomain: "jotolabproject.firebaseapp.com",
    databaseURL: "https://jotolabproject.firebaseio.com",
    projectId: "jotolabproject",
    storageBucket: "jotolabproject.appspot.com",
    messagingSenderId: "473126506010"
};
firebase.initializeApp(config);
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

//Listen for file selection
$('#submit').on('click', function (e) {
    if (pnValue == "10 Photos / 2 FREE") {
        if (fileButton.files.length > 12 || fileButton.files.length < 10) {
            alert("Upload Only 10 Photos! Dont forget 2 photos free");
        } else {
            var imgIndex = 11;
            fileCheck(imgIndex);
        }

    } else if (pnValue == "20 Photos / 5 FREE") {
        if (fileButton.files.length > 25 || fileButton.files.length < 20) {
            alert("Upload Only 20 Photos! Dont forget 5 photos free");
        } else {
            imgIndex = 24;
            fileCheck(imgIndex);
        }

    } else if (pnValue == "50 Photos / 20 FREE") {
        if (fileButton.files.length > 70 || fileButton.files.length < 50) {
            alert("Upload Only 50 Photos! Dont forget 20 photos free");
        } else {
            imgIndex = 69;
            fileCheck(imgIndex);
        }
    } else if (pnValue == "Custome Order") {
        imgIndex = 100;
        fileCheck(imgIndex);
        $("input[name='qty']").attr('value', fileButton.files.length);
        $("input[name='total']").attr('value', fileButton.files.length * totalValue + 2 + ' JD');
    }
});

function fileCheck(imgIndex) {
    //check file type 
    //this is from http://webdesigncolors.navayan.com/jquery-validation-for-file-type-extension/
    var file = $("input[type='file']").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif'];
    // first check if file field has any value
    if (file) {
        // split file name at dot
        var get_ext = file.split('.');
        // reverse name to check extension
        get_ext = get_ext.reverse();
        // check file type is valid as given in 'exts' array
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            //Get files
            for (var i = 0; i < fileButton.files.length; i++) {
                var imageFile = fileButton.files[i];
                uploadImageAsPromise(imageFile, imgIndex);
//                    alert('Your Images have been submitted');
                    $("#submit").attr('disabled', 'disabled');
            }
        } else {
            alert('Sory! You select invalid file OR there is a file are not image!');
        }
    }
}
;

//Handle waiting to upload each file using promise
function uploadImageAsPromise(imageFile, imgIndex) {
    return new Promise(function (resolve, reject) {
        var storageRef = firebase.storage().ref("Jotolabphotos/" + imageFile.name);
        //Upload file
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
                function progress(snapshot) {
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    uploader.value = percentage;

//                    $('body').append("<input type='text' value='" + percentage + "' max='100' id='uploader' style='-webkit-appearance: none;appearance: none;width: 50%;margin-bottom: 10px;'><div style='color:#000;'>" + imageFile.name + imageFile.size + "</div>");
                    // When progress bar become 100
                    if ($('#uploader').attr('value') != '100') {
                        $(".loading").show(200);
                    } else {
                        timedOut(imgIndex);
                    }
                },
                function error(err) {

                },
                function complete() {
                    var downloadURL = task.snapshot.downloadURL;
                }
        );
    });
}

function timedOut(imgIndex) {
    if (imgIndex == 11) {
        $('#doneBtn').delay(20000).fadeIn(200);
        $(".loading").delay(20000).hide(200);
        $('html, body').animate({
            scrollTop: $("#doneBtn").offset().top
        }, 1000);
    } else if(imgIndex == 24){
        $('#doneBtn').delay(25000).fadeIn(200);
        $(".loading").delay(25000).hide(200);
        $('html, body').animate({
            scrollTop: $("#doneBtn").offset().top
        }, 1000);
    }else if(imgIndex == 69){
        $('#doneBtn').delay(35000).fadeIn(200);
        $(".loading").delay(35000).hide(200);
        $('html, body').animate({
            scrollTop: $("#doneBtn").offset().top
        }, 1000);
    }else if(imgIndex == 100){
        $('#doneBtn').delay(15000).fadeIn(200);
        $(".loading").delay(15000).hide(200);
        $('html, body').animate({
            scrollTop: $("#doneBtn").offset().top
        }, 1000);
    }
    return;
}

(function ($) {

    var defaults = {
        rootClass: '.file-upload',
        listClass: '.file-upload-list',
        itemClass: '.file-upload-item'
    };

    var fileList = {};

    var templates = {
        list: '<div class="file-upload-list"></div>',
        item: function (item, index) {
            return '<div class="file-upload-item" tabindex="0" data-index="' + index + '">' + item + '</div>';
        },
        img: function (img, file, index) {
            var item = (
                    '<strong>' + file.name + '</strong>' +
                    '<img src="' + img + '" alt="">'
                    );
            return this.item(item, index);
        },
        file: function (file, index) {
            var item = (
                    '<strong>' +
                    '<i class="fa fa-file-o" aria-hidden="true"></i> ' +
                    file.name +
                    '</strong>'
                    );
            return this.item(item, index);
        }
    };

    function clickTriggerButton() {
        $(this).prev('input').trigger('click');
    }

    function addItem() {
        $('#doneBtn').fadeOut(200);
        var files = this.files,
                $upload = $(this).parents(defaults.rootClass),
                $uploadList = $upload.find(defaults.listClass);
        if (files.length > 0) {
            $uploadList.remove();
            $upload.append(templates.list);
            $uploadList = $upload.find('.file-upload-list');
        }
        for (var i in files) {
            if (typeof files[i] !== 'object') {
                continue;
            }
            if (files[i].type.match(/image/)) {
                var reader = new FileReader();
                reader.onload = (function (files, i) {
                    return function (e) {
                        $uploadList.append(templates.img(e.target.result, files[i], i));
                    };
                })(files, i);
                reader.readAsDataURL(files[i]);
            } else {
                $uploadList.append(templates.file(files[i], i));
            }
        }
    }

    function changeInput() {
        addItem.call(this);
        $('#submit').removeAttr("disabled");
    }

    $.fn.extend({
        fileUpload: function (opts) {
            var $upload = $(this);
            $upload
                    .on('click', 'button', clickTriggerButton)
                    .on('change', 'input', changeInput);
        }
    });


})(jQuery);

$('[data-provide="fileupload"]').fileUpload();

$("#doneBtn").on('click', function () {
    if ($("html").attr("lang") === "en") {
        window.location.assign("../en-contact.html");
    } else {
        window.location.assign("../ar-contact.html");
    }
});