import React, { useState } from 'react';
import './App.css';

function App() {
/// Tentei alterar todas LET/CONST para ingles, fail !
///Vou solucionar o calculo da tabela

  
  const [initialValue, setInitialValue] = useState('');
  const [monthlyValue, setMonthlyValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [periodAnnual, setPeriodAnnual] = useState('');
  const [result, setResult] = useState({ montante: 0, juros: 0, totalInvestido: 0 });
  const [monthlyData, setMonthlyData] = useState([]);

  const calc = () => {
    const taxaJurosMensal = parseFloat(interestRate.replace(',', '.')) / 100 / 12;
    const totalMeses = periodAnnual * 12;

    const monthlyData = [];
    let montanteAtual = parseFloat(initialValue.replace(',', ''));
    let jurosTotal = 0;

    for (let mes = 1; mes <= totalMeses; mes++) {
      const jurosMes = montanteAtual * taxaJurosMensal;
      const montanteMes = montanteAtual + jurosMes + parseFloat(monthlyValue.replace(',', ''));
      const investimentoMes = parseFloat(monthlyValue.replace(',', '')) + jurosMes;

      monthlyData.push({
        mes,
        montante: montanteMes.toFixed(2),
        juros: jurosMes.toFixed(2),
        investido: investimentoMes.toFixed(2),
      });

      montanteAtual = montanteMes;
      jurosTotal += jurosMes;
    }

    setResult({
      montante: montanteAtual.toFixed(2),
      juros: jurosTotal.toFixed(2),
      totalInvestido: (parseFloat(initialValue.replace(',', '')) + parseFloat(monthlyValue.replace(',', '')) * totalMeses).toFixed(2),
    });

    setMonthlyData(monthlyData);
  };

  return (
    
    <div className='App'>
      <h2>Calculadora juros compostos</h2>
      <label>Valor inicial (R$)</label>
      <input
        type='text'
        placeholder='0,00'
        value={initialValue}
        onChange={(e) => setInitialValue(e.target.value)}
      />
      <label>Valor mensal (R$)</label>
      <input
        type='text'
        placeholder='0,00'
        value={monthlyValue}
        onChange={(e) => setMonthlyValue(e.target.value)}
      />
      <label>Taxa de juros anual (%)</label>
      <input
        type='text'
        placeholder='0,00'
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <label>Período anual</label>
      <input
        type='number'
        placeholder='0'
        value={periodAnnual}
        onChange={(e) => setPeriodAnnual(e.target.value)}
      />

      <button onClick={calc}>Calcular</button>

      <div className='result-container'>
        <div>
          <label>Montante</label>
          <span>R$ {result.montante}</span>
        </div>
        <div>
          <label>Juros gerados</label>
          <span>R$ {result.juros}</span>
        </div>
        <div>
          <label>Total investido</label>
          <span>R$ {result.totalInvestido}</span>
        </div>
      </div>

      <table className='monthly-table'>
        <thead>
          <tr>
            <th>Mês</th>
            <th>Montante</th>
            <th>Juros</th>
            <th>Investido</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((data) => (
            <tr key={data.mes}>
              <td>{data.mes}</td>
              <td>R$ {data.montante}</td>
              <td>R$ {data.juros}</td>
              <td>R$ {data.investido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
