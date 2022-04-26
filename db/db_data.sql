-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: trimovie-grupo3
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `actor_has_movies`
--

LOCK TABLES `actor_has_movies` WRITE;
/*!40000 ALTER TABLE `actor_has_movies` DISABLE KEYS */;
/*!40000 ALTER TABLE `actor_has_movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `directors`
--

LOCK TABLES `directors` WRITE;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` VALUES (1,'Steven','Spielberg','2022-02-26 17:19:25','2022-02-26 17:19:25'),(2,'Juan','Pérez','2022-02-26 17:19:25','2022-02-26 17:19:25'),(3,'Stan','Lee','2022-02-26 17:19:25','2022-02-26 17:19:25'),(4,'Francis Ford','Copolla','2022-02-26 17:19:25','2022-02-26 17:19:25'),(5,'Osvaldo','Granados','2022-02-26 17:19:25','2022-02-26 17:19:25');
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'accion','2022-02-26 17:19:24','2022-02-26 17:19:24'),(2,'fantasia','2022-02-26 17:19:24','2022-02-26 17:19:24'),(3,'superheroes','2022-02-26 17:19:24','2022-02-26 17:19:24'),(4,'animada','2022-02-26 17:19:24','2022-02-26 17:19:24'),(5,'aventura','2022-02-26 17:19:24','2022-02-26 17:19:24'),(6,'drama','2022-02-26 17:19:24','2022-02-26 17:19:24'),(7,'ciencia ficción','2022-02-26 17:19:24','2022-02-26 17:19:24'),(8,'comedia','2022-02-26 17:19:24','2022-02-26 17:19:24'),(9,'crimen','2022-02-26 17:19:24','2022-02-26 17:19:24'),(10,'comedia negra','2022-02-26 17:19:24','2022-02-26 17:19:24'),(11,'terror','2022-02-26 17:19:24','2022-02-26 17:19:24');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `items_lists`
--

LOCK TABLES `items_lists` WRITE;
/*!40000 ALTER TABLE `items_lists` DISABLE KEYS */;
/*!40000 ALTER TABLE `items_lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movie_has_genres`
--

LOCK TABLES `movie_has_genres` WRITE;
/*!40000 ALTER TABLE `movie_has_genres` DISABLE KEYS */;
INSERT INTO `movie_has_genres` VALUES (13,1,8,'2022-02-26 17:38:44','2022-02-26 17:38:44'),(14,1,9,'2022-02-26 17:38:44','2022-02-26 17:38:44'),(15,1,10,'2022-02-26 17:38:44','2022-02-26 17:38:44'),(16,2,4,'2022-02-26 17:40:15','2022-02-26 17:40:15'),(17,2,6,'2022-02-26 17:40:15','2022-02-26 17:40:15'),(18,2,11,'2022-02-26 17:40:15','2022-02-26 17:40:15'),(21,3,3,'2022-02-26 17:41:29','2022-02-26 17:41:29'),(22,3,4,'2022-02-26 17:41:29','2022-02-26 17:41:29'),(23,4,1,'2022-02-26 17:51:22','2022-02-26 17:51:22'),(24,4,7,'2022-02-26 17:51:22','2022-02-26 17:51:22'),(25,5,1,'2022-02-26 17:51:59','2022-02-26 17:51:59'),(26,5,7,'2022-02-26 17:51:59','2022-02-26 17:51:59'),(35,7,5,'2022-02-26 17:54:32','2022-02-26 17:54:32'),(36,7,1,'2022-02-26 17:54:32','2022-02-26 17:54:32'),(39,8,10,'2022-02-26 17:55:16','2022-02-26 17:55:16'),(42,9,3,'2022-02-26 17:55:55','2022-02-26 17:55:55'),(43,9,4,'2022-02-26 17:55:55','2022-02-26 17:55:55'),(46,10,11,'2022-02-26 17:56:36','2022-02-26 17:56:36'),(47,10,4,'2022-02-26 17:56:36','2022-02-26 17:56:36'),(48,11,1,'2022-02-26 17:57:12','2022-02-26 17:57:12'),(49,11,6,'2022-02-26 17:57:12','2022-02-26 17:57:12'),(50,12,2,'2022-02-26 17:57:38','2022-02-26 17:57:38'),(51,12,5,'2022-02-26 17:57:38','2022-02-26 17:57:38'),(52,13,7,'2022-02-26 17:58:11','2022-02-26 17:58:11'),(53,13,10,'2022-02-26 17:58:11','2022-02-26 17:58:11'),(54,14,5,'2022-02-26 17:58:41','2022-02-26 17:58:41'),(55,14,9,'2022-02-26 17:58:41','2022-02-26 17:58:41'),(56,14,11,'2022-02-26 17:58:41','2022-02-26 17:58:41'),(57,15,1,'2022-02-26 17:59:08','2022-02-26 17:59:08'),(58,15,3,'2022-02-26 17:59:08','2022-02-26 17:59:08'),(59,15,5,'2022-02-26 17:59:08','2022-02-26 17:59:08'),(60,6,4,'2022-03-02 16:06:33','2022-03-02 16:06:33'),(61,6,6,'2022-03-02 16:06:33','2022-03-02 16:06:33');
/*!40000 ALTER TABLE `movie_has_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Guardianes de la galaxia Vol. 1',4,300,0,'guardians-of-galaxy.jpg','https://www.youtube.com/watch?v=fCPEpGpem3I',120,'El temerario aventurero Peter Quill, tras robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuyas ambiciones amenazan a todo el universo, se convierte en la presa más codiciada por todos los cazarrecompensas de la galaxia.','2022-02-26 17:19:25','2022-02-26 17:38:44'),(2,'Liga de la justicia oscura',1,230,0,'justice-league-dark.jpg','https://www.youtube.com/watch?v=VtgDhzbJwCY',120,'Batman forma la Liga de la Justicia Oscura, un nuevo equipo de especialistas en artes oscuras que es encabezado por John Constantine. El equipo debe revelar el misterio de una plaga sobrenatural y enfrentar a los poderosos villanos detrás del asedio.','2022-02-26 17:19:25','2022-02-26 17:40:15'),(3,'Liga de la justicia vs Los cinco fatales',2,270,0,'justice-league-fatal-five.webp','https://www.youtube.com/watch?v=z768vjrXoK8',120,'El destino de la Tierra está en peligro cuando la Liga de la Justicia se enfrenta a un nuevo y poderoso amenaza: los Cinco Fatales.','2022-02-26 17:19:25','2022-02-26 17:41:29'),(4,'Spiderman: Lejos de casa',4,350,0,'spiderman-far-from-home.jpg','https://www.youtube.com/watch?v=m4DVLBdHiG0',120,'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.','2022-02-26 17:19:25','2022-02-26 17:51:22'),(5,'Spiderman: de regreso a casa',5,320,0,'spiderman-homecoming.jpg','https://www.youtube.com/watch?v=sfPWvYKKAJ4',120,'Peter Parker asume su nueva identidad como Spider-Man y regresa a vivir con su tía después de su aventura con los Vengadores. Al volver, mientras sigue bajo la tutela de Tony Stark, descubre que ha surgido un nuevo y despiadado enemigo que pretende destruir todo lo que ama: el Buitre.','2022-02-26 17:19:25','2022-02-26 17:51:59'),(6,'Spiderman: un nuevo universo',1,300,0,'spiderman-new-universe.jpg','https://www.youtube.com/watch?v=ZWNJmnREyoM',120,'Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.','2022-02-26 17:19:25','2022-03-02 16:06:33'),(7,'Ant-man y Avispa',1,290,0,'antman-and-wasp.webp','https://www.youtube.com/watch?v=lh3AQ1Xejxc',120,'Amanda Waller forma el Escuadrón Suicida con Deadshot, Harley Quinn, Tigre de Bronce, Capitán Boomerang, Killer Frost, y Copperhead. Están enviados para recuperar un potencial objeto místico que está en la mira de otros villanos. Tiene relación directo con la película animada Flash Point.','2022-02-26 17:19:25','2022-02-26 17:54:32'),(8,'El escuadron suicida',3,310,0,'suicide-squad.jpg','https://www.youtube.com/watch?v=v4mn3OAhzi0',120,'La oficial del departamento de inteligencia de los EE.UU., Amanda Waller, ha convocado a un grupo de individuos dispares y viles que no tienen nada que perder.','2022-02-26 17:19:25','2022-02-26 17:55:16'),(9,'Superman: el hilo rojo',3,350,0,'superman-red-son.jpg','https://www.youtube.com/watch?v=iRj2MZt3PE8',120,'Una vez que Krypton es destruido, el navío de Kal-El aterriza en la Unión Soviética, donde fue criado para combatir la ideología marxista como el mayor protector de Rusia: Superman. Mas conforme el héroe de Rusia empieza a crear caos en el mundo entero representando a los soviéticos, las fuerzas internacionales deben intervenir para salvar al planeta.','2022-02-26 17:19:25','2022-02-26 17:55:55'),(10,'Jovenes titanes: el contrato de Judas',3,350,0,'teen-titans-judas.jpg','https://www.youtube.com/watch?v=bWIV0C2C0SI',120,'Liderados por Starfire, los Teen Titans (Beast Boy, Raven, Blue Beetle, Robin y el recientemente regresado Nightwing) han construido un equipo cohesionado en su batalla sin fin contra el mal; pero el nuevo miembro del equipo, la misteriosa y poderosa Terra, quizás esté alterando su dinámica. Mientras tanto un antiguo mal, Brother Blood, ha despertado y el conocido villano Deathstroke está acechando en las sombras por lo que ambos están esperando para atacar de forma inesperada. Al final, los Teen Titans necesitarán enfrentarse a sus enemigos y a sus propias dudas y sobreponerse a las fuerzas malvadas que los rodean en este inesperado relato de intriga, aventura y decepción.','2022-02-26 17:19:25','2022-02-26 17:56:36'),(11,'Los vengadores: End game',3,290,0,'vengadores-end-game.jpg','https://www.youtube.com/watch?v=UQ3bqYKnyhM',120,'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos? Siempre es bueno conocer mas de una historia tan original, con una gran dosis de acción a cada momento y escenas no mostradas en la película, te divertirás muchísimo!!!!! Disfruta de los extras, escenas eliminadas y entrevistas exclusivas.','2022-02-26 17:19:25','2022-02-26 17:57:12'),(12,'Los vengadores: Infitity war',1,310,0,'vengadores-infinity-war.jpg','https://www.youtube.com/watch?v=3xk11d9hjp0',120,'Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.','2022-02-26 17:19:25','2022-02-26 17:57:38'),(13,'Venom',3,320,0,'venom-1.jpg','https://www.youtube.com/watch?v=nZ8FXOpcXSs',120,'Como periodista, Eddie Brock (Tom Hardy) lleva tiempo intentando desenmascarar al creador de la Fundación Vida, el famoso genio científico Carlton Drake (Riz Ahmed), una obsesión que ha arruinado su carrera y su relación con su novia, Anne (Michelle Williams). Al investigar uno de los experimentos de Drake, el ente alienígena Venom se fusiona con el cuerpo de Eddie, y el reportero adquiere de pronto nuevos e increíbles superpoderes, así como la oportunidad de hacer prácticamente lo que se le antoje. Retorcido, oscuro, impredecible e impulsado por la cólera, Venom obliga a Eddie a luchar por controlar unas habilidades sumamente peligrosas que, al mismo tiempo, también resultan embriagadoras y le hacen sentir poderoso. Dado que Eddie y Venom se necesitan mutuamente para conseguir lo que quieren, se van entremezclando cada vez más...','2022-02-26 17:19:25','2022-02-26 17:58:11'),(14,'Venom: Carnage liberado',4,400,0,'venom-2.jpg','https://www.youtube.com/watch?v=F4Ygcigj0Gk',120,'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady.','2022-02-26 17:19:25','2022-02-26 17:58:40'),(15,'X-men: Dark Phoenix',5,200,0,'x-men-dark-fenix.webp','https://www.youtube.com/watch?v=1-q8C_c-nlM',120,'Los X-Men se enfrentan a su enemigo más poderoso: uno de sus miembros, Jean Grey. Durante una misión de rescate en el espacio, Jean casi muere al ser alcanzada por una misteriosa fuerza cósmica. Cuando regresa a casa, esa radiación la ha hecho más poderosa, pero mucho más inestable.','2022-02-26 17:19:25','2022-02-26 17:59:08');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220221201252-create-genre.js'),('20220221201502-create-director.js'),('20220221201653-create-rol.js'),('20220221201846-create-movie.js'),('20220221202051-create-user.js'),('20220221202143-create-actor.js'),('20220221202335-create-favorite.js'),('20220221202424-create-movie-has-genre.js'),('20220221202448-create-actor-has-movie.js'),('20220221202631-create-shop-cart.js'),('20220221202800-create-items-list.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shop_carts`
--

LOCK TABLES `shop_carts` WRITE;
/*!40000 ALTER TABLE `shop_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-02 13:24:06
