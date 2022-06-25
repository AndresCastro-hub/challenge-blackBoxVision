# challenge-blackBoxVision

![Image Text](https://i.imgur.com/rx7lcOs.png)

Demo : https://challenge-black-box-vision.vercel.app/ <br>
Challenge: https://github.com/goncy/blackbox-vision-challenge <br>

## Definición funcional
El juego consiste en 10 preguntas las cuales pueden ser verdadero/falso o multiple choice.

Por cada pregunta, es necesario mostrar los siguientes campos:
* Pregunta
* Categoría
* Dificultad
* Posibles respuestas

Al seleccionar la respuesta, muestra si la misma fue correcta o no. No es necesario mostrar cuál era la respuesta correcta.

Al finalizar el juego, se muestra el puntaje obtenido. El mismo se calcula de la
siguiente manera:
* Respuesta correcta (verdadero/falso): *5 puntos*
* Respuesta correcta (multiple choice): *10 puntos*
* Respuesta incorrecta: *0 puntos*


La unica libreria externa que use fue: https://www.npmjs.com/package/react-loader-spinner
