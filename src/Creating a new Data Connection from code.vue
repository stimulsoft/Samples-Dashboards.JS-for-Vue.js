<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Orders.mrt");
report.dictionary.clear();

var database = new Stimulsoft.Report.Dictionary.StiJsonDatabase("Orders", "Orders.json");
report.dictionary.databases.add(database);
report.dictionary.synchronize();
</script>

<template>
    <Viewer :report="report" />
</template>

<style scoped></style>
