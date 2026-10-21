# 🏪 Sistema de Gestión Integral de Comercios & Catálogo Web

> **Plantilla Base (Boilerplate) Reutilizable**  
> Desarrollado con arquitectura escalable para desplegar en cualquier tipo de comercio minorista o mayorista.  
> Supervisión Técnica Independiente por **RolΦ Studio**.

---

## 🚀 Inicio Rápido (Desarrollo Local)

Para iniciar el sistema en tu computadora:

### 1. Iniciar el Backend (Servidor API):
Abre una terminal en la carpeta `server/`:
```bash
cd server
npm run dev
```
*El servidor arrancará en `http://localhost:5000` y creará/conectará automáticamente la base de datos `server/data/comercio.db`.*

### 2. Iniciar el Frontend (Panel & Catálogo):
En otra terminal en la carpeta `client/`:
```bash
cd client
npm run dev
```
*El frontend estará disponible en `http://localhost:3000`.*

---

## 🔑 Credenciales de Acceso

El sistema viene inicializado con las credenciales maestras:

| Rol | Correo Electrónico | Contraseña | Funciones |
| :--- | :--- | :--- | :--- |
| **SuperAdministrador** | `martinchiacchio.seg@gmail.com` | `Chiacchio@1938` | Portal técnico RolΦ, gestión de licencias, diagnóstico E2E, cambio de nombre y carga de logotipos. |
| **SuperAdministrador (Alt)** | `martinchiacchioseg@gmail.com` | `Chiacchio@1938` | Acceso secundario de soporte técnico. |
| **Administrador del Negocio** | `vampyfz1214@gmail.com` | `qwerty1234` | Gestión comercial, POS, clientes, productos, caja, reportes y vendedores. |

---

## 🎨 Personalización de un Nuevo Comercio

Puedes adaptar este sistema para cualquier cliente de dos maneras:

### Método 1: Desde la Interfaz (Recomendado y Rápido)
1. Inicia sesión como **SuperAdministrador** (o abre el acceso directo con el icono de RolΦ Studio en el Login o la Barra Superior).
2. Ve al módulo **"Identidad & Logotipo del Comercio"**.
3. Carga el **Logotipo Oficial** del nuevo negocio (PNG, JPG, SVG o WebP).
4. Escribe el **Nombre del Comercio** y su **Subtítulo o Rubro**.
5. Ingresa el **WhatsApp para los pedidos del catálogo**.
6. Haz clic en **"Guardar Identidad del Comercio"** y todo el sistema (cabecera, catálogo, tickets y login) se adaptará automáticamente.

### Método 2: Archivo de Configuración `.env`
En la carpeta `server/.env`:
* `PORT=5000` (Puerto de la API)
* `JWT_SECRET=tu_clave_secreta`
* `TURSO_DATABASE_URL` y `TURSO_AUTH_TOKEN` (Opcional, para producción en la nube).

---

## 📂 Cómo Duplicar este Proyecto para un Cliente Nuevo

Cuando quieras empezar un nuevo cliente desde cero:
1. Copia toda esta carpeta con el nombre del cliente (ej: `Comercio-El-Sol`).
2. Si deseas que inicie con una base de datos 100% limpia para ese nuevo cliente, simplemente borra el archivo `server/data/comercio.db`.
3. Al iniciar el servidor (`npm run dev`), se generará automáticamente una base de datos nueva y limpia para ese cliente.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React 18, Vite, Tailwind CSS, Lucide Icons, Recharts.
* **Backend:** Node.js, Express, LibSQL SQLite Client (@libsql/client), JWT, Multer, PDFKit.
* **Compatibilidad Nube:** Listo para desplegar en Vercel y Turso LibSQL sin cambiar código.
