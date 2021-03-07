import {Line} from "react-chartjs-2";
const Chart = ({chartData}) => {
  //   let chartD = {
  //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //     datasets: [
  //       {
  //         label: "Expected",
  //         data: [0, 30, 20, 60, 40, 50, 20],
  //         borderColor: "#f1bd8e",
  //         backgroundColor: "rgba(241, 189, 142, 0.5)",
  //       },
  //       {
  //         label: "Current",
  //         data: [0, 10, 20, 15, 35, 45, 10],
  //         borderColor: "#bf6159",
  //         backgroundColor: "#D79C96",
  //       },
  //     ],
  //   };

  return (
    <div className='dashboard-chart bg-white'>
      <Line
        data={chartData}
        width={500}
        height={250}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          elements: {
            line: {
              tension: 0.000001,
            },
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  color: "rgba(0,0,0,0)",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;
