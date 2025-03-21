<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-dashboards-js-vuejs'

function printPdf_Click() {
    report.printToPdf();
}

function printHtml_Click() {
    report.print();
}

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Dashboard.mrt");

</script>

<template>
    <button @click=printPdf_Click>Print Dashboard as PDF</button>
    <button @click=printHtml_Click>Print Dashboard as HTML</button>
</template>

<style scoped></style>
