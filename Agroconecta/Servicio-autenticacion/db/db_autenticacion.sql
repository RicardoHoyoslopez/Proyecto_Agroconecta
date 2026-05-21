-- Estructura de la tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    correo_usuario VARCHAR(150) NOT NULL UNIQUE,
    password_usuario VARCHAR(255) NOT NULL,
    telefono_usuario VARCHAR(20),
    direccion_usuario TEXT,
    cantidad_animales INT(100),
    rol_usuario ENUM('Productor', 'Veterinario') DEFAULT 'Productor',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Insertar Productores y Veterinarios
INSERT INTO usuarios (id_usuario, nombre_usuario, correo_usuario, password_usuario, telefono_usuario, direccion_usuario, cantidad_animales, rol_usuario) 
VALUES 
(1, 'Dr. Gregory House', 'dr.house@clinica.com', 'password123', '555-0101', '', 50, 'Veterinario'),
(2, 'Juan Perez', 'juan.perez@email.com', 'password123', '555-0202', 'Calle Principal 123', 30, 'Productor'),
(3, 'Ana Gomez', 'ana.gomez@email.com', 'password123', '555-0303', 'Avenida Central 456', 40, 'Productor'),
(4, 'Dra. Meredith Grey', 'meredith.grey@clinica.com', 'pass123', '555-0404', 'Consultorio 202', 60, 'Veterinario'),
(5, 'Dr. Shaun Murphy', 'shaun.murphy@clinica.com', 'pass123', '555-0505', 'Consultorio 303', 70, 'Veterinario'),
(6, 'Carlos Ruiz', 'carlos.ruiz@email.com', 'pass123', '555-0606', 'Calle Sur 789', 80, 'Productor'),
(7, 'Elena Torres', 'elena.torres@email.com', 'pass123', '555-0707', 'Barrio Norte 101', 90, 'Productor'),
(8, 'Roberto Gomez', 'roberto.g@email.com', 'pass123', '555-0808', 'Av. Occidente 202', 100, 'Productor');