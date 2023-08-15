import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  // Vou solucionar o calculo da tabela ---> R: Boa sorte c ta doido

  const [formValues, setFormValues] = useState({
    initialValue: '0,00',
    monthlyValue: '0,00',
    interestRate: '0,00',
    annualPeriod: ''
  })

  const [result, setResult] = useState({
    montante: 0,
    interest: 0,
    totalInvested: 0
  });

  const [monthlyData, setMonthlyData] = useState([]);

  const calculate = () => {
    const { initialValue, monthlyValue, interestRate, annualPeriod } = removeMask() // Isso se chama "Destructuring"

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

  const currencyMask = e => {
    if (e != '') {
      let value = e
      value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

      const options = { minimumFractionDigits: 2 }
      const result = new Intl.NumberFormat('pt-BR', options)
        .format(parseFloat(value) / 100)

      return result
    } else {
      return '0,00'
    }
  }

  const removeMask = () => {
    const formWithNoMask = { ...formValues } // Esse "..." antes do form e um operador chamado spread. Basicamente ele pega todos os valores de um obj e passa para o novo.
    formWithNoMask.initialValue = formValues.initialValue.replace(/\./g, '').replace(',', '.')
    formWithNoMask.monthlyValue = formValues.monthlyValue.replace(/\./g, '').replace(',', '.')
    formWithNoMask.interestRate = formValues.interestRate.replace(/\./g, '').replace(',', '.')

    return formWithNoMask
  }

  return (
    <div className='calculator'>
      <h2>Calculadora juros compostos</h2>

      <form >
        <label>Valor inicial (R$)</label>
        <input
          type='text'
          placeholder='0,00'
          value={formValues.initialValue}
          onChange={(e) => setFormValues({ ...formValues, 'initialValue': currencyMask(e.target.value) })}
        />

        <label>Valor mensal (R$)</label>
        <input
          type='text'
          placeholder='0,00'
          value={formValues.monthlyValue}
          onChange={(e) => setFormValues({ ...formValues, 'monthlyValue': currencyMask(e.target.value) })}
        />

        <label>Taxa de juros anual (%)</label>
        <input
          type='text'
          placeholder='0,00'
          value={formValues.interestRate}
          onChange={(e) => setFormValues({ ...formValues, 'interestRate': currencyMask(e.target.value) })}
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

export default Calculator;
