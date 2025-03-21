document.getElementById('uploadButton').onclick = function () {
    document.getElementById('fileInput').click();
};

document.getElementById('fileInput').onchange = function (event) {
    const file = event.target.files[0];
    const validExtensions = ['image/jpeg', 'image/png'];

    if (file) {

        if (validExtensions.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgElement = document.getElementById('profileImg');
                if (imgElement) {

                    imgElement.src = e.target.result;
                } else {
                    console.error('Image element not found');
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert('Upload image support only JPG and PNG formats.');
        }
    } else {
        console.log('No file selected');
    }
};

document.getElementById('scrollToTopButton').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

