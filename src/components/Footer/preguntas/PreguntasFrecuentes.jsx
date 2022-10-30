import React from "react";
import { styled } from "@mui/material/styles";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<MdOutlineArrowForwardIos sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(245, 242, 242)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function PreguntasFrecuentes() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="jsx App">
      <h1>Preguntas Frecuentes</h1>

      <div className="footer__text footer__conte" style={{ margin: "2rem auto 7rem", gap: '40px' ,  width: '85%'}}>
      <div>
          <h4>INFORMACIÓN</h4>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>¿Cómo realizo una compra?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                  <li>
                    Navega nuestra tienda on-line desde tu computadora, Tablet o
                    celular y elegí las prendas que querés comprar.
                  </li>
                  <li>
                    Selecciona color, talle y cantidad, y agrégalas a tu carrito
                    de compras.
                  </li>
                  <li>
                    Regístrate. Si ya tenes tu cuenta creada, solo tenes que
                    ingresar tu dirección de correo electrónico y contraseña.
                  </li>
                  <li>Si sos nuevo, crea tu cuenta</li>
                  <li>Completa tu dirección de facturación y de envío.</li>
                  <li>
                    Elegí el método de envío más conveniente y selecciona el
                    medio de pago.
                  </li>
                  <li>
                    Realiza una última revisión del resumen de tu pedido y
                    chequea que toda la información sea correcta. Si queres
                    hacer algún cambio, podes hacer click en “ver Carrito”.
                    Si estás conforme con el pedido, hace click en “Iniciar Compra”.
                  </li>
                  <li>
                    Recibirás en tu casilla de correo electrónico un email de
                    confirmación con tu número de pedido. Si querés consultar el
                    estado de tu orden y hacer un seguimiento del envío.
                  </li>
                </ul>
                <p>
                  Por cualquier consulta, escribinos a: Clothing@gmail.com
                </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>¿Puedo pedir factua A?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                  Por el momento en WWW.CLOTHING.COM.AR solo emitimos facturas
                  para consumidor final tipo “B”
                </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>¿Tienen tiendas físicas?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Si, el local se ubica en Argentina.</p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <h4>ENVÍO Y SEGUIMIENTO</h4>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>¿Cuáles son los métodos de envío?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                  <li>
                    <strong>Envío Andreani estándar:</strong> Los productos son
                    entregados vía Correos Andreani, para todo el territorio
                    nacional, de lunes a viernes entre las 9.00 y 18.00hs. El
                    plazo de entrega estimado es de 10 días hábiles. Este plazo
                    <br />
                    comienza a ser contabilizado una vez que el envío está en
                    manos de Andreani.
                  </li>
                  <li>
                    <strong>Retiro en sucursal Andreani:</strong> Se podrá
                    elegir la sucursal de Andreani de preferencia. Una vez
                    despachado el pedido el tiempo de entrega estimado es entre
                    3 a 10 días hábiles, cuando el pedido se encuentre
                    disponible en la sucursal se enviará una notificación vía
                    email avisando que está listo para ser retirado.
                    <br />
                    El pedido estará disponible en la sucursal durante 10 días
                    hábiles y podrás consultar los horarios en: Clothing@gmail.com
                  </li>
                  <li>
                    El día de entrega dependerá de cuándo fue efectuada la
                    compra. Te enviaremos un email avisándote que tu pedido está
                    listo para ser retirado, es muy importante que aguardes este
                    email! El retiro del pedido está a cargo del titular o de un
                    tercero con autorización firmada por el titular y documento
                    que acredite su identidad.
                  </li>
                </ul>
                <p>
                  <em>
                    Los pedidos que hayan sido devueltos por el correo por error
                    en el domicilio, habiendo expirado el tiempo de retiro en
                    sucursal o habiendo realizado las dos visitas sin haber
                    podido entregar el pedido, se procederá a la devolución de
                    la
                  </em>
                  <br />
                  <em>totalidad del dinero abonado.</em>
                </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>¿Cuál es el costo de entrega?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                  El valor de la entrega será indicado durante su compra, antes
                  de que el pedido sea finalizado. Este costo corre por cuenta
                  de nuestros clientes, excepto en los casos en que CLOTHING
                  esté haciendo una acción promocional.
                </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>¿Puedo tener seguimiento de mi pedido?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                  Si, en cuanto tu pedido se envíe, recibirás una confirmación
                  por correo electrónico con un código de seguimiento.
                </p>
                <p>
                  También puedes verificar el estado del pedido iniciando sesión
                  en tu cuenta en nuestro sitio web.
                </p>
                <p>
                  Si por algún motivo no recibes el código de seguimiento revisa
                  tu carpeta de correo no deseado o puedes enviar tu consulta Clothing@gmail.com
                  de Lunes a Viernes 8:30 a 18:00 hs.
                </p>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <h4>CAMBIOS Y DEVOLUCIONES</h4>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>¿Puedo devolver un producto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                  La política de cambio y devolución de CLOTHING es parecida
                  a la de sus locales físicos. Es decir, las prendas sólo serán
                  aceptadas si son devueltas en las siguientes condiciones:
                </p>
                <ul>
                  <li>
                    Envíanos un mensaje al WhatsApp 0123456789 con tu número de
                    pedido y el motivo de devolución.
                  </li>
                  <li>Con etiqueta del fabricante intactas.</li>
                  <li>
                    En el packaging original, no damnificado. Cajas protectoras
                    de zapato, bolsitas de accesorios, folletos explicativos son
                    considerados parte del producto, fundas de sastrería
                  </li>
                  <li>
                    No lavadas ni usadas, sin olores ni manchas, ni alteraciones hechas por el cliente (ej:
                    dobladillo, pinzas, etc.)
                  </li>
                  <li>Presentar comprobante de compra.</li>
                </ul>
                <p>
                  Podes realizar devoluciones únicamente contactándote con
                  Atención al cliente, enviando un mensaje al WhatsApp
                  0123456789 dentro de los 30 días una vez realizada la compra.
                  La devoluciones de dinero solo serán por el monto abonado por
                  la prenda, no incluye la devolución del costo del envío.
                </p>
                <p>
                  Las devoluciones se realizarán siempre por el mismo medio en
                  que se abonó. En nuestros locales no se realizan devoluciones
                  de dinero.
                </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>¿Puedo cambiar un producto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                  De acuerdo con nuestra Política de cambio y devoluciones, los
                  cambios de compras online se podrán realizar en el local de
                 CLOTHING, por correo en tu domicilio o en la sucursal de
                  correo más cercana al domicilio de entrega de tu pedido,
                  dentro de los 30 días de efectuada la compra.
                </p>
                <ul>
                  <li>
                    Envíanos un email a Clothing@gmail.com
                    con tu número de pedido y los motivos del cambio.
                  </li>
                  <li>
                    En nuestro local de CLOTHING presentando la factura o el
                    ticket de cambio. Recordá que los cambios de compras
                    realizadas durante promociones online se tomarán al precio
                    abonado.
                  </li>
                  <li>
                    Opción por despacho, para este caso, es necesario que te
                    contactes con nuestro sector de Atención al Cliente para que
                    iniciemos la gestión: Clothing@gmail.com
                  </li>
                  <li>
                    Los costos de envió de cambio por razones ajenas a la
                    empresa, serán abonados por el cliente. Las únicas
                    excepciones serán: Fallas de producto o talle mal enviado.
                    Estas estarán a cargo de la empresa.
                  </li>
                  <li>
                    Podrás dirigirte a la sucursal Andreani o Correo Argentino
                    más cercana al domicilio de entrega de tu pedido, enviarnos
                    el paquete. Cuando el pedido llegue a nuestro depósito, nos
                    contactaremos por email y podrás elegir la respectiva prenda
                    nueva de reemplazo o una e-card que posee una vigencia de 3
                    meses, por el monto que abonaste, para que puedas realizar
                    una nueva compra online. Si no, podes solicitar la
                    devolución de tu dinero. Para ambos casos es necesario que
                    te comuniques con nuestro sector de Atención al Cliente
                    indicando la opción elegida: Clothing@gmail.com
                  </li>
                </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <h4>FORMAS DE PAGO</h4>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>¿Cuáles son los medios de pago?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Se puede realizar el pago de las siguientes formas:</p>
                <ul>
                  <li>
                    Cupones de Pago – Depósito Bancario – Dinero en cuenta de
                    Mercado Pago
                  </li>
                  <li>Mercado Pago – tarjetas de crédito y débito.</li>
                </ul>
                <p>
                  El sistema de cobranza a través de tarjeta de crédito es 100%
                  seguro. Los números son encriptados y no sufren ningún tipo de
                  amenaza en nuestro banco de datos, siendo enviados
                  directamente a la administradora de la tarjeta de crédito.
                </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default PreguntasFrecuentes;