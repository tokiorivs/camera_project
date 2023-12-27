document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('camera');
    const captureButton = document.getElementById('capture-btn');
    const capturedPhoto = document.getElementById('captured-photo');

    // Obtener acceso a la cámara
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error al acceder a la cámara: ', error);
        });

    // Capturar foto
    captureButton.addEventListener('click', function () {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        // Mostrar la foto capturada
        capturedPhoto.src = canvas.toDataURL('image/png');
    });
});
