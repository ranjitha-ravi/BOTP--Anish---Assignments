const uploadButton = document.getElementById('uploadButton');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
let filesArray = [];

uploadButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const files = Array.from(fileInput.files);
    const validFiles = files.filter(file => file.type === 'application/pdf');
    const invalidFiles = files.filter(file => file.type !== 'application/pdf');

    if (invalidFiles.length > 0) {
        alert('Only PDF files are allowed. The following files were not added: ' + invalidFiles.map(file => file.name).join(', '));
    }

    if (validFiles.length + filesArray.length > 20) {
        alert('You can only upload up to 20 PDF files.');
        return;
    }

    filesArray = filesArray.concat(validFiles);
    renderFileList();
});

function renderFileList() {
    fileList.innerHTML = '';
    filesArray.forEach((file, index) => {
        const row = document.createElement('tr');

        const cellIndex = document.createElement('td');
        cellIndex.textContent = index + 1;
        row.appendChild(cellIndex);

        const cellName = document.createElement('td');
        cellName.textContent = file.name;
        row.appendChild(cellName);

        const cellAction = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            filesArray.splice(index, 1);
            renderFileList();
        });
        cellAction.appendChild(deleteButton);
        row.appendChild(cellAction);

        fileList.appendChild(row);
    });
}