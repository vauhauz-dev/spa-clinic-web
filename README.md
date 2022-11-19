
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Site structure
- Login/Signup
- Home
    - Navbar 
        - Titulo
        - Citas
        - Clientes
        - Tratamientos
        - Alertas
    - Contenido
        - Listado de clientes(default)
            - el listado tiene nombre, ciudad, estatus de adeudo, fecha del ultimo pago
            - si das click en un cliente 
                - se incluye el nombre, ciudad, estatus de adeudo, monto de adeudo, fecha del ultimo pago, telefono del cliente, correo del cliente
                - se despliega una modal con el historial de sesiones de tratamientos ordenados de mas actual incluyendo los tratamientos futuros, cada tratamiento tendra su titulo, fecha de aplicacion, tratamiento completo en caso de tenerlo, link de la cita original, estatus de aplicacion del tratamiento completo y estatus de pago del tratamiento completo
                - boton para mandar recordatorio por correo al cliente(opcional)
                - opcion para generar ticket
                    - en este caso el empleado del spa va a poder seleccionar entre las sesiones que aun no estan pagadas para poder generar el ticket, aqui se podra registrar un pago
                - listado de pagos, cada pago debe tener un ticket
        - Listado de citas

