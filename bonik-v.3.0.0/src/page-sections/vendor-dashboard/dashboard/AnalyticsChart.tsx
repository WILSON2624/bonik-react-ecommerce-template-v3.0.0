import {
  Title,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  ChartOptions,
  CategoryScale,
  LineController,
  Chart as ChartJS
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { colors } from "@utils/themeColors";

ChartJS.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Filler
);

const datasetOptions = {
  fill: true,
  borderWidth: 1,
  pointRadius: 2,
  pointBorderWidth: 4,
  borderColor: colors.primary.main,
  backgroundColor: colors.primary.light
};

const options: ChartOptions = {
  responsive: true,
  indexAxis: "x",
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          console.log(context.element.y);
          let label = context.dataset.label || "";

          if (label) {
            label += " - ";
          }

          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
              context.parsed.y
            );
          }

          return label;
        }
      }
    }
  }
};

// ===================================================================
type Props = { sales: { labels: string[]; data: number[] } };
// ===================================================================

export default function AnalyticsChart({ sales }: Props) {
  return (
    <Chart
      type="line"
      options={options}
      data={{
        labels: sales.labels,
        datasets: [{ data: sales.data, ...datasetOptions }]
      }}
    />
  );
}
