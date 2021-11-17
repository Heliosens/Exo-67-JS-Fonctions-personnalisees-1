function settingText (id, text){
    let para = document.getElementById(id);
    para.innerHTML = text;
}

settingText("p1", "test");
settingText("p2", "wahoo");
settingText("p3", "ça marche !");
settingText("p4", "j'ai fini");
settingText("p5", "l'exercice");
