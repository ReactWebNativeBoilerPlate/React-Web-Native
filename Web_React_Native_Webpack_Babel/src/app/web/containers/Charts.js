import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Chart } from "react-google-charts";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Charts(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display3" align="center" gutterBottom>
        Charts
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="display5" align="start" gutterBottom>
            Scatter Chart:
          </Typography>
          <Chart
            chartType="ScatterChart"
            data={[
              ["Age", "Weight"],
              [8, 12],
              [4, 5.5],
              [11, 14],
              [4, 5],
              [3, 3.5],
              [6.5, 7]
            ]}
            options={{
              title: "Age vs. Weight comparison",
              hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
              vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
              legend: "none"
            }}
            width="100%"
            height="400px"
            legendToggle
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="display5" align="start" gutterBottom>
            Area Chart:
          </Typography>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            legendToggle
            rows={[[2015, 5], [2016, 3], [2018, 1]]}
            columns={[
              {
                type: "number",
                label: "year"
              },
              {
                label: "AttentionSpan",
                type: "number"
              }
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="display5" align="start" gutterBottom>
            Bar Chart:
          </Typography>
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={[
              ["Year", "Visitations", { role: "style" }],
              ["2010", 10, "color: gray"],
              ["2020", 14, "color: #76A7FA"],
              ["2030", 16, "color: blue"],
              [
                "2040",
                22,
                "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"
              ],
              [
                "2050",
                28,
                "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
              ]
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="display5" align="start" gutterBottom>
            Bubble Chart:
          </Typography>
          <Chart
            chartType="BubbleChart"
            width="100%"
            height="400px"
            data={[
              [
                "ID",
                "Life Expectancy",
                "Fertility Rate",
                "Region",
                "Population"
              ],
              ["CAN", 80.66, 1.67, "North America", 33739900],
              ["DEU", 79.84, 1.36, "Europe", 81902307],
              ["DNK", 78.6, 1.84, "Europe", 5523095],
              ["EGY", 72.73, 2.78, "Middle East", 79716203],
              ["GBR", 80.05, 2, "Europe", 61801570],
              ["IRN", 72.49, 1.7, "Middle East", 73137148],
              ["IRQ", 68.09, 4.77, "Middle East", 31090763],
              ["ISR", 81.55, 2.96, "Middle East", 7485600],
              ["RUS", 68.6, 1.54, "Europe", 141850000],
              ["USA", 78.09, 2.05, "North America", 307007000]
            ]}
            options={{
              title:
                "Correlation between life expectancy, fertility rate " +
                "and population of some world countries (2010)",
              hAxis: { title: "Life Expectancy" },
              vAxis: { title: "Fertility Rate" },
              bubble: { textStyle: { fontSize: 11 } }
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="display5" align="start" gutterBottom>
            Line Chart:
          </Typography>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[
              ["Year", "Sales", "Expenses"],
              ["2004", 1000, 400],
              ["2005", 1170, 460],
              ["2006", 660, 1120],
              ["2007", 1030, 540]
            ]}
            options={{
              title: "Company Performance",
              curveType: "function",
              legend: { position: "bottom" }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="display5" align="start" gutterBottom>
            Pie Chart:
          </Typography>
          <Chart
            chartType="PieChart"
            data={[["Age", "Weight"], ["a", 12], ["b", 5.5]]}
            options={{
              title: "",
              pieHole: 0.6,
              slices: [
                {
                  color: "#2BB673"
                },
                {
                  color: "#d91e48"
                },
                {
                  color: "#007fad"
                },
                {
                  color: "#e9a227"
                }
              ],
              legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                  color: "233238",
                  fontSize: 14
                }
              },
              tooltip: {
                showColorCode: true
              },
              chartArea: {
                left: 0,
                top: 0,
                width: "100%",
                height: "80%"
              },
              fontName: "Roboto"
            }}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="display5" align="start" gutterBottom>
            Geo Chart:
          </Typography>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                }
              }
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={[
              ["Country", "Popularity"],
              ["Germany", 200],
              ["United States", 300],
              ["Brazil", 400],
              ["Canada", 500],
              ["France", 600],
              ["RU", 700]
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}

Charts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Charts);
