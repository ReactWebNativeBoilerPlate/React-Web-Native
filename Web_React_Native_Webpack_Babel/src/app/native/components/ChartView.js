import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Toolbar from "./Toolbar";

import RadioGroup from "react-native-radio-buttons-group";

import AreaChart from "./charts/area-chart/with-gradient";
import AreaStackChart from "./charts/area-stack/index";
import BarChart from "./charts/bar-chart/vertical-with-labels";
import BarStackChart from "./charts/bar-stack/index";
import LineChart from "./charts/line-chart/with-gradient";
import PartialChart from "./charts/partial-chart/line-chart";
import PieChart from "./charts/pie-chart/with-dynamic-slices";
import ProgressCircle from "./charts/progress-circle/index";
import ProgressGuage from "./charts/progress-gauge/index";
import XAxis from "./charts/x-axis/scale-linear";
import YAxis from "./charts/y-axis/index";

const charts = {
  AREA_CHART: 0,
  AREA_STACK: 1,
  BAR_CHART: 2,
  BAR_STACK: 3,
  LINE_CHART: 4,
  PARTIAL_CHART: 5,
  PIE_CHART: 6,
  PROGRESS_CIRCLE: 7,
  PROGRESS_GUAGE: 8,
  X_AXIS: 9,
  Y_AXIS: 10
};

export default class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Area Chart",
          value: "0"
        },
        {
          label: "Area Stack",
          value: "1"
        },
        {
          label: "Bar Chart",
          value: "2"
        },
        {
          label: "Bar Stack",
          value: "3"
        },
        {
          label: "Line Chart",
          value: "4"
        },
        {
          label: "Partial Chart",
          value: "5"
        },
        {
          label: "Pie Chart",
          value: "6"
        },
        {
          label: "Progress Circle",
          value: "7"
        },
        {
          label: "Progress Guage",
          value: "8"
        },
        {
          label: "X-Axis",
          value: "9"
        },
        {
          label: "Y-Axis",
          value: "10"
        }
      ]
    };
  }

  // update state
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    var selectedValue = selectedButton
      ? selectedButton.value
      : this.state.data[0].value;

    return (
      <View style = {{flex: 1}}>
        <Toolbar
          headerText="Charts"
          isBackEnabled={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.container}>
            {selectedValue == charts.AREA_CHART && <AreaChart />}
            {selectedValue == charts.AREA_STACK && <AreaStackChart />}
            {selectedValue == charts.BAR_CHART && <BarChart />}
            {selectedValue == charts.BAR_STACK && <BarStackChart />}
            {selectedValue == charts.LINE_CHART && <LineChart />}
            {selectedValue == charts.PARTIAL_CHART && <PartialChart />}
            {selectedValue == charts.PIE_CHART && <PieChart />}
            {selectedValue == charts.PROGRESS_CIRCLE && <ProgressCircle />}
            {selectedValue == charts.PROGRESS_GUAGE && <ProgressGuage />}
            {selectedValue == charts.X_AXIS && <XAxis />}
            {selectedValue == charts.Y_AXIS && <YAxis />}

            <RadioGroup style = {styles.radioGroupStyle}
              radioButtons={this.state.data} onPress={this.onPress} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  radioGroupStyle: {
    padding: 10,
  }
});
