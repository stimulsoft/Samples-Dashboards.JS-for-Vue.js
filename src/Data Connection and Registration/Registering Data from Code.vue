<script setup lang="ts">
import { ref } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer'

var report = ref(Stimulsoft.Report.StiReport.createNewDashboard());

function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
    var newReport = new Stimulsoft.Report.StiReport();
    newReport.loadFile("Dashboards/Orders.mrt");
    newReport.dictionary.databases.clear();
    newReport.regData("Orders", "Orders", dataSet);
    report.value = newReport;
}

function buttonXmlClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readXmlSchemaFile("Data/Orders.xsd");
    dataSet.readXmlFile("Data/Orders.xml");

    updateReport(dataSet);
}

function buttonJsonClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readJsonFile("Data/Orders.json");

    updateReport(dataSet);
}

</script>

<template>
    <div>
        <button @click=buttonXmlClick>Register XML Data</button>
        <button @click=buttonJsonClick>Register JSON Data</button>
        <Viewer :report=report />
    </div>
</template>

<style scoped></style>