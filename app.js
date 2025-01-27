// Fonction pour gérer le téléchargement et la redirection
document.getElementById("downloadButton").addEventListener("click", function () {
  // Télécharger le fichier APK
  const link = document.createElement("a");
  link.href = "./app_to_download/app.apk"; // Chemin du fichier APK
  link.download = "app.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Rediriger vers download.html après le téléchargement
  setTimeout(() => {
    window.location.href = "download.html";
  }, 1000); // Petite pause avant la redirection
});

