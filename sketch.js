
var tela = 0
var opção = 1
var nivel = 1
var pontos = 0
var som
var somerro
var somacerto
var somclick
var vid
// dimensões dos retangulos
var xMenu1= 10
var yMenu1= 145
var largura1= 160
var altura1= 50
var xMenu2= 165
var yMenu2= 225
var largura2= 160
var altura2= 50
var xMenu3= 320
var yMenu3= 305
var largura3= 160
var altura3= 50

// vetor 1= alternativas das questões (cotem só as erradas)
var rErradas=["Uma cabra","Uma leoa","Uma ursa","Uma zebra", "Etrusco", "Gregos", "Gauleses", "Incas", "Egípcios", "Gregos", "Fenícios", "Gauleses", "Eram os senhores dos homens escravizados que lutavam em arenas", "Como foram chamados os soldados romanos", "Nome dado aos cidadãos romanos", "Como foram chamados os soldados gregos", "25 a.C.", "75 a.C.", "27 a.C.", "40 a.C.", "Aplicar as leis aprovadas, organizar cultos religiosos e comandar o exército", "Fazer o policiamento e abastecer a cidade, e organizavam as festas", "Arrecadavam os tributos e observavam os gastos da administração militar e civil", "Designação dada aos sacerdote dos deuses", "séc VII a.C.", "494 a.C.", "264 a.C.",	"300 a.C.", "Técnica utilizada por ourives romanos", "Lote de terra dada aos soldados", "Imposto que toda população pagava", "Designação dada aos sacerdote dos deuses", "54 a.C.", "33 a.C.", "44 a.C.", "60 a.C.", "Pompeu, Crasso e Otávio", "Otávio, Lépido e Marco Antônio", "Otávio, Lépido e Júlio César", "Otávio, Marco e Crasso", "97 a.C.", "54 a.C.", "102 a.C.", "60 a.C.", "131 a.C. a 123 a.C.", "100 a.C. a 73 a.C.", "43 a.C. a 33 a.C.", "150 a.C. a 30 a.C."]

// vetor 2= respostas corretas das perguntas
var rCorreta=["Uma loba", "Latinos", "Cartagineses", "Eram os homens escravizados que lutavam entre si e animais em arenas", "44 a.C.","Elaborar e aprovar as leis, cargo vitalício e ocupado pelas famílias patrícias mais influentes", "séc. VI a.C.", "Salário pago por serviços militares prestados por soldados", "45 a.C.", "	Crasso, Júlio César e Pompeu", "73 a.C.", "264 a.C. a 146 a.C."]

// repesentação das posições das 4 alternativas
var alt1 = 0, alt2 = 0, alt3 = 0, alt4 = 0

//posição correta da resposta no vetor
var pResposta = 0

//posição correta das alternativas
var pCorretaDasAlt

function preload () {
  img = loadImage('menu.png');// img menu
  img2 = loadImage('instru.png');//img instruções
  img3 = loadImage('creditos1.png');//img creditos
  img4 = loadImage('IMG-20161228-WA0001 - Copia (2).jpg');//img orientador
  img5 = loadImage('nivel.1.png');//img nivel facil
  img6 = loadImage('nivel.3.png');//img nivel dificil
  img7 = loadImage('telaerro.png');// img tela de erro
  img8 = loadImage('nivel5.png')// img nivel medio
  img9 = loadImage('acerto1.png')
  img10 = loadImage('acerto2.png')
  img11 = loadImage('euuuu.jpeg')
  
  fonte = loadFont("MochiyPopPOne-Regular.ttf");
  
  soundFormats('mp3')
  som = loadSound("musica.mp3")
  somclick = loadSound("click.mp3")
  somerro = loadSound("erro.mp3")
  somacerto = loadSound("acerto.mp3")
  
} // dowload das imagens


function setup() {
  createCanvas(500, 500);
  sorteio();
  som.play() 

  
}

