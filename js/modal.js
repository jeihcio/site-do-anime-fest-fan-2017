jQuery(document).ready(function($) {
	
	$('a[data-target="#myModal"]').each(function(){
		$(this).bind('click', function(event) {
			
			var imagem,
			    atracao = $(this).data('atracao'), 
			
			    titulos = ['Equipe Jaguar',
			               'Ricardo Juarez',
			               'Diego San',
			               'Alcir',
			               'Kyojin',

			               'Conselho Jedi',
			               'Mesa Sul',
			               'GDG - Sul Fluminense',
			               'Ministério da Magia',

			               'COD BO3',
			               'INJUSTICE',
			               'FIFA 16',
			               'MORTAL KOMBAT X',			               

			               'ANIMEKE FAN',
			               'CIÊNCIA NERD',
			               'JUST DANCE 2016 - DINO GAMES',
			               'TORNEIO STREET FIGTHER V',
			               'TORNEIO NARUTO SHIPPUDEN ULTIMATE NINJA STORN 4',
			               'TOP YOUTUBE',
			               'CCB - CRUZADA COSPLAY BRASIL',
			               'GUERRA DOS CLÃS'], 

			    conteudo = ['Equipe de robótica do IFRJ de Volta Redonda campeã mundial de robótica.',

							'Dublador dos mais renomados no mercado nacional, voz e personagens inesquecíveis' + 
							'como Draven em League os Legends, Kratosem God of War Ascension, Barney em Os '   +
							'Simpsons, Capitão Átomo em Liga da Justiça e Johnny Bravo. Ricardo Juarez irá '   +
							'fazer um bate papo com o público falando um pouco do seu trabalho e fazendo as '  + 
							'vozes de personagens marcantes além de fotos e autógrafos.',

							'Brasileiro campeão mundial de Just Dance está no evento para um bate papo e '          +
							'demonstração e falar um pouco do que vem por aí no jogo e do seu modo competitivo '    +
							'além de momento com fotos e autógrafos.(Nessa Aba tem que ter escrito "oferecimento" ' +
							' e a logo do dono games logo embaixo)',

							'Artista plástico que ja fez trabalhos para a Marvel estará no evento expondo algumas ' +
							'peças e fará um palestra falando de seu trabalho.',

							'Banda formada por alguns músicos da região de grande experiência e participação na cena '  +
							'musical do Sul Fluminense estarão fazendo o show de estréia da nova banda que vai trazer ' +
							'o melhor do animesong para todos mataram saudades e teremos verdadeiros momentos de nostálgia.',

							'Espaço destinado a exposição, cosplay e atividades do universo star wars com o fã clube da galera de Volta Redonda',

							'Espaço destinado aos jogos de mesa moderno com variedade de jogos e atividades ligados a esse '  +
							'universo além a uma equipe para tirar dúvidas e explicar sobre os jogos disponíveis para jogar ' +
							'no evento.',

							'Espaço destinado a mostrar o mundo da computação de uma maneira bem divertida',

							'Espaço destinado a exposição e atividades do universo dos filmes de Harry Potter. ',

							'Final da liga Game Fan Show com os campeões de cada etapa disputando uma emocionante final. '   +
							'No total são 5 duplas de cidades diferentes de nossa região representando sua cidade! A final ' +
							'será realizada em uma das salas da rede cineshow com o vídeo game no telão do cinema.',

							'Final da liga Game Fan Show com os campeões de cada etapa disputando uma emocionante final. No '  +
							'total são 5 gamers de cidades diferentes de nossa região representando sua cidade! A final será ' +
							'realizada em uma das salas da rede cineshow com o vídeo game no telão do cinema.',

							'Final da liga Game Fan Show com os campeões de cada etapa disputando uma emocionante final. No '  +
							'total são 5 duplas de cidades diferentes de nossa região representando sua cidade! A final será ' +
							'realizada em uma das salas da rede cineshow com o vídeo game no telão do cinema.',

							'Final da liga Game Fan Show com os campeões de cada etapa disputando uma emocionante final. No '  +
							'total são 5 gamers de cidades diferentes de nossa região representando sua cidade! A final será ' +
							'realizada em uma das salas da rede cineshow com o vídeo game no telão do cinema',

							'Batalhas emocionantes entre  2 cantores no palco onde um será escolhido 1 vencedor. Venha torcer ' +
							'para o seu preferido!',

							'Exposição de projetos ligados a Robótica, eletrônica e programação.',

							'Eletrizante espaço na área DINO GAMES voltado para Just Dance 2016 que contará com a presença de '     +
							'Diego San, bicampeão mundial de Just Dance. Teremos a competição de Just Dance e durante todo evento ' +
							'acontecendo apresentações especiais onde o publico que visitar o espaço DINO GAMES poderá dançar a '   +
							'vontade e conhecer o Diego San.',

							'Torneio de Street Figther V no telão do cinema, o lançamento da capcom do popular jogo de luta mano a ' +
							'mano está agora na nova geração e todos os amantes do jogo poderá participar do torneio. <br/><br/>   ' +
                            '16 inscritos <br/> '                                                                                    +
                            'Inscrição no dia na Sala de cinema 10 hs <br/>'                                                         + 
                            'Inscrição 2KG de alimento não perecível (menos sal, farinha e fubá) '                                   +
                            'Só pode se inscrever para um torneio de game no telão do cinema. <br/><br/>'                            +
                            'OBS: Quem não conseguir se inscrever e tiver levado alimentos, poderá doar eles e concorrer a brindes ' +
                            'durante o evento, basta deixar no espaço AKAI seu alimento e pegar seu cupom. ',

							'Torneio de NARUTO SHIPPUDEN ULTIMATE NINJA STORN 4 no telão do cinema, o lançamento da Bandai da popular ' +
							'franquia de mangá e anime. <br/><br/>'                                                                     +
                            '16 inscritos<br/> '                                                                                        +
                            'Inscrição no dia na Sala de cinema 10 hs<br>'                                                              +
                            'Inscrição 2KG de alimento não perecível (menos sal, farinha e fubá)<br>'                                   + 
                            'Só pode se inscrever para um torneio de game no telão do cinema.<br><br> '                                 +
                            'OBS: Quem não conseguir se inscrever e tiver levado alimentos, poderá doar eles e concorrer a brindes '    +
                            'durante o evento, basta deixar no espaço AKAI seu alimento e pegar seu cupom. ',

							'Os canais de Youtube da região que se inscreverem poderão concorrer ao TOP YOUTUBE e assim ver quem é o canal ' +
							'mais querido da região. Aa votação será aqui pelo nosso site.',

							'A competição cosplay mais emocionante da região com cosplayers de vários lugares do Brasil disputando o titulo ' +
							'da CRUZADA COSPLAY BRASIL. Venha conhecer os competidores de 2016.',

							'Venha participar do AKAI, escolha seu clã e venha participar da guerra nerd na região que envolve competições de ' +
							'games e conhecimento além de uma divertida Gincana.'
							];

				try {

					imagem = $(this).children('.box-atracoes').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1') ;	
					imagem = '<div> ' +
				             '<img src="' + imagem + '" class="center-block" style="margin-bottom: 0px; width: 130px;"/> ' +
				             '</div>';	

			        $('.modal-body').html(imagem + '<br/>' + conteudo[atracao - 1]);         


				}catch(error){					
			        $('.modal-body').html('<br/>' + conteudo[atracao - 1]); 
				}

				$('.modal-title').html(titulos[atracao - 1]);	
			

		});

	});

});