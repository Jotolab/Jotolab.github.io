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
    if (fileButton.files.length == 0) {
        alert("no files selected");
    } else {
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
                    if (i >= '3') {
                        alert('You cannot upload more than 3 pictures');
                        break;
                    }
                    uploadImageAsPromise(imageFile);
                }
                alert('Your Images have been submitted');
                    if ($("html").attr("lang") === "en") {
        window.location.assign("../en-contact.html");
    } else {
        window.location.assign("../ar-contact.html");
    }
            } else {
                alert('Sory! You select invalid file OR there is a file are not image!');
            }
        }
    }
});

//Handle waiting to upload each file using promise
function uploadImageAsPromise(imageFile) {
    return new Promise(function (resolve, reject) {
        var storageRef = firebase.storage().ref("Jotolabphotos/" + imageFile.name);

        //Upload file
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
                function progress(snapshot) {
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    uploader.value = percentage;

                    $('body').append("<progress value='" + percentage + "' max='100' id='uploader' style='-webkit-appearance: none;appearance: none;width: 50%;margin-bottom: 10px;'></progress><div style='color:#000;'>" + imageFile.name + imageFile.size + "</div>");
                    if ($('progress').attr('value') !== '100') {
                        $('progress').css('display', 'none');
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

//$("#submit").on('click', function () {
//    if ($("html").attr("lang") === "en") {
//        window.location.assign("../en-contact.html");
//    } else {
//        window.location.assign("../ar-contact.html");
//    }
//});
