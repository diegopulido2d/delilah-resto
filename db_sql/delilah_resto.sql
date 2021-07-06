-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 06, 2021 at 03:41 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delilah_resto`
--

-- --------------------------------------------------------

--
-- Table structure for table `itemOrder`
--

CREATE TABLE `itemOrder` (
  `item_id` int(11) NOT NULL,
  `itemOrder_id` int(11) NOT NULL,
  `stock_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `itemOrder`
--

INSERT INTO `itemOrder` (`item_id`, `itemOrder_id`, `stock_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 2),
(4, 3, 1),
(5, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `paymethod` varchar(50) NOT NULL,
  `delivered` varchar(10) NOT NULL,
  `user_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `status`, `paymethod`, `delivered`, `user_id`) VALUES
(1, 'Enviado', 'Efectivo', 'Si', 2),
(2, 'En preparacion', 'Tarjeta', 'No', 2),
(3, 'Orden recibida', 'Tarjeta', 'No', 2),
(4, 'Orden recibida', 'Efectiv0', 'No', 1);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `stock_id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `descr` varchar(500) NOT NULL,
  `price` int(50) NOT NULL,
  `quantity` int(100) NOT NULL,
  `pic` varchar(250) NOT NULL,
  `active` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`stock_id`, `name`, `descr`, `price`, `quantity`, `pic`, `active`) VALUES
(1, 'Sandwich Vegetariano', 'Lorem ipsum dolor sit amet consectetur adipiscing elit primis, tempor senectus habitant turpis libero suspendisse tempus dapibus, nec commodo morbi per pharetra sociis dignissim. Enim molestie eget est orci a dignissim quisque', 15900, 30, '/pictures/sandwiches/veg.png', 1),
(2, 'Papas a la Francesa', 'Lorem ipsum dolor sit amet consectetur adipiscing elit primis, tempor senectus habitant turpis libero suspendisse tempus dapibus, nec commodo morbi per pharetra sociis dignissim. Enim molestie eget est orci a dignissim quisque', 15900, 60, '/pictures/papas/franc.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `number` int(20) NOT NULL,
  `address` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `fullname`, `email`, `password`, `number`, `address`, `role`) VALUES
(1, 'diegopulido2d', 'Diego Pulido', 'diegopulido2d@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 123456, 'asdzxc', 'admin'),
(2, 'charlygarcia', 'Charly García', 'charlygarcia@gmail.com', 'ecb97ffafc1798cd2f67fcbc37226761', 311223344, 'Calle 5ta # 20 - 54', 'customer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `itemOrder`
--
ALTER TABLE `itemOrder`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`stock_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `itemOrder`
--
ALTER TABLE `itemOrder`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `stock_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
