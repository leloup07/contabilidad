// ══════════════════════════════════════════════════════════
// EMITIDAS.JS — Aznar Legal & Compliance
// Archivo independiente — editar sin afectar la UI
// ══════════════════════════════════════════════════════════

// ─── DEFAULT DATA ───
const DEFAULT_EMITIDAS_2022 = [
  { id:"e2022-1", num:"01/2022", fecha:"2022-02-10", cliente:"Col·legi de Procuradors de Barcelona", nif:"", desc:"Diseño Sistema Compliance Penal (35% facturación total)", base:1706.25, tipoIva:21, iva:358.31, total:2064.56, trimestre:"Q1", doc:"docs/emitidas/2022/Factura_1_2022.pdf" },
  { id:"e2022-2", num:"02/2022", fecha:"2022-02-10", cliente:"Amoria Capital, S.L.", nif:"", desc:"Iguala mensual (servicios hasta ene 2022)", base:1000, tipoIva:21, iva:210, total:1210, trimestre:"Q1", doc:"docs/emitidas/2022/Factura_2_2022.pdf" },
  { id:"e2022-3", num:"03/2022", fecha:"2022-03-24", cliente:"Col·legi de Procuradors de Barcelona", nif:"", desc:"Diseño Sistema Compliance Penal (2º pago mensual)", base:1706.25, tipoIva:21, iva:358.31, total:2064.56, trimestre:"Q1", doc:"docs/emitidas/2022/Factura_3_2022.pdf" },
  { id:"e2022-4", num:"04/2022", fecha:"2022-04-05", cliente:"ASCOM", nif:"G-87034120", desc:"Seminario Compliance 24/03/2022 (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_4_2022.pdf" },
  { id:"e2022-4b", num:"05/2022", fecha:"2022-05-03", cliente:"Fundación Instituto de Empresa", nif:"G-81711459", desc:"Honorarios Dir. Observatorio IE-Elecnor (ene-abr 2021)", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_5_2022.pdf" },
  { id:"e2022-5", num:"06/2022", fecha:"2022-05-03", cliente:"Col·legi de Procuradors de Barcelona", nif:"", desc:"Diseño Sistema Compliance Penal (3er pago mensual)", base:1706.25, tipoIva:21, iva:358.31, total:2064.56, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_6_2022.pdf" },
  { id:"e2022-6", num:"07/2022", fecha:"2022-05-23", cliente:"Círculo del Liceo", nif:"G08413528", desc:"Implantación Sistema Compliance Penal", base:840, tipoIva:21, iva:176.40, total:1016.40, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_7_2022.pdf" },
  { id:"e2022-7", num:"09/2022", fecha:"2022-06-20", cliente:"Col·legi de Procuradors de Barcelona", nif:"", desc:"Diseño Sistema Compliance Penal (4º y último pago)", base:1706.25, tipoIva:21, iva:358.31, total:2064.56, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_9_2022.pdf" },
  { id:"e2022-7b", num:"08/2022", fecha:"2022-06-20", cliente:"ASCOM", nif:"G-87034120", desc:"Seminario Compliance 15/06/2022 (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_8_2022.pdf" },
  { id:"e2022-7c", num:"10/2022", fecha:"2022-06-20", cliente:"Círculo del Liceo", nif:"G08413528", desc:"Diseño Sistema Compliance Penal (pago mensual 2/4)", base:840, tipoIva:21, iva:176.40, total:1016.40, trimestre:"Q2", doc:"docs/emitidas/2022/Factura_10_2022.pdf" },
  { id:"e2022-7d", num:"13/2022", fecha:"2022-07-29", cliente:"Círculo del Liceo", nif:"G08413528", desc:"Diseño Sistema Compliance Penal (pago mensual 4/4)", base:840, tipoIva:21, iva:176.40, total:1016.40, trimestre:"Q3", doc:"docs/emitidas/2022/Factura_13b_2022.pdf" },
  { id:"e2022-8", num:"12/2022", fecha:"2022-09-23", cliente:"Fundación Instituto de Empresa", nif:"G-81711459", desc:"Honorarios Dir. Observatorio IE-Elecnor (may-ago 2022)", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q3", doc:"docs/emitidas/2022/Factura_12_2022.pdf" },
  { id:"e2022-9", num:"11/2022", fecha:"2022-09-29", cliente:"E.P.E.L. Neàpolis", nif:"Q-08015721", desc:"Curso Blockchain TTT (jun 2022 – 6 horas)", base:318, tipoIva:21, iva:66.78, total:384.78, trimestre:"Q3", doc:"docs/emitidas/2022/Factura_11_2022.pdf" },
  { id:"e2022-10", num:"14/2022", fecha:"2022-09-29", cliente:"Círculo del Liceo", nif:"G08413528", desc:"Diseño Sistema Compliance Penal (pago 4/4)", base:840, tipoIva:21, iva:176.40, total:1016.40, trimestre:"Q3", doc:"docs/emitidas/2022/Factura_14_2022.pdf" },
  { id:"e2022-11", num:"15/2022", fecha:"2022-10-19", cliente:"ASCOM", nif:"G-87034120", desc:"Seminario Compliance 18/10/2022 (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q4", doc:"docs/emitidas/2022/Factura_15_2022.pdf" },
  { id:"e2022-11b", num:"16/2022", fecha:"2022-10-28", cliente:"ICAB", nif:"Q0863003-J", desc:"Clases Máster Compliance ICAB 24/10/2022 (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q4", doc:"docs/emitidas/2022/Factura_16_2022.pdf" },
  { id:"e2022-12", num:"17/2022", fecha:"2022-12-19", cliente:"Fundación Instituto de Empresa", nif:"G-81711459", desc:"Honorarios Dir. Observatorio IE-Elecnor (sep-dic 2022)", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q4", doc:"docs/emitidas/2022/Factura_17_2022.pdf" },
  { id:"e2022-13", num:"18/2022", fecha:"2022-12-31", cliente:"Amoria Capital, S.L.", nif:"", desc:"Rectificativa de 02/2022 — cancelación iguala", base:-1000, tipoIva:21, iva:-210, total:-1210, trimestre:"Q4", doc:"docs/emitidas/2022/Factura_18_2022.pdf" },
];

const DEFAULT_EMITIDAS_2023 = [
  { id:"e2023-1", num:"1/2023", fecha:"2023-02-13", cliente:"Asociación ICEA", nif:"G-28646313", desc:"Curso Compliance febrero 2023", base:240, tipoIva:21, iva:50.40, total:290.40, trimestre:"Q1", doc:"docs/emitidas/2023/Factura_1_2023.pdf" },
  { id:"e2023-2", num:"02/2023", fecha:"2023-05-11", cliente:"ASCOM", nif:"G-87034120", desc:"Seminario Compliance 11/05/2023 (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q2", doc:"docs/emitidas/2023/Factura_2_2023.pdf" },
  { id:"e2023-3", num:"3/2023", fecha:"2023-05-11", cliente:"Fundación Instituto de Empresa", nif:"G-81711459", desc:"Honorarios Dir. Observatorio IE-Elecnor (ene-abr 2023)", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q2", doc:"docs/emitidas/2023/Factura_3_2023.pdf" },
  { id:"e2023-4", num:"4/2023", fecha:"2023-05-12", cliente:"INMOCRYPTO", nif:"B72739667", desc:"Gastos desplazamiento congreso INMOCRYPTO (22/04/23)", base:209.09, tipoIva:0, iva:0, total:209.09, trimestre:"Q2", doc:"docs/emitidas/2023/Factura_4_2023.pdf" },
  { id:"e2023-5", num:"5/2023", fecha:"2023-05-31", cliente:"Blockchain Intelligence", nif:"B05490057", desc:"Clase tokenización inmobiliaria (25/05/23)", base:123.97, tipoIva:21, iva:26.03, total:150, trimestre:"Q2", doc:"docs/emitidas/2023/Factura_5_2023.pdf" },
  { id:"e2023-6", num:"06/2023", fecha:"2023-06-21", cliente:"ASCOM", nif:"G-87034120", desc:"Seminario Blockchain 20/06/2023 (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q2", doc:"docs/emitidas/2023/Factura_6_2023.pdf" },
  { id:"e2023-7", num:"07/2023", fecha:"2023-08-21", cliente:"Amphion Soft, SL", nif:"B-06903926", desc:"50% honorarios constitución cooperativa Context DAO, SCCL", base:7500, tipoIva:21, iva:1575, total:9075, trimestre:"Q3", doc:"docs/emitidas/2023/Factura_7_2023.pdf" },
  { id:"e2023-8", num:"08/2023", fecha:"2023-09-01", cliente:"Soccer Tech City Costa Ballena, SL", nif:"B-02903581", desc:"Iguala mensual proyecto Conil — septiembre 2023", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q3", doc:"docs/emitidas/2023/Factura_8_2023.pdf" },
  { id:"e2023-9", num:"09/2023", fecha:"2023-10-01", cliente:"Soccer Tech City Costa Ballena, SL", nif:"B-02903581", desc:"Iguala mensual proyecto Conil — octubre 2023", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q4", doc:"" },
  { id:"e2023-10", num:"10/2023", fecha:"2023-10-15", cliente:"Fundación Instituto de Empresa", nif:"G-81711459", desc:"Honorarios Dir. Observatorio IE-Elecnor (may-ago 2023)", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q4", doc:"" },
  { id:"e2023-11", num:"11/2023", fecha:"2023-10-20", cliente:"ICAB", nif:"Q0863003-J", desc:"Clases Máster Compliance ICAB (exento art.20.9)", base:300, tipoIva:0, iva:0, total:300, trimestre:"Q4", doc:"" },
  { id:"e2023-12", num:"12/2023", fecha:"2023-10-25", cliente:"ICAB", nif:"Q0863003-J", desc:"Clases Máster Compliance ICAB", base:150, tipoIva:21, iva:31.50, total:181.50, trimestre:"Q4", doc:"" },
  { id:"e2023-13", num:"13/2023", fecha:"2023-11-01", cliente:"Soccer Tech City Costa Ballena, SL", nif:"B-02903581", desc:"Iguala mensual proyecto Conil — noviembre 2023", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q4", doc:"" },
  { id:"e2023-14", num:"14/2023", fecha:"2023-11-15", cliente:"Fundación Bancaria Unicaja", nif:"", desc:"Curso/seminario compliance", base:244, tipoIva:21, iva:51.24, total:295.24, trimestre:"Q4", doc:"" },
  { id:"e2023-15", num:"15/2023", fecha:"2023-12-01", cliente:"Fundación Instituto de Empresa", nif:"G-81711459", desc:"Honorarios Dir. Observatorio IE-Elecnor (sep-dic 2023)", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q4", doc:"" },
  { id:"e2023-16", num:"16/2023", fecha:"2023-12-15", cliente:"ACN Legal Solutions SLP", nif:"", desc:"Servicios jurídicos", base:172.14, tipoIva:0, iva:0, total:172.14, trimestre:"Q4", doc:"" },
  { id:"e2023-17", num:"17/2023", fecha:"2023-12-20", cliente:"Soccer Tech City Costa Ballena, SL", nif:"B-02903581", desc:"Iguala mensual proyecto Conil — diciembre 2023", base:2000, tipoIva:21, iva:420, total:2420, trimestre:"Q4", doc:"" },
];

const DEFAULT_EMITIDAS_2024 = [
  { id: "e2024-1", num: "1/2024", fecha: "2024-06-03", cliente: "Fundación Instituto de Empresa", nif: "G-81711459", desc: "Honorarios Dirección Observatorio IE-Elecnor (ene-abr 2024)", base: 3000, tipoIva: 21, iva: 630, total: 3630, trimestre: "Q2", doc: "docs/emitidas/2024/Factura_1_2024.pdf" },
  { id: "e2024-2", num: "2/2024", fecha: "2024-06-03", cliente: "Blockchain Intelligence", nif: "B05490057", desc: "Clase tokenización (25/5/23)", base: 225, tipoIva: 0, iva: 0, total: 225, trimestre: "Q2", doc: "docs/emitidas/2024/Factura_2_2024.pdf" },
  { id: "e2024-4", num: "4/2024", fecha: "2024-10-15", cliente: "ICAB", nif: "Q0863003-J", desc: "Clase RSC y Gobernanza - Master Compliance", base: 300, tipoIva: 21, iva: 63, total: 363, trimestre: "Q4", doc: "docs/emitidas/2024/Factura_4_2024.pdf" },
  { id: "e2024-5", num: "5/2024", fecha: "2024-10-15", cliente: "Fundación Instituto de Empresa", nif: "G-81711459", desc: "Honorarios Dirección Observatorio IE-Elecnor (may-sep 2024)", base: 3000, tipoIva: 21, iva: 630, total: 3630, trimestre: "Q4", doc: "docs/emitidas/2024/Factura_5_2024.pdf" },
  { id: "e2024-6", num: "6/2024", fecha: "2024-10-31", cliente: "ASCOM", nif: "G-87034120", desc: "Seminario Alta Dirección 2024 (exento art.20.9)", base: 300, tipoIva: 0, iva: 0, total: 300, trimestre: "Q4", doc: "docs/emitidas/2024/Factura_6_2024.pdf" },
  { id: "e2024-7", num: "7/2024", fecha: "2024-12-10", cliente: "Fundación Instituto de Empresa", nif: "G-81711459", desc: "Honorarios Dirección Observatorio IE-Elecnor (sep-dic 2024)", base: 3000, tipoIva: 21, iva: 630, total: 3630, trimestre: "Q4", doc: "docs/emitidas/2024/Factura_7_2024.pdf" },
];

const DEFAULT_EMITIDAS_2025 = [
  { id: "e2025-1", num: "1/2025", fecha: "2025-02-26", cliente: "IEF", nif: "G-59190850", desc: "Curso CESCOM® Sesión 16: Prevención soborno (exento)", base: 300, tipoIva: 0, iva: 0, total: 300, trimestre: "Q1", doc: "docs/emitidas/2025/Factura_1_2025.pdf" },
  { id: "e2025-2", num: "2/2025", fecha: "2025-03-27", cliente: "IEF", nif: "G-59190850", desc: "Curso CESCOM® Sesión 6: RSC y buen gobierno (exento)", base: 300, tipoIva: 0, iva: 0, total: 300, trimestre: "Q1", doc: "docs/emitidas/2025/Factura_2_2025.pdf" },
  { id: "e2025-3", num: "3/2025", fecha: "2025-04-04", cliente: "Blockchain Intelligence", nif: "B05490057", desc: "Clase tokenización mobiliaria", base: 225, tipoIva: 0, iva: 0, total: 225, trimestre: "Q2", doc: "docs/emitidas/2025/Factura_3_2025.pdf" },
  { id: "e2025-4", num: "4/2025", fecha: "2025-05-14", cliente: "IEF", nif: "G-59190850", desc: "Curso CESCOM® Sesión 18 (exento)", base: 300, tipoIva: 0, iva: 0, total: 300, trimestre: "Q2", doc: "docs/emitidas/2025/Factura_4_2025.pdf" },
  { id: "e2025-5", num: "5/2025", fecha: "2025-06-23", cliente: "Fundación Instituto de Empresa", nif: "G-81711459", desc: "Honorarios IE-Elecnor Knowledge Hub (ene-abr 2025)", base: 3000, tipoIva: 21, iva: 630, total: 3630, trimestre: "Q2", doc: "docs/emitidas/2025/Factura_5_2025.pdf" },
  { id: "e2025-6", num: "6/2025", fecha: "2025-09-26", cliente: "ASCOM", nif: "G-87034120", desc: "Seminario Alta Dirección (exento art.20.9)", base: 300, tipoIva: 0, iva: 0, total: 300, trimestre: "Q3", doc: "docs/emitidas/2025/Factura_6_2025.pdf" },
  { id: "e2025-7", num: "7/2025", fecha: "2025-10-20", cliente: "ICAB", nif: "Q0863003-J", desc: "Clase RSC Sesión 5 - Master Compliance", base: 300, tipoIva: 21, iva: 63, total: 363, trimestre: "Q4", doc: "docs/emitidas/2025/Factura_7_2025.pdf" },
  { id: "e2025-8", num: "8/2025", fecha: "2025-10-20", cliente: "Fundación Instituto de Empresa", nif: "G-81711459", desc: "Honorarios IE-Elecnor Knowledge Hub (may-ago 2025)", base: 3000, tipoIva: 21, iva: 630, total: 3630, trimestre: "Q4", doc: "docs/emitidas/2025/Factura_8_2025.pdf" },
  { id: "e2025-9", num: "9/2025", fecha: "2025-12-11", cliente: "Fundación Instituto de Empresa", nif: "G-81711459", desc: "Honorarios IE-Elecnor Knowledge Hub (sep-dic 2025)", base: 3000, tipoIva: 21, iva: 630, total: 3630, trimestre: "Q4", doc: "docs/emitidas/2025/Factura_9_2025.pdf" },
  { id: "e2025-10", num: "10/2025", fecha: "2025-12-17", cliente: "Maximiliano Vergara (Bitrise)", nif: "Chile-F62258086", desc: "Asesoramiento jurídico 50% iguala dic (no sujeto art.69)", base: 375, tipoIva: 0, iva: 0, total: 375, trimestre: "Q4", doc: "docs/emitidas/2025/Factura_10_2025.pdf" },
  { id: "e2025-11", num: "11/2025", fecha: "2025-12-30", cliente: "Maximiliano Vergara (Bitrise)", nif: "Chile-F62258086", desc: "2º 50% dic + 1er 50% ene 2026 (no sujeto art.69)", base: 1000, tipoIva: 0, iva: 0, total: 1000, trimestre: "Q4", doc: "docs/emitidas/2025/Factura_11_2025.pdf" },
];

const DEFAULT_EMITIDAS_2026 = [
  { id: "e2026-1", num: "1/2026", fecha: "2026-01-28", cliente: "Maximiliano Vergara (Bitrise)", nif: "Chile-F62258086", desc: "2º 50% iguala ene + 1er 50% feb 2026 (no sujeto art.69)", base: 1250, tipoIva: 0, iva: 0, total: 1250, trimestre: "Q1", doc: "docs/emitidas/2026/Factura_1_2026.pdf" },
  { id: "e2026-2", num: "2/2026", fecha: "2026-02-11", cliente: "Digital Innovation Hub", nif: "B05490057", desc: "Clase tokenización mobiliaria (9/2/26)", base: 450, tipoIva: 0, iva: 0, total: 450, trimestre: "Q1", doc: "docs/emitidas/2026/Factura_2_2026.pdf" },
];
