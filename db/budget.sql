-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-07-2021 a las 01:53:51
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `budget`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

CREATE TABLE `operations` (
  `id_operation` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `type_operation` varchar(15) NOT NULL,
  `concept` varchar(255) NOT NULL,
  `amount` decimal(30,2) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`id_operation`, `id_user`, `type_operation`, `concept`, `amount`, `date`) VALUES
(1, 2, 'ingreso', 'Ingreso de prueba', '10000.00', '2021-07-14'),
(2, 2, 'egreso', 'Egreso de prueba', '3000.00', '2021-07-07'),
(4, 2, 'egreso', 'Egreso de prueba', '30.00', '2021-07-07'),
(45, 2, 'egreso', 'Egreso de prueba.', '1450.00', '2021-07-22'),
(46, 2, 'egreso', 'Egreso de prueba.', '5555.00', '2021-07-01'),
(47, 2, 'Egreso', 'Egreso de prueba.', '450.36', '2021-07-29'),
(48, 2, 'ingreso', 'Ingreso de prueba.', '460.00', '2021-07-29'),
(49, 2, 'Ingreso', 'Ingreso de prueba.', '200.00', '2021-07-29'),
(50, 2, 'egreso', 'Egreso de prueba.', '1450.00', '2021-07-22'),
(51, 2, 'egreso', 'Egreso de prueba.', '5.00', '2021-07-01'),
(52, 2, 'Egreso', 'Egreso de prueba.', '450.36', '2021-07-29'),
(53, 2, 'ingreso', 'Ingreso de prueba.', '460.00', '2021-07-29'),
(54, 2, 'Ingreso', 'Ingreso de prueba.', '2000.00', '2021-07-29'),
(55, 2, 'egreso', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co', '200.00', '2021-07-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `username` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `username`, `email`, `password`) VALUES
(2, 'UsuarioLleno', 'usuariolleno@hotmail.com', '$2a$09$ehTljQxYQnztJPuFH2DY5eMe.CL1ojbI4YTqJQ7dXxGFwtZJrbuoi'),
(3, 'UsuarioVacio', 'usuariovacio@hotmail.com', '$2a$09$Hy./t3NxixiDPp8rQB9lq.C31AfTgj1l9xoEVYoF9RxB2ABz7gfyC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id_operation`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `operations`
--
ALTER TABLE `operations`
  MODIFY `id_operation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
