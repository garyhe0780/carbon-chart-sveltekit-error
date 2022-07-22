<script lang="ts">
  import "@carbon/styles/css/styles.css";
  import "@carbon/charts/styles.css";
  import { BarChartSimple } from "@carbon/charts-svelte";
	import type { BarChartOptions, ScaleTypes } from '@carbon/charts/interfaces';


	const options: BarChartOptions = {
    title: "Simple bar (discrete)",
    height: "400px",
    axes: {
      left: { mapsTo: "value" },
      bottom: { mapsTo: "group", scaleType: "labels" as ScaleTypes.LABELS },
    },
  };

</script>

<BarChartSimple
  data={[
    { group: "Qty", value: 65000 },
    { group: "More", value: 29123 },
    { group: "Sold", value: 35213 },
    { group: "Restocking", value: 51213 },
    { group: "Misc", value: 16932 },
  ]}
  options={options}
/>
