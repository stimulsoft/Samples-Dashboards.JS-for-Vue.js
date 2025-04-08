<script setup lang="ts">
import { ref } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer';
import "../styles.css";

var report = ref(Stimulsoft.Report.StiReport.createNewDashboard());

function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
    var newReport = new Stimulsoft.Report.StiReport();
    newReport.loadFile('Dashboards/Orders.mrt');
    newReport.dictionary.databases.clear();
    newReport.regData('Orders', 'Orders', dataSet);
    report.value = newReport;
}

function buttonXmlClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readXmlSchemaFile('Data/Orders.xsd');
    dataSet.readXmlFile('Data/Orders.xml');

    updateReport(dataSet);
}

function buttonJsonClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readJsonFile('Data/Orders.json');

    updateReport(dataSet);
}
</script>

<template>
    <div class="container">
        <div class="container-button">
            <button @click="buttonXmlClick" class="button" title="Using regData() method for registering XML data">Register XML Data</button>
            <button @click="buttonJsonClick" class="button" title="Using regData() method for registering JSON data">Register JSON Data</button>
        </div>
        <div>
            <Viewer :report="report" />
        </div>
    </div>
</template>

<style scoped></style>
