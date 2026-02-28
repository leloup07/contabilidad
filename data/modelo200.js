// ══════════════════════════════════════════════════════════
// MODELO200.JS — Aznar Legal & Compliance
// Archivo independiente — editar sin afectar la UI
// ══════════════════════════════════════════════════════════

// ─── IMPUESTO DE SOCIEDADES — MODELO 200 (datos oficiales AEAT) ───
const MODELO_200 = {
  2017: {
    cifraNegocios:70000.00, aprovisionamientos:-3295.35, gastosExplotacion:-51674.60,
    resultadoExplotacion:15030.05, resultadoAntesIS:15030.05,
    gastoIS:1960.44, resultadoEjercicio:13069.61,
    doc:"docs/fiscal/2017/IS_2017.pdf"
  },
  2018: {
    cifraNegocios:30066.65, aprovisionamientos:-1918.12, gastosExplotacion:-26281.15,
    resultadoExplotacion:1867.38, resultadoAntesIS:1867.38,
    gastoIS:280.05, resultadoEjercicio:1587.33,
    doc:"docs/fiscal/2018/IS_2018.pdf"
  },
  2019: {
    cifraNegocios:2164.65, aprovisionamientos:-293.48, gastosExplotacion:-3390.49,
    resultadoExplotacion:-1519.32, resultadoAntesIS:-1519.32,
    gastoIS:0, resultadoEjercicio:-1519.32,
    doc:"docs/fiscal/2019/IS_2019.pdf"
  },
  2020: {
    cifraNegocios:2168.07, gastosPersonal:-2720.00, gastosExplotacion:-2588.87,
    amortizacion:-82.49, resultadoExplotacion:-3223.29, resultadoAntesIS:-3223.29,
    gastoIS:-805.82, resultadoEjercicio:-2417.47,
    doc:"docs/fiscal/2020/IS2020.pdf"
  },
  2021: {
    cifraNegocios:10715.00, gastosPersonal:-1680.00, gastosExplotacion:-8616.42,
    amortizacion:-163.20, otrosResultados:-225.00,
    resultadoExplotacion:30.38, resultadoAntesIS:30.38,
    gastoIS:63.85, resultadoEjercicio:-33.47,
    doc:"docs/fiscal/2021/IS2021.pdf"
  },
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