function draw() {
  background(220);
  
  if(tela == 0){
  image(img, 0, 0); // imagem de fundo menu
  
  // mudar cor do retangulo se o mouse tiver em cima
  //jogar
  fill("#FFFFFF"); 
  rect(xMenu1, yMenu1, largura1, altura1, 30);
  //mouse sobre jogar 
  if( mouseX> xMenu1 && mouseX< xMenu1+largura1 && mouseY> yMenu1 && mouseY< yMenu1+altura1){
    fill("#FAAC58")
    rect(xMenu1, yMenu1, largura1, altura1, 30);
    if(mouseIsPressed){
    tela = 1 
    somclick.play()
    console.log("jogar")}
  }
    
  //instruções
  fill("#FFFFFF");
  rect(xMenu2, yMenu2, largura2, altura2, 30);
  //mouse sobre instruções
  if( mouseX> xMenu2 && mouseX< xMenu2+largura2 && mouseY> yMenu2 && mouseY< yMenu2+altura2){
    fill("#FAAC58")
    rect(xMenu2, yMenu2, largura2, altura2, 30);
    if(mouseIsPressed){
    tela = 2
    somclick.play()
    console.log("instruções")}
  }
    
  //creditos
  fill("#FFFFFF");
  rect(xMenu3, yMenu3, largura3, altura3, 30);
  //mouse sobre creditos
  if( mouseX> xMenu3 && mouseX< xMenu3+largura3 && mouseY> yMenu3 && mouseY< yMenu3+altura3){
    fill("#FAAC58")
    rect(xMenu3, yMenu3, largura3, altura3, 30);
    if(mouseIsPressed){
    tela = 3
    somclick.play()
    console.log("creditos")}
  }
   //texto da tela de menu
  textFont(fonte); 
  fill("#F8ECE0");
  rect(15, 8, 445, 70, 60);// retangulo do titulo
  textSize(30);//tamanho da letra do titulo
  fill("#FF4000");
  text("Super Quiz: Roma", 90, 35); // titulo do jogo
  text("Mornaquia e República", 45, 70);
  
  textSize(21); // tamanho da letra das opções
  fill("#000000") // cor da letra das opçoes do menu
  strokeWeight(0);// espessura das bordas dos retangulos
 
  text("Jogar", 50, 155, 100,30); // opção do jogo
  text("Instruções", 180, 235, 100, 30); // opção do jogo
  text("Créditos", 350, 315,100,30);  // opção do jogo
  fill("#FAFAFA")// cor dos retângulos
}//tela de menu

  else if(tela ==1){
  image(img5, 0, 0);//img de fundo nivel 1
  
  fill("#F5DA81");
  rect(65, 3, 110, 40, 30);
  rect(290, 3, 130, 40, 30);
  fill("#151515");
  textFont(fonte);
  text("Nível: "+nivel, 80, 30);
  text("Pontos: "+pontos, 300, 30); 
    
  // botão voltar para tela de menu
  if(mouseX>=10 && mouseX<=80 && mouseY>=460 && mouseY<=490){
    fill("#2ECCFA")
  }else{
    fill("#F5DA81")
  }
  strokeWeight(2)  
  rect(10, 460, 70, 30)
  textSize(12);
  fill("#000000");
  text("VOLTAR", 12, 470, 70, 30);
  
  //pergunta 1
  textSize(17);
  fill("#FFFFFF");
  text("Segundo o mito da fundação de Roma,\nqual animal amamentou os gêmeos\nRômulo e Remo após encontrá-los\nà beira do Rio Tibre?", 75, 100);
    
  // alternativa 1
  fill("#F5DA81"); 
  rect(50, 200, 125, 50, 30)
  if(mouseX>=50 && mouseX<=175 && mouseY>=200 && mouseY<=250){
        fill("#2ECCFA")
        rect(50, 200, 125, 50, 30)
        if(pCorretaDasAlt == 1){
            if(mouseIsPressed){ 
            tela=4
            somacerto.play()
            pontos=pontos+10
            nivel++
            pResposta++
            lMin = lMin + 4
            lMax = lMax +4
            sorteio()
            } 
        }
        else{if(mouseIsPressed){
            tela=20
            somerro.play()
          }
        }
}
  
  //alternativa 2
  fill("#F5DA81"); 
  rect(70, 400, 130, 50, 30)
  if(mouseX>=70 && mouseX<=200 && mouseY>=400 && mouseY<=450){
     fill("#2ECCFA")
     rect(70, 400, 130, 50, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=4
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
             somerro.play()
          }
        }
}
  
  // alternativa 3
     fill("#F5DA81");
  rect(320, 200, 130, 50, 30)
  if(mouseX>=320 && mouseX<=450 && mouseY>=200 && mouseY<=250){
    fill("#2ECCFA")
    rect(320, 200, 130, 50, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=4
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
             somerro.play()
          }
        }
}
  
    // alternativa 4
    fill("#F5DA81");
  rect(300, 400, 130, 50, 30)
  if(mouseX>=300 && mouseX<=430 && mouseY>=400 && mouseY<=450){
     fill("#2ECCFA")
    rect(300, 400, 130, 50, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=4
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
             somerro.play()
          }
        }
  }
  
  fill("#151515")
  textSize(15);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 75, 215, 130,50)
  }else{
    text(rErradas[alt1], 75, 215, 130,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 75, 415, 130,50)
  }else{
    text(rErradas[alt2], 75, 415, 130,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 335, 215, 130,50)
  }else{
    text(rErradas[alt3], 335, 215, 130,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 310, 415, 130,50)
  }else{
    text(rErradas[alt4], 320, 415, 130,50)
  }
    
    
}//tela jogar (nivel 1)
  
  else if(tela == 2){
  image(img2, 0, 0); // imagem de fundo
  
  textFont(BOLDITALIC);
  textSize(35); // tamanho da letra
  fill("#000000") // cor da letra
  text("Instruções",165, 35);
  //texto da instruções
  fill("#FFFFFF")
  rect(10, 115, 85, 20);
  rect(10, 200, 125, 20);
  rect(8, 315, 100, 20);
  fill("#000000")
  textSize(20);
  text("Ano: 6º ano do fundamental", 135, 70);
  text("Disciplina: História", 165, 90);
  textSize(18)
  text("Habilidade: (EF06HI11) Caracterizar o processo de formação da\nRoma Antiga e suas configurações sociais políticas nos períodos\nmonárquico e republicano.", 10, 130);
  text("Resumo do Jogo: O jogo é um quiz de perguntas e respostas sobre\nhistória envolvendo a Roma em seus períodos monárquico e repu-\nblicano, serão 4 opções de respostas mas apenas uma é certa em\ncada nível. Após 4 perguntas a dificuldade aumenta, sendo estas\nfácil, médio e difícil. ", 10,215);
  text("Como jogar? Cada nível tem uma questão com 4 opções de respos-\ntas, mas apenas uma é verdadeira. O jogador deve com o cursor do\nmouse clicar na que considerar certa. Caso o jogador erre, aparecerá\numa tela o avisando do erro e ele terá de voltar ao início do jogo,\nsendo assim, muita atenção jogadores!", 10, 330);
    
  // mudar cor do retangulo se o mouse tiver em cima(voltar)
  if(mouseX>=350 && mouseX<=420 && mouseY>=460 && mouseY<=490){
    fill("#FAAC58")
  }else{
    fill("#FFFFFF")
  }
  strokeWeight(0);
  rect(350,460,70,30);
  textFont(fonte);
  textSize(11);
  fill("#000000");
  text("VOLTAR",355,470,70,30);

  
    
  }// tela de instruções
  
  else if(tela == 3){
  image(img3, 0, 0); // imagem de fundo
  image(img4, 55, 270, 150, 150); // img orientador
  image(img11, 70, 60, 120, 150)// minha imagem
    
  textFont(BOLDITALIC);
  fill("#FFFFFF");// cor do retângulo 
  rect(240, 50, 210, 90, 30);// retângulo
  textSize(30);//tamanho da letra
  fill("#000000") // cor da letra
  text("Créditos", 195, 30);
  textSize(20);//tamanho da letra
  text("Programadora:", 290, 80);
  text("Leticia Cibele Lima", 265, 100);
  text("do Nascimento", 285, 120);
  
  fill("#FFFFFF");// cor do retângulo 
  rect(250, 300, 200, 80, 30);
  fill("#000000") // cor da letra
  text("Educador:", 300, 325);
  text("Josivaldo Avelino", 270, 345);
  text("Ribeiro", 310, 365);
  
  if(mouseX>=380 && mouseX<=450 && mouseY>=420 && mouseY<=450){
    fill("#FAAC58")
  }else{
    fill("#FFFFFF")
  } 
    
  strokeWeight(0);
  rect(380,420,70,30);
  textFont(fonte); 
  textSize(11);
  fill("#000000");
  text("VOLTAR",385,430,70,30); 
    
  
  }// tela de creditos
  
  else if(tela == 4){
   image(img5, 0, 0);//img de fundo nivel 2
  
   fill("#F5DA81");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#151515");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
   //pergunta 2
  textSize(17);
  fill("#FFFFFF");
  text("Que povo iniciou a fundação de Roma,\nque começou como uma aldeia na\nregião do Lácio?", 75, 100);
    
  // alternativa 1
  fill("#F5DA81"); 
  rect(185, 200, 130, 50, 30)
  if(mouseX>=185 && mouseX<=310 && mouseY>=200 && mouseY<=250){
      fill("#2ECCFA")
      rect(185, 200, 130, 50, 30)
      if(pCorretaDasAlt == 1){
        if(mouseIsPressed){ 
      tela=5
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
        } 
      }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta--
            lMin = lMin - 4
            lMax= lMax - 4
            sorteio()
            }
        }
}
  
    
  //alternativa 2
    fill("#F5DA81"); 
  rect(80, 280, 130, 50, 30)
  if(mouseX>=80 && mouseX<=210 && mouseY>=280 && mouseY<=330){
    fill("#2ECCFA")
     rect(80, 280, 130, 50, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=5
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta--
            lMin = lMin - 4
            lMax= lMax - 4
            sorteio()
            }
        }
}
  
    
  // alternativa 3
    fill("#F5DA81");
  rect(320, 280, 130, 50, 30)
  if(mouseX>=320 && mouseX<=450 && mouseY>=280 && mouseY<=330){
    fill("#2ECCFA")
    rect(320, 280, 130, 50, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=5
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta--
            lMin = lMin - 4
            lMax= lMax - 4
            sorteio()
            }
        }
}
  
    
  // alternativa 4
    fill("#F5DA81");
  rect(200, 350, 130, 50, 30)
  if(mouseX>=200 && mouseX<=330 && mouseY>=350 && mouseY<=400){
     fill("#2ECCFA")
    rect(200, 350, 130, 50, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=5
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta--
            lMin = lMin - 4
            lMax= lMax - 4
            sorteio()
            }
        }
}
  
  
  fill("#151515")
  textSize(15);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 220, 215, 130,50)
  }else{
    text(rErradas[alt1], 220, 215, 130,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 110, 295, 130,50)
  }else{
    text(rErradas[alt2], 110, 295, 130,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 350, 295, 130,50)
  }else{
    text(rErradas[alt3], 350, 295, 130,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 235, 360, 130,50)
  }else{
    text(rErradas[alt4], 235, 360, 130,50)
  }
    
}// nivel 2
  
  else if(tela == 5){ 
   image(img5, 0, 0);//img de fundo nivel 3
  
   fill("#F5DA81");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#151515");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
   //pergunta 3
  textSize(17);
  fill("#FFFFFF");
  text("Contra que povo os romanos bata-\nlharam durante as Guerras Púnicas?", 75, 125);
    
  // alternativa 1
  fill("#F5DA81"); 
  rect(50, 200, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=200 && mouseY<=250){
    fill("#2ECCFA")
      rect(50, 200, 130, 50, 30)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=6
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            pontos=0
            nivel=1
            pResposta=pResposta-2
            lMin = lMin - 8
            lMax= lMax - 8
            sorteio()
            }
        }
    }
  
  //alternativa 2
    fill("#F5DA81"); 
  rect(50, 410, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=410 && mouseY<=460){
    fill("#2ECCFA")
     rect(50, 410, 130, 50, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=6
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            pontos=0
            nivel=1
            pResposta=pResposta-2
            lMin = lMin - 8
            lMax= lMax - 8
            sorteio()
            }
        }
    }
  
  
  // alternativa 3
     fill("#F5DA81");
  rect(330, 200, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=200 && mouseY<=250){
    fill("#2ECCFA")
    rect(330, 200, 130, 50, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=6
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            pontos=0
            nivel=1
            pResposta=pResposta-2
            lMin = lMin - 8
            lMax= lMax - 8
            sorteio()
            }
        }
    }
  
  
    // alternativa 4
    fill("#F5DA81");
  rect(330, 410, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=410 && mouseY<=460){
     fill("#2ECCFA")
    rect(330, 410, 130, 50, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=6
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            pontos=0
            nivel=1
            pResposta=pResposta-2
            lMin = lMin - 8
            lMax= lMax - 8
            sorteio()
            }
        }
    }
  
  
  fill("#151515")
  textSize(15);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 55, 215, 130,50)
  }else{
    text(rErradas[alt1], 55, 215, 130,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 55, 420, 130,50)
  }else{
    text(rErradas[alt2], 55, 420, 130,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 345, 215, 130,50)
  }else{
    text(rErradas[alt3], 345, 215, 130,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 340, 420, 130,50)
  }else{
    text(rErradas[alt4], 340, 420, 130,50)
  }
    
} // nivel 3
  
  else if(tela == 6){
   image(img5, 0, 0);//img de fundo nivel 3
  
   fill("#F5DA81");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#151515");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
   //pergunta 4
  textSize(17);
  fill("#FFFFFF");
  text("O que são gladiadores?", 135, 65);  
    
  // alternativa 1
  fill("#F5DA81"); 
  rect(40, 80, 400, 55, 30)
  if(mouseX>=40 && mouseX<=440 && mouseY>=80 && mouseY<=135){
    fill("#2ECCFA")
      rect(40, 80, 400, 55, 30)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=7
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-3
            lMin = lMin - 12
            lMax= lMax - 12
            sorteio()
            }
        }
    
    }
    
  //alternativa 2
    fill("#F5DA81"); 
  rect(40, 145, 400, 55, 30)
  if(mouseX>=40 && mouseX<=440 && mouseY>=145 && mouseY<=200){
    fill("#2ECCFA")
     rect(40, 145, 400, 55, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=7
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-3
            lMin = lMin - 12
            lMax= lMax - 12
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 3
    fill("#F5DA81");
  rect(40, 275, 400, 60, 30)
  if(mouseX>=40 && mouseX<=440 && mouseY>=275 && mouseY<=335){
    fill("#2ECCFA")
    rect(40, 275, 400, 60, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=7
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-3
            lMin = lMin - 12
            lMax= lMax - 12
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 4
    fill("#F5DA81");
  rect(40, 340, 400, 60, 30)
  if(mouseX>=40 && mouseX<=440 && mouseY>=340 && mouseY<=400){
     fill("#2ECCFA")
    rect(40, 340, 400, 60, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=7
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-3
            lMin = lMin - 12
            lMax= lMax - 12
            sorteio()
            }
        }
 }
  
  
  fill("#151515");
  textSize(13);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 50, 95, 400,50)
  }else{
    text(rErradas[alt1], 50, 95, 400,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 50, 160, 400,50)
  }else{
    text(rErradas[alt2], 50, 160, 400,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 50, 290, 400,50)
  }else{
    text(rErradas[alt3], 50, 290, 400,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 50, 350, 400,50)
  }else{
    text(rErradas[alt4], 50, 350, 400,50)
  }

}// nivel 4
  
  else if(tela==7){
   image(img8, 0, 0);//img de fundo nivel 5
    
   fill("#1C1C1C");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#E6E6E6");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 5
  textSize(17);
  fill("#000000");
  text("Em que ano o General Júlio César, que era no\nmomento ditador, foi morto por senadores que\ntemiam que ele impusesse um governo vitalício?", 20, 125);
    
    // alternativa 1
  fill("#424242"); 
  rect(50, 200, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=200 && mouseY<=250){
    fill("#81BEF7")
      rect(50, 200, 130, 50, 30)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=8
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-4
            lMin = lMin - 16
            lMax= lMax - 16
            sorteio()
            }
        }
    }
  
  //alternativa 2
    fill("#424242"); 
  rect(50, 410, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=410 && mouseY<=460){
    fill("#81BEF7")
     rect(50, 410, 130, 50, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=8
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-4
            lMin = lMin - 16
            lMax= lMax - 16
            sorteio()
            }
        }
    }
  
  
  // alternativa 3
     fill("#424242");
  rect(330, 200, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=200 && mouseY<=250){
    fill("#81BEF7")
    rect(330, 200, 130, 50, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=8
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-4
            lMin = lMin - 16
            lMax= lMax - 16
            sorteio()
            }
        }
    }
  
  
    // alternativa 4
    fill("#424242");
  rect(330, 410, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=410 && mouseY<=460){
     fill("#81BEF7")
    rect(330, 410, 130, 50, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=8
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-4
            lMin = lMin - 16
            lMax= lMax - 16
            sorteio()
            }
        }
    }
  
  
  fill("#FFFFFF")
  textSize(15);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 75, 215, 130,50)
  }else{
    text(rErradas[alt1], 75, 215, 130,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 75, 420, 130,50)
  }else{
    text(rErradas[alt2], 75, 420, 130,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 365, 215, 130,50)
  }else{
    text(rErradas[alt3], 365, 215, 130,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 365, 420, 130,50)
  }else{
    text(rErradas[alt4], 365, 420, 130,50)
  }
    

  }// nivel 5
  
  else if(tela==8){
   image(img8, 0, 0);//img de fundo nivel 
    
   fill("#1C1C1C");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#E6E6E6");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 6
  textSize(17);
  fill("#000000");
  text("Qual o papel de um senador romano?", 40, 65);
    
  // alternativa 1
  fill("#424242"); 
  rect(40, 80, 400, 60, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=80 && mouseY<=140){
    fill("#81BEF7")
      rect(40, 80, 400, 60, 60)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=9
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-5
            lMin = lMin - 20
            lMax= lMax - 20
            sorteio()
            }
        }
    
    }
    
  //alternativa 2
    fill("#424242"); 
  rect(40, 145, 400, 55, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=145 && mouseY<=200){
    fill("#81BEF7")
     rect(40, 145, 400, 55, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=9
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-5
            lMin = lMin - 20
            lMax= lMax - 20
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 3
    fill("#424242");
  rect(40, 275, 400, 60, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=275 && mouseY<=335){
    fill("#81BEF7")
    rect(40, 275, 400, 60, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=9
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-5
            lMin = lMin - 20
            lMax= lMax - 20
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 4
    fill("#424242");
  rect(40, 340, 400, 60, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=340 && mouseY<=400){
     fill("#81BEF7")
    rect(40, 340, 400, 60, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=9
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-5
            lMin = lMin - 20
            lMax= lMax - 20
            sorteio()
            }
        }
 }
  
  
  fill("#FFFFFF");
  textSize(13);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 50, 95, 400,50)
  }else{
    text(rErradas[alt1], 50, 95, 400,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 50, 160, 400,50)
  }else{
    text(rErradas[alt2], 50, 160, 400,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 50, 290, 400,50)
  }else{
    text(rErradas[alt3], 50, 290, 400,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 50, 350, 400,50)
  }else{
    text(rErradas[alt4], 50, 350, 400,50)
  }  
    
}// nivel 6
  
  else if(tela==9){
   image(img8, 0, 0);//img de fundo 
    
   fill("#1C1C1C");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#E6E6E6");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 7
  textSize(17);
  fill("#000000");
  text("Quando foi o fim da monarquia e início da\nRepública romana?", 30, 70);
    
  // alternativa 1
  fill("#424242"); 
  rect(50, 200, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=200 && mouseY<=250){
    fill("#81BEF7")
      rect(50, 200, 130, 50, 30)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=10
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-6
            lMin = lMin - 24
            lMax= lMax - 24
            sorteio()
            }
        }
    }
  
  //alternativa 2
    fill("#424242"); 
  rect(50, 410, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=410 && mouseY<=460){
    fill("#81BEF7")
     rect(50, 410, 130, 50, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=10
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-6
            lMin = lMin - 24
            lMax= lMax - 24
            sorteio()
            }
        }
    }
  
  
  // alternativa 3
     fill("#424242");
  rect(330, 200, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=200 && mouseY<=250){
    fill("#81BEF7")
    rect(330, 200, 130, 50, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=10
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-6
            lMin = lMin - 24
            lMax= lMax - 24
            sorteio()
            }
        }
    }
  
  
    // alternativa 4
    fill("#424242");
  rect(330, 410, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=410 && mouseY<=460){
     fill("#81BEF7")
    rect(330, 410, 130, 50, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=10
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-6
            lMin = lMin - 24
            lMax= lMax - 24
            sorteio()
            }
        }
    }
  
  
  fill("#FFFFFF")
  textSize(15);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 70, 215, 130,50)
  }else{
    text(rErradas[alt1], 70, 215, 130,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 70, 420, 130,50)
  }else{
    text(rErradas[alt2], 70, 420, 130,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 365, 215, 130,50)
  }else{
    text(rErradas[alt3], 365, 215, 130,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 365, 420, 130,50)
  }else{
    text(rErradas[alt4], 365, 420, 130,50)
  }
    
  
    
  }//nivel 7
  
  else if(tela==10){
   image(img8, 0, 0);//img de fundo 
    
   fill("#1C1C1C");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#E6E6E6");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 7
  textSize(17);
  fill("#000000");
  text("O que era o soldo?", 150, 65);
    
  // alternativa 1
  fill("#424242"); 
  rect(40, 80, 400, 60, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=80 && mouseY<=140){
    fill("#81BEF7")
      rect(40, 80, 400, 60, 60)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=11
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-7
            lMin = lMin - 28
            lMax= lMax - 28
            sorteio()
            }
        }
    
    }
    
  //alternativa 2
    fill("#424242"); 
  rect(40, 145, 400, 55, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=145 && mouseY<=200){
    fill("#81BEF7")
     rect(40, 145, 400, 55, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=11
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-7
            lMin = lMin - 28
            lMax= lMax - 28
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 3
    fill("#424242");
  rect(40, 275, 400, 60, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=275 && mouseY<=335){
    fill("#81BEF7")
    rect(40, 275, 400, 60, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=11
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-7
            lMin = lMin - 28
            lMax= lMax - 28
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 4
    fill("#424242");
  rect(40, 340, 400, 60, 60)
  if(mouseX>=40 && mouseX<=440 && mouseY>=340 && mouseY<=400){
     fill("#81BEF7")
    rect(40, 340, 400, 60, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=11
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-7
            lMin = lMin - 28
            lMax= lMax - 28
            sorteio()
            }
        }
 }
  
  
  fill("#FFFFFF");
  textSize(13);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 50, 95, 400,50)
  }else{
    text(rErradas[alt1], 50, 95, 400,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 50, 160, 400,50)
  }else{
    text(rErradas[alt2], 50, 160, 400,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 50, 290, 400,50)
  }else{
    text(rErradas[alt3], 50, 290, 400,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 50, 350, 400,50)
  }else{
    text(rErradas[alt4], 50, 350, 400,50)
  }  
    
    
  }// nivel 8
  
  else if(tela==11){
  image(img6, 0, 0)
    
   fill("#F3F781");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#1C1C1C");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 7
  textSize(17);
  fill("#000000");
  text("Quando foi o fim da monarquia e início da\nRepública romana?", 55, 90);
    
    
  // alternativa 1
  fill("#F3F781"); 
  rect(50, 200, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=200 && mouseY<=250){
    fill("#81BEF7")
      rect(50, 200, 130, 50, 30)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=12
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-8
            lMin = lMin - 32
            lMax= lMax - 32
            sorteio()
            }
        }
    }
  
  //alternativa 2
    fill("#F3F781"); 
  rect(50, 410, 130, 50, 30)
  if(mouseX>=50 && mouseX<=180 && mouseY>=410 && mouseY<=460){
    fill("#81BEF7")
     rect(50, 410, 130, 50, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=12
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-8
            lMin = lMin - 32
            lMax= lMax - 32
            sorteio()
            }
        }
    }
  
  
  // alternativa 3
     fill("#F3F781");
  rect(330, 200, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=200 && mouseY<=250){
    fill("#81BEF7")
    rect(330, 200, 130, 50, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=12
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-8
            lMin = lMin - 32
            lMax= lMax - 32
            sorteio()
            }
        }
    }
  
  
    // alternativa 4
    fill("#F3F781");
  rect(330, 410, 130, 50, 30)
  if(mouseX>=330 && mouseX<=460 && mouseY>=410 && mouseY<=460){
     fill("#81BEF7")
    rect(330, 410, 130, 50, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=12
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-8
            lMin = lMin - 32
            lMax= lMax - 32
            sorteio()
            }
        }
    }
  
  
  fill("#000000")
  textSize(15);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 70, 215, 130,50)
  }else{
    text(rErradas[alt1], 70, 215, 130,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 70, 420, 130,50)
  }else{
    text(rErradas[alt2], 70, 420, 130,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 365, 215, 130,50)
  }else{
    text(rErradas[alt3], 365, 215, 130,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 365, 420, 130,50)
  }else{
    text(rErradas[alt4], 365, 420, 130,50)
  }
    
  
  }// nivel 9
  
  else if(tela==12){
  image(img6, 0, 0)
    
   fill("#F3F781");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#1C1C1C");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 7
  textSize(17);
  fill("#000000");
  text("Quais os 3 generais\nromanos que\nfizeram parte\ndo primeiro\ntriunvirato?", 10, 90);
    
   // alternativa 1
  fill("#F3F781"); 
  rect(220, 80, 260, 60, 60)
  if(mouseX>=220 && mouseX<=480 && mouseY>=80 && mouseY<=140){
    fill("#81BEF7")
      rect(220, 80, 260, 60, 60)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=13
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-9
            lMin = lMin - 36
            lMax= lMax - 36
            sorteio()
            }
        }
    
    }
    
  //alternativa 2
    fill("#F3F781"); 
  rect(220, 145, 260, 55, 60)
  if(mouseX>=220 && mouseX<=480 && mouseY>=145 && mouseY<=200){
    fill("#81BEF7")
     rect(220, 145, 260, 55, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=13
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-9
            lMin = lMin - 36
            lMax= lMax - 36
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 3
    fill("#F3F781");
  rect(40, 275, 260, 60, 60)
  if(mouseX>=40 && mouseX<=300 && mouseY>=275 && mouseY<=335){
    fill("#81BEF7")
    rect(40, 275, 260, 60, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=13
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-9
            lMin = lMin - 36
            lMax= lMax - 36
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 4
    fill("#F3F781");
  rect(220, 340, 260, 60, 60)
  if(mouseX>=220 && mouseX<=480 && mouseY>=340 && mouseY<=400){
     fill("#81BEF7")
    rect(220, 340, 260, 60, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=13
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-9
            lMin = lMin - 36
            lMax= lMax - 36
            sorteio()
            }
        }
 }
  
  
  fill("#000000");
  textSize(13);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 235, 95, 400,50)
  }else{
    text(rErradas[alt1], 235, 95, 400,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 235, 160, 400,50)
  }else{
    text(rErradas[alt2], 235, 160, 400,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 50, 290, 400,50)
  }else{
    text(rErradas[alt3], 50, 290, 400,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 235, 350, 400,50)
  }else{
    text(rErradas[alt4], 235, 350, 400,50)
  }  
  
  }//nivel 10
  
  else if(tela==13){
   image(img6, 0, 0)
    
   fill("#F3F781");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#1C1C1C");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 7
  textSize(17);
  fill("#000000");
  text("Em que ano o soldado\ndesertor e gladiador\nEspártaco liderou uma\nrevolta com outros\nescravos e escaparam\npara monte Vesúvio?", 260, 90);
    
   // alternativa 1
  fill("#F3F781"); 
  rect(20, 80, 130, 60, 60)
  if(mouseX>=20 && mouseX<=150 && mouseY>=80 && mouseY<=140){
    fill("#81BEF7")
      rect(20, 80, 130, 60, 60)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=14
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-10
            lMin = lMin - 40
            lMax= lMax - 40
            sorteio()
            }
        }
    
    }
    
  //alternativa 2
    fill("#F3F781"); 
  rect(20, 145, 130, 55, 60)
  if(mouseX>=20 && mouseX<=150 && mouseY>=145 && mouseY<=200){
    fill("#81BEF7")
     rect(20, 145, 130, 55, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=14
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-10
            lMin = lMin - 40
            lMax= lMax - 40
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 3
    fill("#F3F781");
  rect(300, 260, 130, 60, 60)
  if(mouseX>=300 && mouseX<=430 && mouseY>=260 && mouseY<=320){
    fill("#81BEF7")
    rect(300, 260, 130, 60, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=14
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax +4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-10
            lMin = lMin - 40
            lMax= lMax - 40
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 4
    fill("#F3F781");
  rect(20, 340, 130, 60, 60)
  if(mouseX>=20 && mouseX<=150 && mouseY>=340 && mouseY<=400){
     fill("#81BEF7")
    rect(20, 340, 130, 60, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=14
      somacerto.play()
      pontos=pontos+10
      nivel++
      pResposta++
      lMin = lMin + 4
      lMax = lMax + 4
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-10
            lMin = lMin - 40
            lMax= lMax - 40
            sorteio()
            }
        }
 }
  
  
  fill("#000000");
  textSize(13);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 50, 95, 400,50)
  }else{
    text(rErradas[alt1], 50, 95, 400,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 50, 160, 400,50)
  }else{
    text(rErradas[alt2], 50, 160, 400,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 315, 280, 400,50)
  }else{
    text(rErradas[alt3], 315, 280, 400,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 50, 350, 400,50)
  }else{
    text(rErradas[alt4], 50, 350, 400,50)
  }  
  
    
  
  }//nivel 11
  
  else if(tela==14){
   image(img6, 0, 0)
    
   fill("#F3F781");
   rect(65, 3, 110, 40, 30);
   rect(290, 3, 130, 40, 30);
   fill("#1C1C1C");
   textFont(fonte);
   text("Nível: "+nivel, 80, 30);
   text("Pontos: "+pontos, 300, 30); 
    
  //pergunta 7
  textSize(17);
  fill("#000000");
  text("Durante que anos\ndurou as Guerras\nPúnicas entre\nromanos e\ncartagineses, para\nestabelecer quem\ncontrolaria do comércio\n             marítimo?", 10, 80);
    
  // alternativa 1
  fill("#F3F781"); 
  rect(220, 80, 260, 60, 60)
  if(mouseX>=220 && mouseX<=480 && mouseY>=80 && mouseY<=140){
    fill("#81BEF7")
      rect(220, 80, 260, 60, 60)
    if(pCorretaDasAlt == 1){
      if(mouseIsPressed){ 
      tela=15
      somacerto.play()
      pontos=0
      nivel=1
      pResposta=pResposta-11
      lMin = lMin -44
      lMax = lMax -44
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-11
            lMin = lMin - 44
            lMax= lMax - 44
            sorteio()
            }
        }
    
    }
    
  //alternativa 2
    fill("#F3F781"); 
  rect(220, 145, 260, 55, 60)
  if(mouseX>=220 && mouseX<=480 && mouseY>=145 && mouseY<=200){
    fill("#81BEF7")
     rect(220, 145, 260, 55, 30)
    if(pCorretaDasAlt == 2){
      if(mouseIsPressed){
      tela=15
      somacerto.play()
      pontos=0
      nivel=1
      pResposta= pResposta - 11
      lMin = lMin - 44
      lMax = lMax - 44
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-11
            lMin = lMin - 44
            lMax= lMax - 44
            sorteio()
            }
        }
}
  
    
  // alternativa 3
    fill("#F3F781");
  rect(40, 275, 260, 60, 60)
  if(mouseX>=40 && mouseX<=300 && mouseY>=275 && mouseY<=335){
    fill("#81BEF7")
    rect(40, 275, 260, 60, 30)
    if(pCorretaDasAlt == 3){
      if(mouseIsPressed){
      tela=15
      somacerto.play()
      pontos=0
      nivel=1
      pResposta=pResposta-11
      lMin = lMin -44
      lMax = lMax -44
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-11
            lMin = lMin - 44
            lMax= lMax - 44
            sorteio()
            }
        }
    
    }
  
    
  // alternativa 4
    fill("#F3F781");
  rect(220, 340, 260, 60, 60)
  if(mouseX>=220 && mouseX<=480 && mouseY>=340 && mouseY<=400){
     fill("#81BEF7")
    rect(220, 340, 260, 60, 30)
    if(pCorretaDasAlt == 4){
      if(mouseIsPressed){
      tela=15
      somacerto.play()
      pontos=0
      nivel=1
      pResposta=pResposta-11
      lMin = lMin -44
      lMax = lMax -44
      sorteio()
      } 
    }else{if(mouseIsPressed){
            tela=20
            somerro.play()
            pontos=0
            nivel=1
            pResposta=pResposta-11
            lMin = lMin - 44
            lMax= lMax - 44
            sorteio()
            }
        }
 }
  
  
  fill("#000000");
  textSize(13);
    
  if(pCorretaDasAlt == 1){
    text(rCorreta[alt1], 235, 95, 400,50)
  }else{
    text(rErradas[alt1], 235, 95, 400,50)
  }
  if(pCorretaDasAlt == 2){
    text(rCorreta[alt2], 235, 160, 400,50)
  }else{
    text(rErradas[alt2], 235, 160, 400,50)
  }
  if(pCorretaDasAlt == 3){
    text(rCorreta[alt3], 50, 290, 400,50)
  }else{
    text(rErradas[alt3], 50, 290, 400,50)
  }
  if(pCorretaDasAlt == 4){
    text(rCorreta[alt4], 235, 350, 400,50)
  }else{
    text(rErradas[alt4], 235, 350, 400,50)
  }  
  
  }//nivel 12
  
  else if(tela==15){
    image(img10, 0, 0)
 
  if(mouseX>=380 && mouseX<=450 && mouseY>=420 && mouseY<=450){
    fill("#FAAC58")
  }else{
    fill("#FFFFFF")
  } 
    
  strokeWeight(0);
  rect(380,420,70,30);
  textFont(fonte); 
  textSize(11);
  fill("#000000");
  text("VOLTAR",385,430,70,30);
    
 
     
    
  }// tela de acerto
  
  else if(tela == 20){
  image(img7, 0, 0);
 
  
  if(mouseX>=380 && mouseX<=450 && mouseY>=420 && mouseY<=450){
    fill("#FAAC58")
  }else{
    fill("#FFFFFF")
  } 
    
  strokeWeight(0);
  rect(380,420,70,30);
  textFont(fonte); 
  textSize(11);
  fill("#000000");
  text("VOLTAR",385,430,70,30);
  
  
    
  }//tela de erro

}//draw


