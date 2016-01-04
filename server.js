var 	express = require('express')
    ,app 	= express()
    ,_ = require('underscore')
    ,util 	= require('util')
    ,os 	= require('os');


var 	rootDir = '/Users/jgartland/PROJECTS/SANDBOX/PLAYGROUND/chris_marvel/bootstrap_sample_proj'// + '/app'
    ,port 	= 3101;


app.use(express.static(rootDir));

app.listen(port);


//===================
console.log('Serving files from: '+rootDir)
console.log('Listening on: ' + getAddresses() + ':' + port + '');
console.log('Press Ctrl + C to stop.');


function getAddresses(){
    var interfaces = os.networkInterfaces(),
        addresses = [];

    _.each(interfaces,function(net){
        _.each(net,function(address){
            if (address.family == 'IPv4' && !address.internal) addresses.push(address.address);
        })
    })

    return addresses;
}