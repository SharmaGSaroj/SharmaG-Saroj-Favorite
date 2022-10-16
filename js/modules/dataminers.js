function getData(targeturl, callback) {
    console.log('fired from the data miner file');

    //fetch is a JS API that runs AJAX requests and get data from the resources

    fetch(targeturl) //pass in the path to the data source 
        .then((response) => response.json())
        .then(data => {
            console.log(data);

            callback(data);
        });

}

export { getData }