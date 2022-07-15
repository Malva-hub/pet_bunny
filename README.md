# Pet Bunny

# Enlaces

### Git Hub
https://malva-hub.github.io/pet_bunny/


# Descripción
Pet Bunny es un juego para cuidar a tu conejito y ayudarle a comer manzanas y zanahorias e intentar evitar comer tartas, cuando coma zanahorias y manzanas sumará  1 punto por cada una de ellas y cuando coma tartas se le restarán 5 puntos, los alimentos saldrán de la parte de arriba de la pantalla y el conejito se podrá mover por toda la pantalla para comer. El juego termina cuando tenga 0 puntos o cuando te coma el lobo. 
Para jugar utilizaremos las flechas de nuestro teclado.


# Algunas funcionalidades

- el juego tiene un conejito que se puede mover hacia los lados, arriba y abajo.
- la comida cae desde la parte de arriba de la pantalla 
- el juego tiene una música de fondo
- cada vez que se coma una tarta sonará un sonido ("oo noo")
- cada vez que se coma una manzana o una zanahoria sonará otro sonido ("oo yeah")
- el marcador nos irá indicando los puntos que tenemos
- el conejito aumenta de tamaño si pasa de 20 puntos
- la pantalla final puedes volver a jugar o volver a la pantalla principal


# Funcinalidades Especiales

- la velocidad de la comida va aumentando conforme pasa el tiempo
- pasado unos segundos aparacerá un lobo
- la imagen de Game Over cambia según la puntuación que tengamos
- puedes poner tu nombre para jugar

# Estructura de datos

## main.js

startGame () 
returnGame ()

## game.js

class Game (this.bg, this.bg.src, this.isGameOn, this.bunny, this.foodArr, this.cakeArr, this.wolf, this.framesCounter, this.scoreDOM, this.counter, this.timeBtn, this.time,this.soundbg, this.soundbg.src, this.soundbg.volume, this.gameStarted, this.speedCounter)

gameOver ()
speedFood ()
bunnyCollision ()
removeFoodArr ()
removeCakeArr ()
automaticAddFood ()
bunnyFoodCollision ()
bunnyCakeCollision ()
wolfAdd ()
bunnyAdd ()
wolfBunnyCollision ()
timerGame ()
gameLoop ()


## bunny.js
class Bunny (this.image, this.image.src, this.x, this.y, this.w, this.h, this.speed, drawBunny ())

## cake.js   
class Cake (this.image, this.image.src, this.audio, this.audio.src, this.audio.volume, this.x, this.y, this.w, this.h, this.speedCount, drawCake (), cakeMovement ())

## food.js
class Food ( this.image, this.image.src, this.audio, this.audio.src, this.audio.volume, this.x, this.y, this.w, this.h, this.speedCount, drawFood (), foodMovement())


## wolf.js
class Wolf (this.image, this.image.src, this.audio, this.audio.src, this.audio.volume, this.x, , this.y, this.w, this.h, this.speed, drawWolf (), wolfMovement ()


# Estados y Transiciones

El juego consta de 3 pantallas:
 1. Inicio
 2. Juego
 3. Final


### Diapositivas

https://www.canva.com/design/DAFGdyp3Tbg/9WXQkWAMq92aUiYAG-ewLg/watch?utm_content=DAFGdyp3Tbg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
