// ══════════════════════════════════════════════════════════
// MODELO200.JS — Aznar Legal & Compliance
// Archivo independiente — editar sin afectar la UI
// ══════════════════════════════════════════════════════════

// ─── IMPUESTO DE SOCIEDADES — MODELO 200 (datos oficiales AEAT) ───
const MODELO_200 = {
  2022: {
    cifraNegocios:17703.00, gastosExplotacion:-15281.85, amortizacion:-281.16,
    resultadoExplotacion:2139.99, resultadoAntesIS:2139.99,
    gastoIS:535.00, resultadoEjercicio:1604.99,
    baseImponibleAntesComp:2139.99, compensacionBIN:2139.99,
    baseImponible:0, tipoGravamen:25, cuotaIntegra:0,
    liquidoIngresar:0, cuotaCero:true,
    justificante:"2003018592260", csv:"2PPL2V67TUB2BVHP",
    expediente:"202220003860082L", fecha:"21-07-2023",
    doc:"docs/fiscal/2022/IS2022.pdf"
  },
  2023: {
    cifraNegocios:23539.20, gastosExplotacion:-16978.41, amortizacion:-480.81,
    resultadoExplotacion:6079.98, resultadoAntesIS:6079.98,
    gastoIS:1519.99, resultadoEjercicio:4559.99,
    baseImponibleAntesComp:6079.98, compensacionBIN:720.09,
    baseImponible:5359.89, tipoGravamen:25, cuotaIntegra:1339.97,
    liquidoIngresar:1339.97, cuotaCero:false,
    justificante:"2004270328760", csv:"4AS3HFXVE6R5BQCP",
    expediente:"202320003860063X", fecha:"19-07-2024",
    nrc:"2004270328760YCG6T88K5",
    doc:"docs/fiscal/2023/IS2023.pdf"
  },
  2024: {
    cifraNegocios:9300.00, gastosExplotacion:-9241.93, amortizacion:-1696.56,
    resultadoExplotacion:-1638.49, resultadoAntesIS:-1638.49,
    gastoIS:0, resultadoEjercicio:-1638.49,
    baseImponibleAntesComp:-1638.49, compensacionBIN:0,
    baseImponible:-1638.49, tipoGravamen:25, cuotaIntegra:0,
    liquidoIngresar:-244.28, cuotaCero:false,
    binGeneradas:1638.49, binPendiente2020:1627.15, pagosFraccionados:244.28,
    justificante:"2005041442223", csv:"7FEX5PY5CPAHNAML",
    expediente:"202420003860062E", fecha:"20-07-2025",
    doc:"docs/fiscal/2024/IS2024.pdf"
  }
};
