function handleRequest(inputData) {

    // Copy the data over
    $('#sourceData').val(inputData.locationData).trigger('change');

    // Update the options
    $("#region_sel").val(inputData.regionId)
    $("#lat_sel").val(-1);
    $("#long_sel").val(-1);
    $( "#clusterCB" ).prop( "checked", true );

    // Make the map
    $('#makeMapButton').click();
}


chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {

        handleRequest(request.resultData);

        // On success
        sendResponse(true);
    }
);