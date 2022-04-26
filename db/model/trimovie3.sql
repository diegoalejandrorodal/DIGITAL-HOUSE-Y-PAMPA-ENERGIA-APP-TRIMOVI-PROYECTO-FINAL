-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: trimovie-grupo3
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `actor`
--

LOCK TABLES `actor` WRITE;
/*!40000 ALTER TABLE `actor` DISABLE KEYS */;
INSERT INTO `actor` VALUES (1,'Matt','Reeves'),(2,'Fiorella','Prieto'),(3,'Johanna','Veltri');
/*!40000 ALTER TABLE `actor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `actor_has_movie`
--

LOCK TABLES `actor_has_movie` WRITE;
/*!40000 ALTER TABLE `actor_has_movie` DISABLE KEYS */;
INSERT INTO `actor_has_movie` VALUES (1,2);
/*!40000 ALTER TABLE `actor_has_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `director`
--

LOCK TABLES `director` WRITE;
/*!40000 ALTER TABLE `director` DISABLE KEYS */;
INSERT INTO `director` VALUES (1,'Jhon','Smith'),(2,'Franco','Gonzalez'),(3,'Wiliams','Pasten');
/*!40000 ALTER TABLE `director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'AVENTURA'),(2,'FANTASIA'),(3,'DRAMA');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Chihiro',1,2005,'IMG05.COM','yGq7YJ3E5yPZ',120,'size=50x50&set=set1'),(2,'Spiderman',2,2021,'IMGjpg5.COM','yGq7YJ3ELS',160,'size=50x50&set=scont1'),(3,'Avenger',3,2010,'IMGjplsg5.COM','yGq7YJ3cscsELS',140,'size=50x50&set=scsct1');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movie_has_genre`
--

LOCK TABLES `movie_has_genre` WRITE;
/*!40000 ALTER TABLE `movie_has_genre` DISABLE KEYS */;
INSERT INTO `movie_has_genre` VALUES (1,1),(1,2),(1,3);
/*!40000 ALTER TABLE `movie_has_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Administrador'),(2,'Administrator'),(3,'Usuario');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Florencia','Gonzales','INTO121@GMAIL.COM','VARCHAR','IMG.COM',1,'2008-07-04','1135818570'),(2,'Agustina','Lopez','sushi@gmail.com','VARCHAR','IMG2223.com',2,'2005-03-04','41520717'),(3,'Roby','Jagiello','rjagiello0@gmail.com','VARCHAR','IMGneNPZ3.COM',3,'2001-02-07','137292431');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  2:14:10