function mouseClicked() {
 
  
  //botão voltar da tela de instruções
  if(tela==2 && mouseX>=350 && mouseX<=420 && mouseY>=460 && mouseY<=490){
    tela=0
    somclick.play()
    console.log("Voltar a tela de menu")
  }
  
  //botão voltar da tela de creditos
  if(tela==3 && mouseX>=380 && mouseX<=450 && mouseY>=420 && mouseY<=450){
    tela=0
    somclick.play()
    console.log("Voltar a tela de menu")
  }
  
  //botão tela voltar nivel 1
  if(tela==1 && mouseX>=10 && mouseX<=80 && mouseY>=460 && mouseY<=490){
    tela=0
    somclick.play()
    console.log("volta a tela de menu")
  }
  
  //botão volta da tela de erro
  if(tela==20 && mouseX>=380 && mouseX<=450 && mouseY>=420 && mouseY<=450){
    tela=0
    somclick.play() 
    console.log("Voltar a tela de menu")
  }
  // botão voltar da tela de acerto
   if(tela==15 && mouseX>=380 && mouseX<=450 && mouseY>=420 && mouseY<=450){
    tela=0
    somclick.play()
    console.log("Voltar a tela de menu")
  }
  
  
} // botão voltar 

// limites do sorteio
var lMin = 0
var lMax = 4

