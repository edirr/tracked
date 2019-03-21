import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class StudentChart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  shouldComponentUpdate(nextProps) {
    const differentMathProps = this.props.mathTests !== nextProps.mathTests;
    const differentElaProps = this.props.elaTests !== nextProps.elaTests;
    const differentSSProps = this.props.ssTests !== nextProps.ssTests;
    return differentMathProps || differentElaProps || differentSSProps;
  }

  render() {


    const chartData = {
      labels:   [],
      datasets: [
        {
          label:           'Math',
          labels:          [],
          data:            [],
          showLine:        true,
          backgroundColor: 'darkBlue',
          fill:            false,
          borderColor:     'darkBlue',
          lineTension:     0.2,
        },
        {
          label:           'ELA',
          labels:          [],
          data:            [],
          showLine:        true,
          backgroundColor: 'red',
          fill:            false,
          borderColor:     'red',
          lineTension:     0.2,
        },
        {
            label:           'SS',
            labels:          [],
            data:            [],
            showLine:        true,
            backgroundColor: 'yellow',
            fill:            false,
            borderColor:     'yellow',
            lineTension:     0.2,
          },
        

      ],
    };
    // Math Scores and Names
    const mathScores =      this.props.mathTests.length < 1
      ? 'No data'
      : this.props.mathTests.map(test => chartData.datasets[0].data.push(test.grade));
    const mathTestNames =      this.props.mathTests.length < 1
      ? 'No data'
      : this.props.mathTests.map(test => chartData.datasets[0].labels.push(test.name));

    const ticks =      this.props.mathTests.length < 1
      ? 'No data'
      : this.props.mathTests.map(test => chartData.labels.push(''));

    //   const ticks = chartData.datasets[0].data.length || chartData.datasets[1].data.length || chartData.datasets[2].data.length
    //    > chartData.datasets[0].labels.length || chartData.datasets[1].labels.length || chartData.datasets[2].labels.length ? chartData.labels.push('') : console.log("Nope") ;

    //    const makeTicks = this.props.mathTests.length < 1
    //     ? console.log("No props")
    //     : chartData.labels.push('')


    // // ELA Test Scores and Names
    const elaScores =      this.props.elaTests.length < 1
    ? 'No data'
    : this.props.elaTests.map(test => chartData.datasets[1].data.push(test.grade));
  const elaTestNames =      this.props.elaTests.length < 1
    ? 'No data'
    : this.props.elaTests.map(test => chartData.datasets[1].labels.push(test.name));

    // SS Test Scores and Names
    const ssScores =      this.props.ssTests.length < 1
    ? 'No data'
    : this.props.ssTests.map(test => chartData.datasets[2].data.push(test.grade));
  const ssTestNames =      this.props.ssTests.length < 1
    ? 'No data'
    : this.props.ssTests.map(test => chartData.datasets[2].labels.push(test.name));

    // const mathScores =      this.props.studentMathScores.length < 1
    //   ? 'No data'
    //   : this.props.studentMathScores.map(test => chartData.datasets[1].data.push(test.grade));
    // const mathTestNames =      this.props.studentScores.length < 1
    //   ? 'No data'
    //   : this.props.studentScores.map(test => chartData.datasets[1].labels.push(test.test_name));


    // let studentName = this.props.student.length == undefined
    // ? "" : `${this.props.student.name} Scores`

    // let averageScores =
    //   this.props.studentScores.length < 1
    //     ? "No data"
    //     : this.props.studentScores.map(test => {
    //         return test.grade;
    //       });
    // let average = averageScores.reduce((acc, val) => acc + val, 100);
    // console.log(this.props.studentMathScores)
    // console.log(this.props.studentScores)
    return (
      <div className="chart">
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: true,
            title:               {
              display:  true,
              text:     'Student Scores',
              fontSize: 25,
            },
            showLine: true,
            legend:   {
              display:  true,
              position: 'right',
            },
            tooltips: {
              callbacks: {
                label(tooltipItem, data) {
                  const dataset = data.datasets[tooltipItem.datasetIndex];
                  const index = tooltipItem.index;
                  return `${dataset.labels[index]}: ${dataset.data[index]}`;
                },
              },
            },
            scales: {
              xAxes: [{
                distribution: 'series',
                ticks:        {
                  autoSkip: false,
                  display:  false,
                },
                // type: "time",
              }],
              yAxes: [
                {
                  scaleLabel: {
                    display:     true,
                    labelString: 'Grade',
                  },
                  display: true,
                  // stacked: true,
                  ticks:   {
                    min: 60,
                    max: 100,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default StudentChart;