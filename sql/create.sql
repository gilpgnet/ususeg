CREATE DATABASE ususeg;
GRANT ALL PRIVILEGES
  ON ususeg.*
  TO 'ususeg'@'localhost'
  IDENTIFIED BY 'ususeg';
FLUSH PRIVILEGES;
USE ususeg;
CREATE TABLE ROL (
  ROL_ID VARCHAR(255) PRIMARY KEY,
  ROL_DESCRIPCION VARCHAR(255) NOT NULL
)
ENGINE = InnoDB;
CREATE TABLE USUARIO (
  USU_CUE VARCHAR(255),
  USU_MATCH VARCHAR(255) NOT NULL,
  USU_NOMBRE VARCHAR(255) NOT NULL,
  CONSTRAINT USU_PK PRIMARY KEY (USU_CUE)
)
ENGINE = InnoDB;
CREATE TABLE USUARIO_ROL (
  USU_CUE VARCHAR(255) NOT NULL,
  ROL_ID VARCHAR(255) NOT NULL,
  CONSTRAINT URL_PK PRIMARY KEY (USU_CUE, ROL_ID),
  CONSTRAINT URL_USU_PK FOREIGN KEY (USU_CUE) REFERENCES USUARIO (USU_CUE),
  CONSTRAINT URL_ROL_PK FOREIGN KEY (ROL_ID) REFERENCES ROL (ROL_ID)
)
ENGINE = InnoDB;
INSERT INTO ROL (ROL_ID,ROL_DESCRIPCION) VALUES
  ('Administrador', 'Administra el sistema.'),
  ('Cliente', 'Hace cosas.'),
  ('Invitado', 'No hace nada.');
INSERT INTO USUARIO (USU_CUE,USU_NOMBRE,USU_MATCH) VALUES
  ('admin','Cambia', SHA1('istra')), ('pepito','José', SHA1('cuentos'));
INSERT INTO USUARIO_ROL (USU_CUE,ROL_ID) VALUES
  ('admin', 'Administrador'), ('admin', 'Cliente'), ('pepito', 'Cliente'), ('pepito', 'Invitado');