import { useState } from 'react';
import './App.css';

function App() {
  // Até que o código ta bem escrito, até o css ta de boas kkkk
  // Também dei fail ai pra trocar os nome pra ingres ficou faltando "investimentoMes" e todas as variaveis com montante
  // Vou solucionar o calculo da tabela ---> R: Boa sorte c ta doido

  const [formValues, setFormValues] = useState({
    initialValue: '',
    monthlyValue: '',
    interestRate: '',
    annualPeriod: ''
  })

  const [result, setResult] = useState({
    montante: 0,
    interest: 0,
    totalInvested: 0
  });

  const [monthlyData, setMonthlyData] = useState([]);

  const calculate = () => {
    const { initialValue, monthlyValue, interestRate, annualPeriod } = formValues // Isso se chama "Destructuring"

    const monthlyInterestRate = parseFloat(interestRate.replace(',', '.')) / 100 / 12;
    const totalMonths = annualPeriod * 12;

    const monthlyValues = [];
    let montanteAtual = parseFloat(initialValue.replace(',', ''));
    let totalInterest = 0;

    for (let i = 1; i <= totalMonths; i++) {
      const interestOfMonth = montanteAtual * monthlyInterestRate;
      const montanteMes = montanteAtual + interestOfMonth + parseFloat(monthlyValue.replace(',', ''));
      const investimentoMes = parseFloat(monthlyValue.replace(',', '')) + interestOfMonth;

      monthlyValues.push({
        month: i,
        montante: montanteMes.toFixed(2),
        interest: interestOfMonth.toFixed(2),
        invested: investimentoMes.toFixed(2),
      });

      montanteAtual = montanteMes;
      totalInterest += interestOfMonth;
    }

    setResult({
      montante: montanteAtual.toFixed(2),
      interest: totalInterest.toFixed(2),
      totalInvested: (parseFloat(initialValue.replace(',', '')) + parseFloat(monthlyValue.replace(',', '')) * totalMonths).toFixed(2),
    });

    setMonthlyData(monthlyValues);
  };

  return (
    <div className='component'>
      <h2>Calculadora juros compostos</h2>

      <form >
        <label>Valor inicial (R$)</label>
        <input
          type='text'
          placeholder='0,00'
          value={formValues.initialValue}
          onChange={(e) => setFormValues({ ...formValues, 'initialValue': e.target.value })} // Esse "..." antes do form e um operador chamado spread. Basicamente ele pega todos os valores de um obj e passa para o novo.
        />

        <label>Valor mensal (R$)</label>
        <input
          type='text'
          placeholder='0,00'
          value={formValues.monthlyValue}
          onChange={(e) => setFormValues({ ...formValues, 'monthlyValue': e.target.value })}
        />

        <label>Taxa de juros anual (%)</label>
        <input
          type='text'
          placeholder='0,00'
          value={formValues.interestRate}
          onChange={(e) => setFormValues({ ...formValues, 'interestRate': e.target.value })}
        />

        <label>Período anual</label>
        <input
          type='number'
          placeholder='0'
          value={formValues.annualPeriod}
          onChange={(e) => setFormValues({ ...formValues, 'annualPeriod': e.target.value })}
        />

        <button className='button' type='button' onClick={calculate}>Calcular</button>
      </form>

      {/*  Esse "?" é um operador condicional ternário é basicamente um mini if/else. "condição ? true : false " */}
      {monthlyData.length !== 0 ? // Só vai renderizar os resultados caso o "monthlyData" não esteja vazio
        <div>
          <div className='result-container'>
            <div>
              <label>Montante</label>
              <span>R$ {result.montante}</span>
            </div>
            <div>
              <label>Juros gerados</label>
              <span>R$ {result.interest}</span>
            </div>
            <div>
              <label>Total investido</label>
              <span>R$ {result.totalInvested}</span>
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
                <tr key={data.month}>
                  <td>{data.month}</td>
                  <td>R$ {data.montante}</td>
                  <td>R$ {data.interest}</td>
                  <td>R$ {data.invested}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        :
        ''
      }
    </div>
  );
}

export default App;
