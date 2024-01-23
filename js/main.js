

function generateLabel() {
    var dateForm = document.getElementById("dateForm").value;
    
    var shiftNumber = document.getElementById("shiftNumber").value;
    
    var mName = document.getElementById("mName").value;
    
    var numberOfItems = document.getElementById("numberOfItems").value;
    
    var nMachine = document.getElementById("nMachine").value;
    
    var color = document.getElementById("color").value;
    
    var employee = document.getElementById("employee").value;
    
    var quality = document.getElementById("quality").value;
    
    var weight = document.getElementById("weight").value;

    var barcodeData = document.getElementById("barcode").value;
    
    var tableContent = document.getElementById('tableContent');
    tableContent.innerHTML = '';

    var table = document.getElementById('mainTable');
            var row1 = table.insertRow();
            var cell1_1 = row1.insertCell(0);
            var cell1_2 = row1.insertCell(1);
            cell1_1.innerHTML = '<strong>التاريخ :</strong>';
            cell1_2.innerHTML = dateForm;

            var row2 = table.insertRow();
            var cell2_1 = row2.insertCell(0);
            var cell2_2 = row2.insertCell(1);
            cell2_1.innerHTML = '<strong>الوردية :</strong>';
            cell2_2.innerHTML = shiftNumber;

            var row3 = table.insertRow();
            var cell2_1 = row3.insertCell(0);
            var cell2_2 = row3.insertCell(1);
            cell2_1.innerHTML = '<strong>إسم :</strong>';
            cell2_2.innerHTML = mName;

            var row4 = table.insertRow();
            var cell2_1 = row4.insertCell(0);
            var cell2_2 = row4.insertCell(1);
            cell2_1.innerHTML = '<strong>عبوة :</strong>';
            cell2_2.innerHTML = numberOfItems;

            var row5 = table.insertRow();
            var cell2_1 = row5.insertCell(0);
            var cell2_2 = row5.insertCell(1);
            cell2_1.innerHTML = '<strong>ماكينة :</strong>';
            cell2_2.innerHTML = nMachine;

            var row6 = table.insertRow();
            var cell2_1 = row6.insertCell(0);
            var cell2_2 = row6.insertCell(1);
            cell2_1.innerHTML = '<strong>لون :</strong>';
            cell2_2.innerHTML = color;

            var row7 = table.insertRow();
            var cell2_1 = row7.insertCell(0);
            var cell2_2 = row7.insertCell(1);
            cell2_1.innerHTML = '<strong>عامل :</strong>';
            cell2_2.innerHTML = employee;

            var row8 = table.insertRow();
            var cell2_1 = row8.insertCell(0);
            var cell2_2 = row8.insertCell(1);
            cell2_1.innerHTML = '<strong>جودة :</strong>';
            cell2_2.innerHTML = quality;

            var row9 = table.insertRow();
            var cell2_1 = row9.insertCell(0);
            var cell2_2 = row9.insertCell(1);
            cell2_1.innerHTML = '<strong>وزن :</strong>';
            cell2_2.innerHTML = weight;

            var row10 = table.insertRow();
            var cell1_1 = row10.insertCell(0);
            cell1_1.innerHTML = `<svg id="barcodef"></svg>`

    // Display additional data

    // table.innerHTML += `<svg id="barcodef"></svg>`;
    table.innerHTML += `<button id="printBtn" onclick="printArea('table')" class="btn btn-success w-25">طباعه</button>`;


    var element = document.getElementById("barcodef");
    JsBarcode(element, barcodeData);
}

function printArea(){
    hiddenBtn();
    var printContents = document.getElementById('printArea').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function hiddenBtn(){
    document.getElementById("printBtn").style.visibility = 'hidden';
}