function sorteio (){
  //sortea posição das alternativas
  alt1 = parseInt(random (lMin, lMax))
  alt2 = parseInt(random (lMin, lMax))
  alt3 = parseInt(random (lMin, lMax))
  alt4 = parseInt(random (lMin, lMax))
  
  //enquanto alt2=alt1 vai sortea de novo alt2
  while(alt2 == alt1){
 alt2 = parseInt(random (lMin, lMax))
  }
  
 //enquanto alt3=alt2 e alt3=alt1 sortea alt3 de novo
  while(alt3 == alt2 || alt3 == alt1 ){
 alt3 = parseInt(random (lMin, lMax))
  }
  
  //enquanto alt4=alt3 e alt4=alt2 e alt4=alt1 sortea alt4 de novo ate alt4 ser diferente de alt3, alt2, alt1
  while(alt4 == alt3 || alt4 == alt2 || alt4 == alt1){
  alt4 = parseInt(random (lMin, lMax))
  }
  
  //posição correta da alternativa quem recebe a alt certa
  pCorretaDasAlt = parseInt(random(1, 5))// o 5 não é incluido
  
  if(pCorretaDasAlt == 1){
    alt1 = pResposta
  }
  if(pCorretaDasAlt == 2){
    alt2 = pResposta
  }
   if(pCorretaDasAlt == 3){
    alt3 = pResposta
  }
  if(pCorretaDasAlt == 4){
    alt4 = pResposta
  }
  
}// função sorteio das alternativas