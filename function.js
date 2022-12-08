function setStorage(name, info, img){
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("info", info);
    sessionStorage.setItem("img", img);
    window.location.href = "../animalInfo.html";
}

