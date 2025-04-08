<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer';
import '../styles.css';

var report1 = new Stimulsoft.Report.StiReport();
report1.loadFile('Dashboards/Dashboard.mrt');

var report2 = new Stimulsoft.Report.StiReport();
report2.loadFile('Dashboards/Orders.mrt');
</script>

<template>
    <div class="container">
        <h4>This sample demonstrates how to add two viewers to one page:</h4>
        <div class="container-viewer">
            <Viewer :report="report1" />
            <Viewer :report="report2" />
        </div>
    </div>
</template>

<style scoped></style>
